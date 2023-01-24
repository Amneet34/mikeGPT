from app import app
from models import db, User, Answer

def run_seeds():
    print('Seeding database ... 🌱')
    with app.app_context():
      user = User('mikegpt', 'mikegpt@example.com', '111')
      db.session.add(user)
      db.session.commit()
      user = User.query.first()
      seeded_answers = []
      for _ in range(1):
        answer = Answer('Nah fuck the system')
        seeded_answers.append(answer)
      db.session.add_all(seeded_answers)
      db.session.commit()
      print('Done! 🌳')
run_seeds()