import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/pokedexdb");
    console.log('DB is connected')
  } catch (error) {
    console.error();
  }
};
