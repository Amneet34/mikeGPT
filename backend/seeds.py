from app import app
<<<<<<< HEAD
from models import db, User, Question, Answer
=======
<<<<<<< HEAD
<<<<<<< HEAD
from models import db, User, Question, Answer
=======
from models import db, User, Question
>>>>>>> 54dcaca (why you asking all them questions🤔)
=======
from models import db, User, Question, Answer
>>>>>>> f00434e (wym)
>>>>>>> b639161 (wym)

def run_seeds():
    print('Seeding database ... 🌱')
    with app.app_context():
      user = User('mikegpt', 'mikegpt@example.com', '22222222')
      db.session.add(user)
      db.session.commit()
      user = User.query.first()
      seeded_questions = []
      for _ in range(1):
        question = Question('should we trust the system?')
        question.user_id = user.id
        seeded_questions.append(question)
      db.session.add_all(seeded_questions)
      db.session.commit()
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f00434e (wym)
>>>>>>> b639161 (wym)
      seeded_answers = []
      for _ in range(1):
        answer = Answer('Nah fuck the system')
        answer.question_id = question.id
        seeded_answers.append(answer)
      db.session.add_all(seeded_answers)
      db.session.commit()
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 54dcaca (why you asking all them questions🤔)
=======
>>>>>>> f00434e (wym)
>>>>>>> b639161 (wym)
      print('Done! 🌳')
run_seeds()