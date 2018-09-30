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

    const query = 'SELECT * FROM CLASSES_TB_b AS CT, CLASS_SCHEDULE_TB AS CST WHERE CT.uid = CST.class_uid AND CT.uid = :id';
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
    let query = '';
    
    if (!id) {
      return res.status(400).json({ error: "Incorrect id" });
    }

    switch (id) {
      case "WORD":
        query = "SELECT * FROM CT_" + id + "_TB AS CO LEFT JOIN EXPRESSION_TB AS EX ON CO.contents_uid = EX.uid LIMIT 0, 10";
        
        break;
      case "SPEECH":
        query = "SELECT * FROM CT_" + id + "_TB LIMIT 0,5";

        break;
      case "DEBATE":
        query = "SELECT * FROM CT_" + id + "_TB AS DT LEFT JOIN DEBATE_OPTION_TB AS DOT ON DT.uid = DOT.debate_uid LIMIT 0, 6";

        break;        
      default:
        throw error;
    }

    // const query = "SELECT * FROM CT_" + id + "_TB AS CO LEFT JOIN EXPRESSION_TB AS EX ON CO.contents_uid = EX.uid LIMIT 0, 10";
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

exports.showContentExample = (req, res) => {

    const id = req.params.id;

    if (!id) {
        return res.status(400).json({ error: "Incorrect id" });
    }

    const query = "SELECT * FROM EXPRESSION_TB WHERE uid = :id ";
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