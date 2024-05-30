from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
api = Api(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:roman2360@localhost/quiz'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class RoleModel(db.Model):
    __tablename__ = 'Role'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(45))
    users = db.relationship('UserModel', backref='role')

class UserModel(db.Model):
    __tablename__ = 'User'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    first_name = db.Column(db.String(45))
    last_name = db.Column(db.String(45))
    nick_name = db.Column(db.String(45), unique=True)
    email = db.Column(db.String(128), unique=True)
    password = db.Column(db.String(64))
    role_id = db.Column(db.Integer, db.ForeignKey('Role.id'), nullable=False)



    def to_dict(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "nick_name": self.nick_name,
            "email": self.email,
            "password": self.password,
            "role_id": self.role_id
        }


with app.app_context():
    db.create_all()

class User(Resource):
    def get(self, user_id=None):
        if user_id is None:
            users = UserModel.query.all()
            return [user.to_dict() for user in users]
        else:
            user = UserModel.query.get(user_id)
        if user:
            return user.to_dict()
        return {'message': 'User not found'}, 404

    def post(self):
        data = request.get_json()
        existing_user_email = UserModel.query.filter_by(email=data.get('email')).first()
        existing_user_nick = UserModel.query.filter_by(nick_name=data.get('nick_name')).first()
        if existing_user_email is not None:
            return {'message': 'User with this email already exists'}, 400
        if existing_user_nick is not None:
            return {'message': 'User with this nickname already exists'}, 400
        try:
            new_user = UserModel(
                first_name=data.get('first_name'),
                last_name=data.get('last_name'),
                nick_name=data.get('nick_name'),
                email=data.get('email'),
                password=data.get('password'),
                role_id=data.get('role_id')
            )
            db.session.add(new_user)
            db.session.commit()
            return {'message': 'User created successfully', 'user': new_user.to_dict()}, 201
        except Exception as e:
            # Handle database errors or unexpected exceptions
            db.session.rollback()  # Rollback changes if an exception occurs
            return {'message': f'An error occurred creating the user: {str(e)}'}, 500

    def put(self, user_id):
        user = UserModel.query.get(user_id)
        if user:
            data = request.get_json()
            user.first_name = data.get('first_name', user.first_name)
            user.last_name = data.get('last_name', user.last_name)
            user.nick_name = data.get('nick_name', user.nick_name)
            user.email = data.get('email', user.email)
            user.password = data.get('password', user.password)
            user.role_id = data.get('role_id', user.role_id)
            db.session.commit()
            return {'message': 'User updated successfully', 'user': user.to_dict()}
        return {'message': 'User not found'}, 404

    def delete(self, user_id):
        user = UserModel.query.get(user_id)
        if user:
            db.session.delete(user)
            db.session.commit()
            return {'message': 'User deleted successfully'}, 200
        return {'message': 'User not found'}, 404

api.add_resource(User, '/users', '/users/<int:user_id>')

@app.route('/')
def index():
    return "Welcome to the User API"

if __name__ == '__main__':
    app.run(debug=True)