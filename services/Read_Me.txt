1.Install Anaconda in the system
2.in the anaconda navigator, give pip install Flask-SQLAlchemy
3.in the anaconda navigator, give pip install Flask-Migrate

For checking the tables in the command line.
1.open anaconda prompt,navigate to data.sqlite and give sqlite3 data.sqlite command
2.Then give .tables to check the table names.

flask migrate commands
-----------------------
flask db init ##for the first time only-creates folders
flask db migrate -m "message"
flask db upgrade

Running the file
-----------------
1.python BasicModel.py
2.open the link http://127.0.0.1:5000/disabled/vsrraviteja@gmail.com

List of api
1. Request type: POST
  URL: localhost:5000/disabledRegister
  sample data : 			{"name":"arun","email":"arunkumar629@gmail.com","mobile":8056018286}

2. request type : POST
  URL: localhost:5000/volunteerRegister
  sample data: {"name":"arun","email":"arunkumar629@gmail.com","mobile":8056018286,"gender":"male","city_town_village":"chennnai","state":"tamilnadu","pincode":600103,"language_1":"tamil","language_2":"english","language_3":"none","highest_degree":"MCA"} 	