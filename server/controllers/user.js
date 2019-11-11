const User = require('../models/user');
const { normalizeErrors } = require('../helpers/mongoose');
const jwt = require('jsonwebtoken');
const config = require('../config/dev');

exports.auth = function(req, res) {
    const { email, password } = req.body;

    if (!password || !email) {
        return res.status(422).send({errors: [{title: 'Data missing', detail: 'Provide email and password!'}]});
    }

    User.findOne({email}, function(err, user) {
        if (err) {
            return res.status(422).send({errors: normailizedErrors(err.errors)});
        }

        if (!user) {
            return res.status(422).send({errors: [{title: 'Invalid User!', detail: 'Provide email and password!'}]});
        }
        if(user.hasSamePassword(password)) {
            const token = jwt.sign({
                userId: user.id,
                username: user.username
              }, config.SECRET, { expiresIn: '1h' });
              
              return res.json(token);
        } else {
            return res.status(422).send({errors: [{title: 'Wrong Data!', detail: 'Wrong Email or Password!'}]});
        }
      
    });
}

exports.register = function(req,res) {

    const { username, email, password, passwordConfirmation } = req.body;
    
    if (!password || !email) {
        return res.status(422).send({errors: [{title: 'Data missing!', detail: 'Please provide email and password.'}]});
    }

    if (password !== passwordConfirmation) {
        return res.status(422).send({errors: [{title: 'Invalid Password.', detail: 'Password is not the same as cofirmation.'}]});
    }

    User.findOne({email}, function(err, existingUser){
        if (err) {
            return res.status(422).send({errors: MongooseHelpers.normalizeErrors(err.errors)}); 
        }

        if (existingUser) {
            return res.status(422).send({errors: [{title: 'Invalid Email.', detail: 'User with this email already exist.'}]});  
        }

        const user = new User({
            username,
            email,
            password
        });

        user.save(function(err) {
            if (err) {
                return res.status(422).send({errors: normalizeErrors(err.errors)});
            }

            return res.json({'registered': true})
        })
    })

    return res.json({username, email});
}