from flask import Flask
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from routes.auth import bp as auth_bp
from routes.course import bp as course_bp
from db import db  # Importing db from db.py

app = Flask(__name__)
CORS(app)

# Update with your PostgreSQL credentials
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://fiona:newpassword@localhost:5432/elearning'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = '46077d1b26e7daf02c820e8d250acdd5dbbf14694af3b388'

# Initialize db with the app
db.init_app(app)
jwt = JWTManager(app)

app.register_blueprint(auth_bp)
app.register_blueprint(course_bp)

if __name__ == '__main__':
    app.run(debug=True)

