from app import app
from models import db, User

def run_seeds():
    print('Seeding database ... 🌱')
    with app.app_context():
      user = User('zaid', 'zaid@example.com', '111111111')
      db.session.add(user)
      db.session.commit()
      print('Done! 🌳')
run_seeds()