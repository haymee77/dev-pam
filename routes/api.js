var express = require('express');
var router = express.Router();

// api test
let users = [
    {
        id: 1,
        name: 'Rachel'
    },
    {
        id: 2,
        name: 'Monica'
    },
    {
        id: 3,
        name: 'Pheebe'
    }
];

/* GET users listing. */
router.get('/users', (req, res) => {
    return res.json(users);
});

router.get('/users/:id', (req, res) => {
  
    const id = parseInt(req.params.id, 10);

    if (!id) {
        return res.status(400).json({error: 'Incorrect id'});
    }

    let user = users.filter(user => {
        return user.id === id;
    });

    if (!user[0]) {
        return res.status(404).json({errro: 'Unknown user'});
    }

    return res.json(user[0]);
  
});

router.delete('/users/:id', (req, res) => {

    const id = parseInt(req.params.id, 10);

    if (!id) {
        return res.status(400).json({error: 'Incorrect id'});
    }

    const userIdx = users.findIndex(user => {
        return user.id === id;
    });

    if (userIdx === -1) {
        return res.status(404).json({errro: 'Unknown user'});
    }

    users.splice(userIdx, 1);
    return res.status(204).send();

});

module.exports = router;
