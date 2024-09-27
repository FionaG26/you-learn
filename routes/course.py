from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from db import db  # Importing db from db.py
from models import Course, Enrollment

bp = Blueprint('course', __name__)

# Route to get all courses
@bp.route('/courses', methods=['GET'])
@jwt_required()
def get_courses():
    courses = Course.query.all()
    return jsonify([{'id': course.id, 'title': course.title, 'description': course.description} for course in courses])

# Route to create a new course (for instructors)
@bp.route('/courses', methods=['POST'])
@jwt_required()
def create_course():
    data = request.get_json()
    instructor = get_jwt_identity()
    new_course = Course(title=data['title'], description=data['description'], instructor_id=instructor['id'])
    db.session.add(new_course)
    db.session.commit()
    return jsonify(message="Course created"), 201

# Route to enroll in a course
@bp.route('/enroll', methods=['POST'])
@jwt_required()
def enroll_in_course():
    data = request.get_json()
    user = get_jwt_identity()
    enrollment = Enrollment(user_id=user['id'], course_id=data['course_id'])
    db.session.add(enrollment)
    db.session.commit()
    return jsonify(message="Enrolled in course"), 200

# Route to add predefined sample courses (for instructors)
@bp.route('/add_sample_courses', methods=['POST'])
@jwt_required()
def add_sample_courses():
    # Predefined list of sample courses
    sample_courses = [
        {
            'title': 'Python Basics',
            'description': 'Learn the fundamentals of Python programming.'
        },
        {
            'title': 'Object-Oriented Programming in Python',
            'description': 'Master OOP concepts using Python.'
        },
        {
            'title': 'JavaScript Fundamentals',
            'description': 'Learn the core concepts of JavaScript.'
        },
        {
            'title': 'Building SPAs with React',
            'description': 'Develop dynamic single-page applications using React.'
        }
    ]
    
    instructor = get_jwt_identity()  # Assuming the logged-in user is the instructor

    # Add courses to the database
    for course_data in sample_courses:
        new_course = Course(title=course_data['title'], description=course_data['description'], instructor_id=instructor['id'])
        db.session.add(new_course)
    
    db.session.commit()
    
    return jsonify(message="Sample courses added"), 201

