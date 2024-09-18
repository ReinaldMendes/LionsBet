import MatchBet from "../../dataBase/models/match_bet_model.js";

const store = async (req, res) => {
  try {
    await MatchBet.create(req.body);
    res.json();
  } catch (error) {
    res.status(400).json(error);
  }
};
const index = async (req, res) => {
  try {
    const content = await MatchBet.find(req.query).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
};
const show = async (req, res) => {
  try {
    const content = await Aeroporto.findById(req.params.id).exec();
    resp.json(content);
  } catch (error) {
    resp.json(error);
  }
};
const update = async (req, res) => {
  try {
    await MatchBet.findByIdAndUpdate(req.params.id).exec();
    res.json();
  } catch (error) {
    res.status(400).json(error);
  }
};

const destroy = async (req, res) => {
  try {
    await MatchBet.findByIdAndDelete(req.params.id).exec();
    res.json();
  } catch (error) {
    res.status(400).json(error);
  }
};

export default {
  store,
  index,
  show,
  update,
  destroy,
};
