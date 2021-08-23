from flask import Flask, request, redirect, url_for, send_file, send_from_directory
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


@app.route('/download/<pathToImg>', methods=['GET', 'POST'])
def download_file(pathToImg):
    try:
        return send_from_directory("tmp", filename=pathToImg, as_attachment=False)
    except:
        return 'Download Failed'





    





    