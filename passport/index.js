const kakao = require('./kakaoStrategy');

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        console.log('-- serialize');
        console.log(user.id);
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        console.log('-- deserialize');
        user = done(null, id);
    })

    kakao(passport);
};