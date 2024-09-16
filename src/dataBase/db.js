import mongoose from "mongoose";

const mongoDB =
  "mongodb+srv://reinald302009:gMn95QlTaahvIBtF@cluster0.sviwi.mongodb.net/lionsbet";
async function main() {
  try {
    await mongoose.connect(mongoDB);
    console.log(" Conexão realiza com sucesso");
  } catch (error) {
    console.log(error);
  }
}

export default mongoose;
