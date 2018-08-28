const express = require('express');
const passport = require('passport');
const router = express.Router();

// [카카오톡 로그인 요청]
router.get('/login-kakao/', passport.authenticate('kakao'));

// [카카오톡-passport callbackURL] 처리
router.get('/kakao/', passport.authenticate('kakao', {
    failureRedirect: '/kakao/failed/'
}), (req, res) => {
    console.log('-- kakao callback');
    console.log(req.statusCode);
    res.redirect('/api/auth/kakao/success');
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


/*

// [카카오톡]토큰으로 사용자 정보 받아오기
router.get('/kakao-user/', (req, res) => {

    let token;

    if (req.query.token) {
        token = req.query.token;
    } else {
        token = "K0NFwa0NBjqq5Z3u3ho0OKQ5Z8hV51n-2Hev7Qo8BVUAAAFlUSOAHw";   // cFTB_7M-TKkez2VChCd-t6tgZN-3F6G2D-6HTwo8BVUAAAFlUSOAHg
    }

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        'Authorization': 'Bearer ' + token
    }

    const options = {
        url: 'https://kapi.kakao.com/v2/user/me',
        headers: headers
    }

    request(options, function (err, response, body) {
        
        if (!err && response.statusCode == 200) {

            console.log(body);

            const res_body = JSON.parse(body);

            console.log(res_body);

            const has_email = res_body.kakao_account.has_email;
            const email = res_body.kakao_account.email;

            console.log(has_email);

            if (email) {

                console.log('true');
            } else {
                console.log('false');
                res.writeHead(302, {
                    'Location': 'https://kauth.kakao.com/oauth/authorize?client_id=ca88ffb100084f8cb536f88932a29f84&redirect_uri=http://localhost:3000/api/oauth/kakao/&response_type=code&scope=account_email'
                });
                res.end();
            }

            res.status(200).json(body);
        }
    });

}); 

// [카카오톡]사용자 동의 후 코드 받기
router.get('/kakao/', (req, res) => {

    const authorized_code = req.query.code;

    console.log("has body?");
    console.log(res.body);

    if (authorized_code) {
        console.log(authorized_code);

        // 받은 코드로 토큰 요청
        const headers = {
            'User-Agent': 'Super Agent/0.0.1',
            'Content-Type': 'application/x-www-form-urlencoded'
        }

        const options = {
            url: 'https://kauth.kakao.com/oauth/token',
            method: 'POST',
            headers: headers,
            form: {
                'grant_type': 'authorization_code',
                'client_id': 'ca88ffb100084f8cb536f88932a29f84',
                'redirect_uri': 'http://localhost:3000/api/oauth/kakao/',
                'code': authorized_code
            }
        }

        // 토큰 요쳥
        request(options, function (err, response, body) {

            // 토큰 요청 성공 시
            if (!err && response.statusCode == 200) {
                console.log("success?");

                const token_info = JSON.parse(body);

                console.log("access_token: " + token_info.access_token);
                console.log("token_type: " + token_info.token_type);
                console.log("refresh_token: " + token_info.refresh_token);
                console.log("expires_in: " + token_info.expires_in);
                console.log("scope: " + token_info.scope);

                request('http://localhost:3000/api/oauth/kakao-user/?token=' + token_info.access_token);

            } else {
                console.log(response.statusCode);
                console.log(body);
            }
        });

    }

});

*/

module.exports = router;



// https://kauth.kakao.com/oauth/authorize?client_id=a0abd437b44cfdbb646ee7805def69e8&redirect_uri=http://localhost:3000/api/oauth/kakao/&response_type=code

/*
curl -v -X POST https://kauth.kakao.com/oauth/token \
 -d 'grant_type=authorization_code' \
 -d 'client_id=a0abd437b44cfdbb646ee7805def69e8' \
 -d 'redirect_uri=http://localhost:3000/api/oauth/kakao/' \
 -d 'code=QLZBAJpCxIMMwTrtSZglVYVqxa9XnXFuCqZGGwV0GEALZsgSv-KEA8076JE44jldjxNMmwo8BJ4AAAFlM7_Fww'
*/