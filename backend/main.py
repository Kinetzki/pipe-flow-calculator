from flask import Flask, request
import colebrook

app = Flask(__name__)

@app.route("/friction", methods=["POST"])
def get_pipe():
    data = request.json()
    factor = colebrook.sjFriction(data["roughness"], data["re"])
    return factor

if __name__ == '__main__':
    app.run(debug=True)
