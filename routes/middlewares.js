exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/api/oauth/login-kakao');
    }
};

exports.isNotLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated) {
        next();
    } else {
        res.redirect('/');
    }
}