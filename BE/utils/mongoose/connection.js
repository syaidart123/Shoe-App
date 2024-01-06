import mongoose from "mongoose";

export default () => {
  const Connection = mongoose.connect(
    "mongodb://127.0.0.1:27017/penjualan_sepatu",
    {
      connectTimeoutMS: 1000,
    }
  );
  mongoose.connection.on("connected", () =>
    console.log("connected to db penjualan sepatu")
  );
  mongoose.connection.on("reconnected", () => console.log("Reconnected to db"));
  mongoose.connection.on("error", () => console.error("Error connection"));
  return Connection;
};
