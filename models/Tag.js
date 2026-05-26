import {DataTypes, Model,sequelize} from "sequelize";
import sequelize from "../db/config";

class Tag extends Model{};

Tag.init(
    {
        idTag: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        tableName: 'tags',
        timestamps: true,
    }
);


export default Tag;