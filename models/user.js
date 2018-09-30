module.exports = (sequelize, DataTypes) => (
    sequelize.define('USERS_TB_b', {
        name: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING(45),
            allowNull: true,   
        },
        email: {
            type: DataTypes.STRING(45),
            allowNull: true,
            unique: true,
        },
        mobile: {
            type: DataTypes.STRING(15),
            allowNull: true,
            unique: true,
        },
        nick: {
            type: DataTypes.STRING(45),
            allowNull: true,
            unique: true,
        },
        level: {
            type: DataTypes.STRING(20),
            allowNull: true,
        },
        sns_provider: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },
        sns_id: {
            type: DataTypes.STRING(30),
            allowNull: true,
        },
        sns_connect_dt: {
            type: DataTypes.DATE
        }
    }, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci',
        freezeTableName: true,
        createdAt: 'created_dt',
        updatedAt: 'updated_dt',
        deletedAt: 'deleted_dt',
        timestamp: true,
        paranoid: true, // 삭제일(복구용)    
    })
);
