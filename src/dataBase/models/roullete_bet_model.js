import conn from "../conn.js";
import Bet from "../bet_schema.js";

const Schema = conn.Schema;

const roulletBetSchema = new Schema({
  bet: Bet,
  betNumber: {
    type: Schema.Types.Number,
    require: "true",
    min: 1,
    max: 100,
  },
  drawnNumber: {
    type: Schema.Types.Number,
    min: 1,
    max: 100,
  },
});

const Roullet = conn.model("Roullet", roulletBetSchema);

export default User;
