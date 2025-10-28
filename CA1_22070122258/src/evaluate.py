# src/evaluate.py
import joblib
import pandas as pd
from sklearn.metrics import accuracy_score, f1_score, classification_report




def evaluate(model_path, data_path):
model = joblib.load(model_path)
df = pd.read_csv(data_path)
if 'target' in df.columns:
y = df['target']
X = df.drop(columns=['target'])
elif 'label' in df.columns:
y = df['label']
X = df.drop(columns=['label'])
else:
raise ValueError('No target column found for evaluation')


preds = model.predict(X)
print('Accuracy:', accuracy_score(y, preds))
print('F1:', f1_score(y, preds))
print(classification_report(y, preds))




if __name__ == '__main__':
import argparse
parser = argparse.ArgumentParser()
parser.add_argument('--model', default='src/model.joblib')
parser.add_argument('--data', default='data/train.csv')
args = parser.parse_args()
evaluate(args.model, args.data)
