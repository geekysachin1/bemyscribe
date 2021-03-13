from BasicModel import db,Disabled,Volunteer

db.create_all()
teja = Disabled("Teja","vsrraviteja@gmail.com",7358283605)
db.session.add(teja)
db.session.commit()
print(teja.json())