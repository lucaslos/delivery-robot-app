from flask import Flask, render_template
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

# values['slider1'] and values['slider2'] store the current value of the sliders
# This is done to prevent data loss on page reload by client.
values = {
  'isAccelerating': 25,
  'slider2': 0,
}

# Handler for a message recieved over 'connect' channel
@socketio.on('connect')
def test_connect():
  emit('confirm connection',  { 'initialState': 'Lets dance' })

@socketio.on('set isAccelerating')
def value_changed(message):
  values['isAccelerating'] = message['value']
  emit('update isAccelerating', message, broadcast=True)

# Notice how socketio.run takes care of app instantiation as well.
if __name__ == '__main__':
  socketio.run(app, host='0.0.0.0', debug=True)
