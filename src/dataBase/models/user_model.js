import db from "../db.js";
const Schema = db.Schema;

const rechargeSchema = new Schema({
  value: {
    type: Schema.Types.Number,
    min: 10,
  },
  status: {
    type: Schema.Types.String,
    enum: ["Recusado", "Finalizado", "Pedente", "Cancelado"],
    default: "Pendente",
  },
});
const walletSchema = new Schema({
  balance: {
    type: Schema.Types.Number,
    default: 0,
    min: 0,
  },
  password: {
    type: Schema.Types.String,
    minLenght: 4,
    maxLenght: 4,
  },
  recharges: [rechargeSchema],
});

const userSchema = new Schema({
  email: {
    type: Schema.Types.String,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
      },
    },
    cpf: {
      type: Schema.Types.String,
    },
    nickname: {
      type: Schema.Types.String,
      required: true,
    },
    password: {
      type: Schema.Types.String,
      required: true,
      validate: {
        validator: function (v) {},
      },
    },
    wallet: walletSchema,
    acceptedTerms: {
      type: Schema.Types.String,
    },
  },
});
const User = db.model("User", userSchema);

export default User;
