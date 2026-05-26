import sequelize from "../db/config";

import Users from "./Users.js";
import Tag from "./Tag.js";
import Rating from "./Rating.js";
import PublicationTag from "./PublicationTag.js";
import PublicationReport from "./PublicationReport.js";
import Publication from "./Publication.js";
import Message from "./Message.js";
import Image from "./Image.js";
import Follower from "./Follower.js";
import Comment from "./Comment.js";


// Users tiene 1 o muchas Publication
Users.hasMany(Publication, {foreignKey: 'idUser'})
Publication.belongsTo(Users, {foreignKey: 'idUser'});


// Publication tiene 1 o muchas etiquetas && Tag tiene muchas Publication
Publication.belongsToMany(Tag, { through: PublicationTag, foreignKey: 'idPublication'});
Tag.belongsToMany(Publication, { through: PublicationTag, foreignKey: 'idTag'});

// Publication tiene 1 o muchas Image
Publication.hasMany(Image, {foreignKey: 'idPublication'});
Image.belongsTo(Publication, {foreignKey: 'idPublication'});

// Publication tiene 0 o muchos Comment
Publication.hasMany(Comment, {foreignKey: 'idPublication'});
Comment.belongsTo(Publication, {foreignKey: 'idPublication'});

// Users escribe 0 o muchos Comment
Users.hasMany(Comment, {foreignKey: 'idUser'});
Comment.belongsTo(Users, {foreignKey: 'idUser'});

// Image tiene 0 o muchos Rating
Image.hasMany(Rating, {foreignKey: 'idImage'});
Rating.belongsTo(Image, {foreignKey: 'idImage'});

// Users hace 0 o muchos Rating
Users.hasMany(Rating, {foreignKey: 'idUser'});
Rating.belongsTo(Users, {foreignKey: 'idUser'});

// Users puede seguir 0 o muchos users
Users.belongsToMany(Users, {
    through: Follower,
    as: 'following',
    foreignKey: 'idFollower',
    otherKey: 'idFollowed',
});
Users.belongsToMany(Users,{
    through: Follower,
    as: 'followers',
    foreignKey: 'idFollowed',
    otherKey: 'idFollower',
});

// User manda Message 
Users.hasMany(Message, {foreignKey: 'idSender', as: 'sentMessages'});
Message.belongsTo(Users, {foreignKey: 'idSender', as: 'sender'});

// User recibe Message
Users.hasMany(Message, {foreignKey: 'idReceiver', as: 'receivedMessages'});
Message.belongsTo(Users, {foreignKey: 'idReceiver', as: 'receiver'});

// Publication tiene PublicationReport
Publication.hasMany(PublicationReport, {foreignKey: 'idPublication'});
PublicationReport.belongsTo(Publication, {foreignKey: 'idPublication'});

// Users hace PublicationReport
Users.hasMany(PublicationReport, {foreignKey: 'idUser'});
PublicationReport.belongsTo(Users, {foreignKey: 'idUser'});


export async function connectDatabase(){
    try{
        await sequelize.authenticate();
        console.log("Connected to the database successfully.");
        await sequelize.sync({alter: true});
        console.log("Synchronizing models.");
    }catch(err){
        console.error("Database connection failed. ", err);
    }
}