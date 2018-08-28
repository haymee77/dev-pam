const express = require('express');
const passport = require('passport');
const { User } = require('../../models');
const router = express.Router();

// [카카오톡 로그인 요청]
router.get('/login-kakao/', passport.authenticate('kakao'));

// [카카오톡-passport callbackURL] 처리
router.get('/kakao/', passport.authenticate('kakao', {
    failureRedirect: '/kakao/failed/'
}), (req, res) => {
    console.log('-- kakao callback');
    console.log(req.statusCode);
    res.redirect('/');
});

// [카카오톡-passport callback] 처리
router.get('/kakao/success/', (req, res) => {
    res.send('kakao success');
    res.end();
});

router.get('/kakao/failed/', (req, res) => {
    res.send('kakao failed');
    res.end();
});

module.exports = router;