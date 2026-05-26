import { Model, DataTypes } from "sequelize";
import sequelize from "../db/config";

class Rating extends Model {}

Rating.init(
    {
        idRating : {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        },
        idImage: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idUser: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'rating',
        timestamps: true,
    },
);