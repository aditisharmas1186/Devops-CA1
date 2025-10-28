# src/predict.py
import joblib
import pandas as pd




def predict(model_path, input_csv, output_csv):
model = joblib.load(model_path)
X = pd.read_csv(input_csv)
preds = model.predict(X)
out = pd.DataFrame({'prediction': preds})
out.to_csv(output_csv, index=False)
print(f'Wrote predictions to {output_csv}')




if __name__ == '__main__':
import argparse
parser = argparse.ArgumentParser()
parser.add_argument('--model', default='src/model.joblib')
parser.add_argument('--input', default='data/test.csv')
parser.add_argument('--output', default='submission.csv')
args = parser.parse_args()
predict(args.model, args.input, args.output)
