import conn from "./conn.js";

const Schema = conn.Schema;

const rechargeSchema = new Schema({
  value: {
    type: Schema.Types.Number,
    min: 10,
  },
  status: {
    type: Schema.Types.String,
    enum: ["WON", "LOST", "TIED"],
    required: "true",
  },
});

const paymentSchema = new Schema({
  value: {
    type: Schema.Types.Number,
    min: 10,
  },
  status: {
    type: Schema.Types.String,
    enum: ["FINISHED", "PENDING", "RECUSED", "CANCELLED"],
    default: "PENDING",
  },
});

const betSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    value: {
      type: Schema.Types.Number,
      requide: "true",
      min: 1,
    },
    date: {
      type: Schema.Types.Date,
      require: "true",
    },
    status: rechargeSchema,
    payment: paymentSchema,
  },
  {
    timestamps: true,
  }
);

const Bet = conn.model("Bet", betSchema);

export default Bet;
