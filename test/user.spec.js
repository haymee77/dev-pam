const should = require('should');
const request = require('supertest');
const app = require('../app');

describe('PUT /api/users/:id', () => {
    before('sync database', () => {
        require('../models/models').sequelize.sync({force: false}).then(() => {
            console.log("sync success");
            console.log("env: " + process.env.NODE_ENV);
        });
    });

    it.only('should return 200 status code', (done) => {
        request(app)
            .put('/api/users/4')
            .send({
                name: 'Mcka2'
            })
            .end((err, res) => {
                if (err) throw err;
                done();
            });
    });
});

describe('GET /api/users', () => {
    it('should return 200 status code', (done) => {
        request(app).get('/api/users').expect(200).end((err, res) => {
            if (err) throw err;
            done();
        });
    });
    
    it('should return array', (done) => {
        request(app).get('/api/users').expect(200).end((err, res) => {
            if (err) throw err;

            res.body.should.be.an.instanceof(Array).and.have.length(3);
            res.body.map(user => {
                user.should.have.properties('id', 'name');
                user.id.should.be.a.Number();
                user.name.should.be.a.String();
            });

            done();
        });
    });
});