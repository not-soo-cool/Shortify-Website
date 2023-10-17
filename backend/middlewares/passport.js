const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const User = require('../models/User');


passport.use(new GoogleStrategy(() => {

}))

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callback: 'http://localhost:3000/api/v1/auth/google/callback',
    passReqToCallback: true,
    // scope:["profile", "email"]
    }, 
    function(request, accessToken, refreshToken, profile, done) {
        // User.create({ 
        //     name: profile.name, 
        //     email: profile.emails, 
        //     avatar: profile.picture
        //  }, function (err, user) {
        //     return done(err, user);
        // });
        done(null, profile)
    }
));

passport.serializeUser((user, done) => {
    done(null, user);
})  

passport.deserializeUser((user, done) => {
    done(null, user);
})