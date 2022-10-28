from flask import Flask, redirect, url_for, request, render_template
from flask_assets import Environment, Bundle
import os
import random


IMG_FOLDER = os.path.join('static', '/img/')


def random_andrew_quote():
    """
    return a random quote from Andrew Brown
    """
    quotes = [
        "Instagram is not the answer.",
        "You can discover everything you need to know about everything by looking at your hands",
        "Being born was the most influential thing that’s ever happened to me, for myself.",
        "When Life Gives You Big Problems, Just Be Happy You Forgot All Your Little Problems.",
        "The Lack Of Emotion In My Face Doesn't Mean I'm Unhappy.",
        "When The First Animal Went Extinct That Should've Been A Sign.",
        "How Can Mirrors Be Real If Our Eyes Aren't Real."
    ]
    quote = "%s -- Andrew Brown" % random.choice(quotes)
    return quote

print("Loading App")
APP = Flask(__name__,
    static_url_path='',
    static_folder="web/static/",
    template_folder="web/templates/")

APP.config['UPLOAD_FOLDER'] = IMG_FOLDER

@APP.route("/")
def home():
    quote = random_andrew_quote()
    intro_image = os.path.join(APP.config['UPLOAD_FOLDER'], 'intro_background.jpg')
    return render_template('index.html', 
                           user_image=intro_image, 
                           random_quote=quote)

@APP.route("/image")
def image():
    return render_template("")
    
@APP.route('/hello/<name>')
def hello_name(name):
   return 'Hello %s!' % name
 
if __name__ == '__main__':
    APP.debug=True
    APP.run(host='0.0.0.0', port=80)