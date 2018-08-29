// api test
const { User } = require('../../models');

exports.index = (req, res) => {
    User.findAll()
        .then(users => res.json(users));
};

exports.show = (req, res) => {
  
    const id = parseInt(req.params.id, 10);

    if (!id) {
        return res.status(400).json({error: 'Incorrect id'});
    }

    models.User.findOne({
        where: {
            id: id
        }
    }).then(user => {
        if (!user) {
            return res.status(404).json({errro: 'Unknown user'});    
        }

        return res.json(user);
    });
  
};

exports.destroy = (req, res) => {

    const id = parseInt(req.params.id, 10);

    if (!id) {
        return res.status(400).json({error: 'Incorrect id'});
    }

    models.User.destroy({
        where: {
            id: id
        }
    }).then(() => res.status(204).send());

};

exports.create = (req, res) => {
    const name = req.body.name || '';

    if (!name.length) {
        res.status(400).json({error: 'Incorrect name'});
    }

    models.User.create({
        name: name
    }).then((user) => res.status(201).json(user))

};

exports.update = (req, res) => {

    const id = parseInt(req.params.id, 10);
    const name = req.body.name || '';

    console.log("update--");
    console.log(id);
    console.log(name);

    if (!id) {
        return res.status(400).json({error: 'Incorrect id'});
    }

    if (!name.length) {
        return res.status(400).json({error: 'Incorrect name'});
    }

    models.User.update({
        name: name
    }, {
        where: {
            id: id
        }
    }).then((user) => res.status(201).json(user))
}
