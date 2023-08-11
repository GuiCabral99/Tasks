import mongoose from "mongoose";

const connection = {};

async function connect() {
  if (connection.isConnected) {
    return;
  }
  const db = await mongoose.connect(
    "mongodb+srv://guicabral7641:k1NCyMKKXqVDbJL5@cluster0.uzw8jz8.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  );
  connection.isConnected = db.connections[0].readyState;
}

async function disconnect() {
  if (connection.isConnected) {
    await mongoose.disconnect();
    connection.isConnected = false;
  }
}

const db = { connect, disconnect };
export default db;
