from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

db = SQLAlchemy()
migrate = Migrate(db)

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    admin = db.Column(db.Boolean, server_default='f', nullable=True)
    questions = db.relationship('Question', backref='user', lazy=True)

    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = password

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'questions': [question.to_dict() for question in Question.query.filter_by(user_id=self.id)],
        }

    def __repr__(self):
        return '<User %r>' % self.username

class Question(db.Model):
    __tablename__ = 'questions'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    content = db.Column(db.Text, nullable=False)
    status = db.Column(db.String, nullable=True, server_default='published')

    def __init__(self, content):
        self.content = content

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'content': self.content,
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f00434e (wym)
>>>>>>> b639161 (wym)
            'answers': [answer.to_dict() for answer in Answer.query.filter_by(question_id=self.id)],
        }

    def __repr__(self):
        return f'<Question {self.id}>'

class Answer(db.Model):
    __tablename__ = 'answers'
    id = db.Column(db.Integer, primary_key=True)
    question_id = db.Column(db.Integer, db.ForeignKey('questions.id'), nullable=True)
    content = db.Column(db.Text, nullable=False)
    status = db.Column(db.String, nullable=True, server_default='published')

    def __init__(self, content):
        self.content = content

    def to_dict(self):
        return {
            'id': self.id,
            'question_id': self.question_id,
            'content': self.content
        }

def __repr__(self):
<<<<<<< HEAD
    return f'<Answer {self.id}>'
=======
<<<<<<< HEAD
    return f'<Answer {self.id}>'
=======
        }

    def __repr__(self):
        return f'<Question {self.id}>'
>>>>>>> 54dcaca (why you asking all them questions🤔)
=======
    return f'<Answer {self.id}>'
>>>>>>> f00434e (wym)
>>>>>>> b639161 (wym)
