import conn from "../conn.js";

const Schema = conn.Schema;

const CompetitorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Competitor = conn.model("Competitor", ConpetitorSchema);

export default Competitor;
