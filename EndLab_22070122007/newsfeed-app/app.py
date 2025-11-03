from flask import Flask, render_template

app = Flask(__name__)

news_items = [
    {"title": "AI Revolutionizes Healthcare", "author": "TechTimes"},
    {"title": "Stock Markets Hit Record Highs", "author": "Finance Daily"},
    {"title": "SpaceX Launches New Mission", "author": "SpaceNews"},
    {"title": "Climate Summit 2025 Begins", "author": "Global Environment"},
]

@app.route("/")
def home():
    return render_template("index.html", news_items=news_items)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
