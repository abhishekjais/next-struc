import mongoose from "mongoose";
const connection = {
    isConnected: false || 0
}
const database = async (req, res, next) => {
    mongoose.set("debug", true);
    if (mongoose.connections[0].readyState) return next();
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
    // connection.isConnected = db.connections[0].readyState;
    // console.log(connection.isConnected, '-------isConnected----',);
    // req.db = process.env.DB_NAME;
    // req.dbClient = db;
    return next();
}
export default database;