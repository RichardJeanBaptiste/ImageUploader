from flask import Flask, request, redirect, url_for, send_file
from werkzeug.utils import secure_filename

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route('/image_upload/<id>', methods=['POST'])
def upload_file(id):
    try:
        f = request.files['user_image']
        imgLocation = "tmp/" + id + "-" + secure_filename(f.filename)
        f.save(imgLocation)
        #print(imgLocation)
        imgRoute = "/send_image/" + id + '-' + secure_filename(f.filename)
        return redirect(imgRoute)
    except:
        return 'Something Broke'

@app.route('/send_image/<pathToImg>', methods=['GET', 'POST'])
def send_file(pathToImg):
    try:
        #return link
        print(pathToImg)
        pathToImg = "tmp/" + pathToImg
        return 'path to img'
    except:
        return 'Failed to send Image'

@app.route('/download/<pathToImg>')
def download_file(pathToImg):
    try:
        send_file("tmp/"+ pathToImg)
    except:
        return 'Download Failed'





    