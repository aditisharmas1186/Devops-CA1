# src/model_training.py
import argparse
import pandas as pd
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.pipeline import Pipeline
import joblib
from data_preprocessing import build_preprocessor




def train(data_dir, output):
train_df = pd.read_csv(f"{data_dir}/train.csv")
# assume target column is 'target' or 'label'
if 'target' in train_df.columns:
y = train_df['target']
X = train_df.drop(columns=['target'])
elif 'label' in train_df.columns:
y = train_df['label']
X = train_df.drop(columns=['label'])
else:
raise ValueError('No target column found in train.csv')


preprocessor = build_preprocessor(X)


# Simple ensemble pipeline (RF as baseline)
model = RandomForestClassifier(n_estimators=100, random_state=42)


pipe = Pipeline([
('pre', preprocessor),
('clf', model)
])


X_train, X_val, y_train, y_val = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)


pipe.fit(X_train, y_train)


# Save pipeline
joblib.dump(pipe, output)


# quick validation metric
score = pipe.score(X_val, y_val)
print(f"Validation accuracy: {score:.4f}")




if __name__ == '__main__':
parser = argparse.ArgumentParser()
parser.add_argument('--data-dir', default='data')
parser.add_argument('--output', default='src/model.joblib')
args = parser.parse_args()
train(args.data_dir, args.output)
