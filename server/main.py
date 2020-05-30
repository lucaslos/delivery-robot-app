from flask import Flask, render_template, redirect, url_for
from flask_socketio import SocketIO, emit
from flask_cors import CORS, cross_origin

try:
  import eventlet
except ImportError as e:
  pass  # instale o eventlet para habilitar o websockets

# Creating a flask app and using it to instantiate a socket object
app = Flask(__name__, static_folder="../docs", static_url_path="/")
cors = CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")

values = {
  'isAccelerating': False,
  'lefDoorIsOpen': False,
  'rightDoorIsOpen': False,
  'isTurningLeft': False,
  'isTurningRight': False,
  'isAccelerating': False,
  'isReversing': False,
}

@app.route('/')
def index():
  return redirect('/index.html')

# Handler for a message recieved over 'connect' channel
@socketio.on('connect')
def test_connect():
  emit('confirm connection',  { 'initialState': 'Lets dance' })

@socketio.on('set value')
def value_changed(msg):
  values[msg['name']] = msg['value']
  emit('update {}'.format(msg['name']), msg, broadcast=True)

# Notice how socketio.run takes care of app instantiation as well.
if __name__ == '__main__':
  socketio.run(app, host='0.0.0.0', debug=True)
