const kakaoStrategy = require('passport-kakao').Strategy;
const sequelize = require('sequelize');
const { User } = require('../models');

module.exports = (passport) => {
    // [카카오톡-passport] 처리
    passport.use(new kakaoStrategy({
        clientID: process.env.KAKAO_ID,
        clientSecret: process.env.KAKAO_SECRET_ID,
        callbackURL: '/api/auth/kakao/',
    }, async (accessToken, refreshToken, profile, done) => {
        try {

            const exUser = await User.find({ where: { sns_id: profile.id, sns_provider: 'kakao' } });

            if (exUser) {
                done(null, exUser);
            } else {
                const newUser = await User.create({
                    email: profile._json && profile._json.kaccount_email,
                    nick: profile.displayName,
                    sns_id: profile.id,
                    sns_provider: 'kakao',
                    sns_connect_dt: sequelize.fn('NOW')
                });
                done(null, newUser);
            }        

        } catch (error) {
            console.log('-- error: kakaoStrategy.js');
            done(error);
        }
    }));
};