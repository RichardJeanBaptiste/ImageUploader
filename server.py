from flask import Flask, request
from werkzeug.utils import secure_filename

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    #print(request.method)
    print(request.files)
    try:
        if request.method == 'GET':
            print('ABCDEF')
            
        else:
            print("request method error")

    except:
        print("failed to save")

    
    return "abcdefg"


    