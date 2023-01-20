from app import app
from models import db, User

def run_seeds():
    print('Seeding database ... 🌱')
    # Add your seed data here
    with app.app_context():
      user = User('mikegpt', 'mikegpt@example.com', '22222222')
      db.session.add(user)
      db.session.commit()
      print('Done! 🌳')

run_seeds()