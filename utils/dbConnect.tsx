import mongoose from "mongoose";

const connection = {
    isConnected: false || 0
}

const dbConnect = async () => {
    if (connection.isConnected) {
        return true;
    }
    const db = await mongoose.connect('mongodb://127.0.0.1:27017/ecom', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    connection.isConnected = db.connections[0].readyState;
    console.log(connection.isConnected, '-----------');

}

export default dbConnect;