const express = require('express');
const passport = require('passport');
const { User } = require('../../models');
const {
  isLoggedIn,
  isNotLoggedIn,
  isLoggedInCheck
} = require("../middlewares");
const router = express.Router();
const path = require('path');

// [카카오톡 로그인 요청]
router.get('/login-kakao/', passport.authenticate('kakao'));

// [카카오톡-passport callbackURL] 처리
router.get('/kakao', passport.authenticate('kakao', {
    failureRedirect: '/kakao/failed/'
}), (req, res) => {
    console.log('-- /kakao/');
    res.redirect('/api/oauth/kakao/success/');
});

// [카카오톡-passport callbackURL] 테스트
router.get('/kakao/success/', isLoggedIn, (req, res) => {
    console.log('-- /kakao/success/');
    if (req.user.name === undefined || req.user.name === null) {
        res.render('pug/social-join', {
            email: req.user.email,
            nick: req.user.nick
        });
    } else {
        res.redirect('/');
    }
});

// [카카오톡-passport callbackURL] 실패 시 처리
router.get('/kakao/failed/', (req, res) => {
    res.send('kakao failed');
    res.end();
});

router.get('/check/', isLoggedInCheck);
// router.get("/check", isLoggedInCheck, (req, res) => {
//   if (req.user.name === undefined || req.user.name === null) {
//     res.send("Not loged in");
//   } else {
//     res.send("is log in");
//   }
// });

module.exports = router;