import conn from "../conn.js";
import betSchema from "../bet_schema.js";

const Schema = conn.Schema;

const jackpotBetSchema = new Schema({
  bet: betSchema,
  numbers: {
    type: [Schema.Types.Number],
    validade: (numeros) => {
      return numeros.length == 3;
    },
    required: true,
  },
});

const JackPotBet = conn.model("JackPot", jackpotBetSchema);

export default JackPotBet;
