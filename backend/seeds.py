from app import app
from models import db, User, Question, Answer

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
        question1 = Question('Can we do the Code Challenge early?')
        question.user_id = user.id
        question1.user_id = user.id
        seeded_questions.append(question)
        seeded_questions.append(question1)
      db.session.add_all(seeded_questions)
      db.session.commit()
      seeded_answers = []
      for _ in range(1):
        answer1 =  Answer ('Not legally according to the authorities!')
        answer2 =  Answer ('Red Bull!!')
        answer3 =  Answer ('Ask Management!')
        answer4 =  Answer ('Legally I cannot!')
        answer5 =  Answer ('Burn the Boats')
        answer6 =  Answer ('Create React App is trash, use Vite')
        answer7 =  Answer ('Turing')
        answer8 =  Answer ('Be ready to stay till 10PM')
        answer9 =  Answer ('Trust the process!')
        answer10 = Answer ("I tore my ACL but I can walk to the doctor's.")
        answer11 = Answer ('ASK MR M2.')
        answer12 = Answer ('Dont buy an M2.')
        answer13 =  Answer ('If you want to be a 10x developer')
        answer14 =  Answer ('10x Developers use bundle instead of bundle install')
        answer15 =  Answer ('I became white because I coded in my basement for too long.')
        answer16 =  Answer ('npm is for losers, use bun')
        answer17 =  Answer ('Best Pokemon EvBlaziken')
        answer18 =  Answer ('Now all we have left to do is....')
        answer19 =  Answer ('I am not saying CANVAS is bad, but lets be honest, its HORRIBLE!!!')
        answer20 =  Answer ('If anyone asks we are doing Phase 4 Labs, a lot of Canvas!')
        answer21 =  Answer ('If anyone asks we are still in phase 3!')
        answer22 =  Answer ('CODE CHALLENGE first day of Phase 4!!!')
        answer23 =  Answer ('SKIPS ZAID during Feelings Friday, GO HELEN')
        answer24 =  Answer ('Ok class, Feelings Friday in Turing!')
        answer25 =  Answer ('Break for 2 minutes and 2 seconds starting 2 minutes ago')
        answer26 =  Answer ('Final Fantasy Tactics, oh ya never played, go home and play it tonight for educational purposes. ("Sponsored by Final Fantasy Tactics")')
        answer27 =  Answer ('I know somwhere my name being brought up in management arguments.')
        answer28 =  Answer ("If your replacable, don't bring your personality to work.")
        answer29 =  Answer ("Sometimes I be asking ChatGPT questions, and I'm like damn, I was thinking the same thing. ")
        answer30 =  Answer ("If you put a grilled cheese sandwich in front of me, I could teach it how to code.")
        answer31 =  Answer ("Links are in Tabmagic")
        answer32 =  Answer ("Unfortunately, we will have feeling Friday at 3:45.")
        answer33 =  Answer ("To complain to management, proceeds to give you management's email but sends the wrong one 'accidentaly'")
        answer34 =  Answer ("Don't tell anyone about gregslist, it will be fun to watch them")
        answer35 =  Answer ("I am negotitating my lease in Turing.")
        answer36 =  Answer ("Meet in Collins, the class doesn't know I booked it.")
        answer37 =  Answer ("Due to the science fair, we can leave 4 minutes early.")
        answer38 =  Answer ("Students working on React, Meet in Turing!")
        answer39 =  Answer ("Be back in Turing in 1hour!")
        answer40 = Answer('Nah fuck the system')










        answer1.question_id = question1.id

        seeded_answers.append(answer1)
        seeded_answers.append(answer2)
        seeded_answers.append(answer3)
        seeded_answers.append(answer4)
        seeded_answers.append(answer5)
        seeded_answers.append(answer6)
        seeded_answers.append(answer7)
        seeded_answers.append(answer8)
        seeded_answers.append(answer9)
        seeded_answers.append(answer10)
        seeded_answers.append(answer11)
        seeded_answers.append(answer12)
        seeded_answers.append(answer13)
        seeded_answers.append(answer13)
        seeded_answers.append(answer14)
        seeded_answers.append(answer15)
        seeded_answers.append(answer16)
        seeded_answers.append(answer17)
        seeded_answers.append(answer18)
        seeded_answers.append(answer19)
        seeded_answers.append(answer20)
        seeded_answers.append(answer21)
        seeded_answers.append(answer22)
        seeded_answers.append(answer23)
        seeded_answers.append(answer24)
        seeded_answers.append(answer25)
        seeded_answers.append(answer26)
        seeded_answers.append(answer27)
        seeded_answers.append(answer28)
        seeded_answers.append(answer29)
        seeded_answers.append(answer30)
        seeded_answers.append(answer31)
        seeded_answers.append(answer32)
        seeded_answers.append(answer33)
        seeded_answers.append(answer34)
        seeded_answers.append(answer35)
        seeded_answers.append(answer36)
        seeded_answers.append(answer37)
        seeded_answers.append(answer38)
        seeded_answers.append(answer39)
        seeded_answers.append(answer40)
      db.session.add_all(seeded_answers)
      db.session.commit()
      print('Done! 🌳')
run_seeds()