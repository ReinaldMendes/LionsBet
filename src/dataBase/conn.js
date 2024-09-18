import mongoose from "mongoose";

const mongoDB = process.env.MONGODB;
async function main() {
  try {
    await mongoose.connect(mongoDB);
    console.log(" Conexão realiza com sucesso");
  } catch (error) {
    console.log(error);
  }
}
main();
export default mongoose;
