module.exports = (sequelize, DataTypes) => (
    sequelize.define('USERS', {
        name: {
            type: DataTypes.STRING(40),
            allowNull: false,
            unique: true,
        },
    }, {
        freezeTableName: true,
        createdAt: 'created_dt',
        updatedAt: 'updated_dt',
        timestamp: true,
        paranoid: true, // 삭제일(복구용)    
    })
);
