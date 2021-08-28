from flask import Flask, request, redirect, url_for, send_file, send_from_directory, render_template
from werkzeug.utils import secure_filename
import os

app = Flask(__name__, static_folder='./build', static_url_path='/',)
app.config['UPLOAD_PATH'] = 'uploads'



@app.route("/")
def hello_world():
    print('server started')
    return app.send_static_file('index.html')

@app.route('/image_upload/<id>', methods=['POST'])
def upload_file(id):
    try:
        f = request.files['user_image']
        imgLocation = app.config['UPLOAD_PATH'] + "/" + id + "-" + secure_filename(f.filename)
        f.save(imgLocation)
        imgRoute = "/download/" + id + '-' + secure_filename(f.filename)
        print('------------------------------Image Route Debugging------------------------------')
        print(imgLocation)
        print(imgRoute)
        print(os.listdir(app.config['UPLOAD_PATH']))
        print('------------------------------------------------------------')
        return redirect(imgRoute)
    except:
        return 'Something Broke'


@app.route('/download/<pathToImg>', methods=['GET', 'POST'])
def download_file(pathToImg):
    try:
        print(pathToImg)
        sendImage = app.config['UPLOAD_PATH'] + "/" + pathToImg
        return send_file(sendImage)
        #return send_file("tmp/tinder.jpg")
        #return send_from_directory(app.config['UPLOAD_PATH'], path=pathToImg, as_attachment=False)
    except:
        return "Download Failed"

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))



    





    