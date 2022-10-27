from flask import Flask, redirect, url_for, request, render_template
from flask_assets import Environment, Bundle



print("Loading App")
APP = Flask(__name__,
    static_url_path='',
    static_folder="web/static/",
    template_folder="web/templates/")


@APP.route("/")
def home():
    return render_template('index.html')


@APP.route('/hello/<name>')
def hello_name(name):
   return 'Hello %s!' % name
 
if __name__ == '__main__':
    APP.debug=True
    APP.run()