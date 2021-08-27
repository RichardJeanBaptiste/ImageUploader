from flask import Flask, request, redirect, url_for, send_file, send_from_directory, render_template
from werkzeug.utils import secure_filename
import os

app = Flask(__name__, static_url_path='', static_folder='./client/build')



#client/build/index.html
@app.route("/")
def hello_world():
    #return app.send_static_file('index.html')
    #return render_template('client/build/index.html')
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/image_upload/<id>', methods=['POST'])
def upload_file(id):
    try:
        f = request.files['user_image']
        imgLocation = "tmp/" + id + "-" + secure_filename(f.filename)
        f.save(imgLocation)
        imgRoute = "/download/" + id + '-' + secure_filename(f.filename)
        return redirect(imgRoute)
    except:
        return 'Something Broke'


@app.route('/download/<pathToImg>', methods=['GET', 'POST'])
def download_file(pathToImg):
    try:
        print(pathToImg)
        return send_from_directory("tmp", path=pathToImg, as_attachment=False)
    except:
        return "Download Failed"

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))



    





    