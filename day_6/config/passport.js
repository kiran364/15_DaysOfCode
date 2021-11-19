const passport = require("passport");
const LoacalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const User = require("../Models/userModel");
const JWTStrategy = require("passport-jwt").Strategy; 
const ExtractJwt = require("passport-jwt").ExtractJwt; //token extract
const dotenv = require("dotenv");
dotenv.config();  

let options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = process.env.SecretKey;

passport.use(new LoacalStrategy({
    usernameField:'email',
    passwordField:'password'
    },
    function (email, password, done) {
        // console.log(email, password);
        User.findOne({email}, function(err,result) {
            if (err) return done(err);

            if(result.length === 0) {
                return done(null, false, {message:'Incorrect email'});
            }

            const user = result;
            bcrypt.compare(password, user.password,function(err, result) {
                if(!result) {
                    return done(null, false, {message:" Incorrect password"})
                }

                return done(null, user);
            })
        })
    }
))
