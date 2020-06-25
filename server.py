from flask import Flask , render_template , redirect , url_for
import api

app = Flask(__name__ , static_url_path='/static')

@app.route('/')
def index ():
    return render_template('index.html' , name=api.getRepoList())

@app.route('/contacto/')
def redirect():
    return render_template('contacto.html')


app.run(port=80 , debug=True)