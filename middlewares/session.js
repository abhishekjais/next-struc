import {
    session, promisifyStore, Store, MemoryStore,
} from 'next-session';
import connectMongo from 'connect-mongo';
import mongoose from "mongoose";
const MongoStore = connectMongo({ Store, MemoryStore });

export default function (req, res, next) {
    const mongoStore = new MongoStore({
        client: req.dbClient, // see how we use req.dbClient from the previous step
        stringify: false,
        mongooseConnection: mongoose.connection
    });
    return session({
        store: promisifyStore(mongoStore),
    })(req, res, next);
}