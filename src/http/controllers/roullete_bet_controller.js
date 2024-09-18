import Roullete from "../../dataBase/models/roullete_bet_model.js";

const store = async (req, res) => {
  try {
    req.body.betNumber = parseInt(req.body.betNumber);
    req.body.drawnNumber = Math.ceil(Math.random() * 100);
    req.body.drawnNumber == parseInt(req.body.betNumber)
      ? (req.body.bet.status = "WON")
      : (req.body.bet.status = "LOSER");
    await Roullete.create(req.body);
    res.json();
  } catch (error) {
    res.status(400).json(error);
  }
};
const index = async (req, res) => {
  try {
    const content = await Roullete.find(req.query).exec();
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
    await Roullete.findByIdAndUpdate(req.params.id).exec();
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
