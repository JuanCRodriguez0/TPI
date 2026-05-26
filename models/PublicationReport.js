import {DataTypes, Model,sequelize} from "sequelize";
import sequelize from "../db/config";

class PublicationReport extends Model{};

PublicationReport.init(
    {
        idPublicationReport: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        },
        reason: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        idUser: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idPublication: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize,
        tableName: 'users',
        timestamps: true,
    }
);


export default PublicationReport;