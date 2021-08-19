from flask import Flask, request
from werkzeug.utils import secure_filename

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route('/image_upload', methods=['POST'])
def upload_file():
    try:
        f = request.files['my_image']
        f.save(secure_filename(f.filename))
        return 'Image Saved'
    except:
        return 'Something Broke'
    


    