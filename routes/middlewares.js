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

exports.isLoggedInCheck = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.json({ user: req.user });
  } else {
    res.json({ 
        user: {
            "nick": null
        }   
    });
  }
};