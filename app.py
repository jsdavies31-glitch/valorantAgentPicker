from flask import Flask,render_template
import requests

app = Flask(__name__)


def getAPIData():
    r = requests.get('https://valorant-api.com/v1/agents')
    return r

data = getAPIData()

@app.route('/')
def index():
    #  data = getAPIData()
     return render_template("index.html")
   

@app.route('/agent')
def agent():
     return data.text

