const kakao = require('./kakaoStrategy');
const { User } = require('../models');

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        console.log('-- serialize');
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        console.log('-- deserialize');
        User.findOne({
            where: { id },
            attributes: ['id', 'name', 'nick', 'email', 'mobile', 'level'],
        })
        .then(user => done(null, user))
        .catch(err => done(err));
    })

    kakao(passport);
};