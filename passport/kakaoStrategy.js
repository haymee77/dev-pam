const kakaoStrategy = require('passport-kakao').Strategy;

module.exports = (passport) => {
    // [카카오톡-passport] 처리
    passport.use(new kakaoStrategy({
        clientID: process.env.KAKAO_ID,
        clientSecret: process.env.KAKAO_SECRET_ID,
        callbackURL: '/api/auth/kakao/',
    }, async (accessToken, refreshToken, profile, done) => {
        try {

            console.log('-- kakao profil');
            console.log(profile.id);
            done(null, profile);

        } catch (error) {
            console.log('-- error: kakaoStrategy.js');
            done(error);
        }
    }));
};