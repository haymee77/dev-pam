const express = require('express');
const passport = require('passport');
const { User } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const router = express.Router();

// [카카오톡 가입 연동]
router.post('/social-join', isLoggedIn, async (req, res, next) => {
    console.log('-- social-join');
    const { email, name, nick } = req.body;
    
    try {
        const exUser = await User.find({ where: { email } });
        if (exUser) {
            req.flash('joinError', '이미 가입된 메일입니다.');
            return res.redirect('/join');
        }
     
        res.redirect('/api/oauth/kakao/success');
        
    } catch (error) {
        console.error(error);
        return next(error);
    }
    
});

module.exports = router;