from sklearn.linear_model import LogisticRegression
import joblib
import numpy as np

X = np.array([[0.9, 0.1, 0.95, 0.88], [0.4, 0.3, 0.50, 0.60]])
y = [1, 0]

model = LogisticRegression()
model.fit(X, y)
joblib.dump(model, "trust_model.pkl")