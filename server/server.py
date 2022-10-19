from flask import Flask, send_file, make_response

app = Flask(__name__)

@app.route('/ping')
def ping():
    # You can just return the string, but I am assuming you'll be returning way more
    return {
        'message': 'ping'
    }

@app.route('/exec/<name>')
def get_pic(name):
    # Instead of this, run name (or whatever input) through your model
    # Save the image generated to pics, and follow the steps below
    response = make_response(send_file(f'./pics/{name}.png'))
    # Enable Access-Control-Allow-Origin
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

