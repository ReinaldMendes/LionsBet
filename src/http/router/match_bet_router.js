import e from "express";
import match_bet_controller from "../controllers/match_bet_controller.js";

const router = e.Router();

router.post("/", match_bet_controller.store);
router.get("/", match_bet_controller.index);
router.get("/:id", match_bet_controller.show);
router.put("/:id", match_bet_controller.update);
router.delete("/:id", match_bet_controller.destroy);

export default router;
