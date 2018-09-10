const { Courses, sequelize } = require("../../models");

exports.index = (req, res) => {
    Courses.findAll().then(courses => res.json(courses));
};

exports.show = (req, res) => {

    const id = parseInt(req.params.id, 10);

    if (!id) {
        return res.status(400).json({ error: 'Incorrect id' });
    }

    // Courses.findById(id).then(user => {
    //   if (!user) {
    //     return res.status(404).json({ errro: "Unknown user" });
    //   }

    //   return res.json(user);
    // });

    const query = 'SELECT * FROM CLASSES_TB AS CT, CLASS_SCHEDULE_TB AS CST WHERE CT.uid = CST.class_uid AND CT.uid = :id';
    const values = {
        id: id
    };

    sequelize
        .query(query, { replacements: values })
        .spread(function (results, metadata) {
            // 쿼리 실행 성공
            return res.json(results);
        }, function (err) {
            // 쿼리 실행 에러
            return res
              .status(404)
              .json({ errro: "Unknown courses" });
        });
      
};

exports.showContent = (req, res) => {
    
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ error: "Incorrect id" });
    }

    const query = 'SELECT * FROM CT_' + id + '_TB';
    const values = {
        id: id
    };

    sequelize
        .query(query, { replacements: values })
        .spread(function (results, metadata) {
            // 쿼리 실행 성공
            return res.json(results);
        }, function (err) {
            // 쿼리 실행 에러
            return res
                .status(404)
                .json({ errro: "Unknown courses" });
        });
}