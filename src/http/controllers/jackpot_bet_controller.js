import JackPot from "../../dataBase/models/jackpot_bet_model.js";

const store = async (req, res) => {
  try {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    const c = Math.floor(Math.random() * 10);

    a == b && b == c
      ? (req.body.bet.status = "WON")
      : (req.body.bet.status = "LOST");
    req.body.numbers = [a, b, c];
    const content = await JackPot.create(req.body);
    res.status(201).json(content);
  } catch (error) {
    res.status(400).json(error);
  }
};
const index = async (req, res) => {
  try {
    const content = await JackPot.find(req.query).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
};
const show = async (req, res) => {
  try {
    const content = await JackPot.findById(req.params.id).exec();
    resp.json(content);
  } catch (error) {
    resp.json(error);
  }
};
const update = async (req, res) => {
  try {
    await JackPot.findByIdAndUpdate(req.params.id).exec();
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
};
