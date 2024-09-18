import conn from "../conn.js";
import Bet from "../bet_schema.js";

const Schema = conn.Schema;

const MatchBetSchema = new Schema({
  Bet: Bet,
  Match: {
    type: Schema.Types.ObjectId,
    ref: "Match",
  },
  odd: {
    type: Schema.Types.Number,
    min: 10,
  },
  Competitor: {
    type: Schema.Types.ObjectId,
    ref: "Competitor",
  },
});

const User = conn.model("MatchBet", MatchBetSchema);

export default User;
