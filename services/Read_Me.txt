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