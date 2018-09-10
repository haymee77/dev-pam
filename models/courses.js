module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "CLASSES_TB",
    {
      uid: {
        type: DataTypes.INTEGER(11),
        primaryKey: true
      },
      teacher_uid: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      capacity: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      level: {
        type: DataTypes.STRING(20),
        allowNull: true
      },
      location: {
        type: DataTypes.STRING(200),
        allowNull: true
      },
      timetable: {
        type: DataTypes.STRING(20),
        allowNull: true
      },
      is_deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      created_dt: {
        type: DataTypes.STRING(30),
        allowNull: true
      },
      updated_dt: {
        type: DataTypes.DATE,
        allowNull: true
      }
    },
    {
      charset: "utf8",
      collate: "utf8_unicode_ci",
      freezeTableName: true,
      createdAt: "created_dt",
      updatedAt: "updated_dt",
      deletedAt: "is_deleted",
      timestamp: true
    //   paranoid: true // 삭제일(복구용)
    }
  );
