from app import app
from models import db, User, Question

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
      print('Done! 🌳')
run_seeds()