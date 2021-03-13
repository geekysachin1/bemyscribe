import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

database_dir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(database_dir, 'data.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

migrate = Migrate(app,db)

# Creating a disabled persons table
class Disabled(db.Model):
	id = db.Column(db.Integer,primary_key=True)
	
	name = db.Column(db.Text)
	email = db.Column(db.String(64),unique=True,index=True,nullable=False)
	mobile = db.Column(db.Integer)
	applications = db.relationship('Application',backref='Disabled',lazy='dynamic')
	ratings = db.relationship('Volunteer_Rating',backref='Disabled',lazy='dynamic')
	def __init__(self,name,email,mobile):
		self.name =  name
		self.email = email
		self.mobile = mobile
	def json(self):
		return {"name":self.name,"email":self.email,"mobile":self.mobile}
	def __repr__(self):
		return f"Person who needs Scribe: {self.name}    "

# Creating Volunteer table
class Volunteer(db.Model):
	id = db.Column(db.Integer,primary_key=True)

	name = db.Column(db.Text)
	email = db.Column(db.String(64),unique=True,index=True,nullable=False)
	mobile = db.Column(db.Integer)
	gender = db.Column(db.String(20))
	city_town_village = db.Column(db.String(128))
	state = db.Column(db.String(64))
	pincode = db.Column(db.Integer)
	language_1 = db.Column(db.String(64))
	language_2 = db.Column(db.String(64))
	language_3 = db.Column(db.String(64))
	highest_degree = db.Column(db.String(64))
	vol_status = db.Column(db.String(64),default = "Y")
	applications = db.relationship('Application',backref='Volunteer',lazy='dynamic')
	ratings = db.relationship('Volunteer_Rating',backref='Volunteer',lazy='dynamic')
	def __init__(self,name,email,mobile,gender,city_town_village,state,pincode,language_1,language_2,language_3,highest_degree):
		self.name=name
		self.email = email
		self.mobile = mobile
		self.gender = gender
		self.city_town_village = city_town_village
		self.state = state
		self.pincode = pincode
		self.language_1 = language_1
		self.language_2 = language_2
		self.language_3 = language_3
		self.highest_degree = highest_degree
	def json(self):
		return {"name":self.name,"email":self.email,"mobile":self.mobile}
	def __repr__(self):
		return f"Volunteer: {self.name}    "

# Creating application master table
class Application(db.Model):
	id = db.Column(db.Integer,primary_key=True)

	exam_name = db.Column(db.Text)
	exam_date = db.Column(db.String(64))
	exam_start_time = db.Column(db.String(64))
	exam_end_time = db.Column(db.String(64))
	exam_centre_addr = db.Column(db.Text)
	exam_city = db.Column(db.String(64))
	exam_area_pincode = db.Column(db.Integer)
	skills_preference = db.Column(db.Text)
	gender_preference = db.Column(db.String(20))
	language_preference = db.Column(db.String(128))
	disabled_id = db.Column(db.Integer,db.ForeignKey('disabled.id'))
	volunteer_id = db.Column(db.Integer,db.ForeignKey('volunteer.id'))
	def __init__(self,exam_name,exam_date,exam_start_time,exam_end_time,exam_centre_addr,exam_city,exam_area_pincode,skills_preference,gender_preference,language_preference,disabled_id):
		self.exam_name = exam_name	
		self.exam_date = exam_date
		self.exam_start_time = exam_start_time
		self.exam_end_time = exam_end_time
		self.exam_centre_addr = exam_centre_addr
		self.exam_city = exam_city
		self.exam_area_pincode = exam_area_pincode
		self.skills_preference = skills_preference
		self.gender_preference = gender_preference
		self.language_preference = language_preference
		self.disabled_id = disabled_id
	def json(self):
		pass
	def __repr__(self):
		return f"Application ID: {self.id} ------ Disabled person ID: {self.disabled_id} ---- Volunteer ID: {self.volunteer_id}"

# Creating Rating table
class Volunteer_Rating(db.Model):
	id = db.Column(db.Integer,primary_key=True)

	disabled_id = db.Column(db.Integer,db.ForeignKey('disabled.id'))
	volunteer_id = db.Column(db.Integer,db.ForeignKey('volunteer.id'))
	timely_response = db.Column(db.Integer)
	behaviour = db.Column(db.Integer)
	feedback = db.Column(db.Text)
	def __init__(self,disabled_id,volunteer_id,timely_response,behaviour,feedback):
		self.disabled_id = disabled_id
		self.volunteer_id = volunteer_id
		self.timely_response = timely_response
		self.behaviour = behaviour
		self.feedback = feedback
	def json(self):
		pass
	def __repr__(self):
		return f"Feedback ID: {self.id} ------ Disabled person ID: {self.disabled_id} ---- Volunteer ID: {self.volunteer_id}"


