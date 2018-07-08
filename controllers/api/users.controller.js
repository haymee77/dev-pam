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
        name: 'Pheebe2'
    }
];

exports.index = (req, res) => {
    return res.json(users);
};

exports.show = (req, res) => {
  
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
  
};

exports.destroy = (req, res) => {

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

};

exports.create = (req, res) => {
    const name = req.body.name || '';

    if (!name.length) {
        res.status(400).json({error: 'Incorrect name'});
    }

    const id = users.reduce((maxId, user) => {
        return user.id > maxId ? user.id : maxId
    }, 0) + 1;

    const newUser = {
        id: id,
        name: name
    };

    users.push(newUser);

    return res.status(201).json(newUser);
    // return res.status(201);
};