🏡 House Price Prediction — Kaggle Challenge

Dataset: House Prices: Advanced Regression Techniques

Objective: Predict final house sale prices using regression models.

Approach:

Data loading and preprocessing

Outlier removal (e.g., GrLivArea > 4000 & SalePrice < 300000)

Feature engineering

Model training (Lasso, Ridge, XGBoost, Stacked Regression)

Evaluate RMSE and submit predictions

Final Model: Stacked Regressor
Result Metric: RMSE
Files:

notebooks/house_price_analysis.ipynb – full code

src/ – modular Python scripts

submission.csv – output predictions