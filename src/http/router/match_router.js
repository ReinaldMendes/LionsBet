import e from "express";
import match_controller from "../controllers/match_controller.js";

const router = e.Router();

router.post("/", match_controller.store);
router.get("/", match_controller.index);
router.get("/:id", match_controller.show);
router.put("/:id", match_controller.update);
router.delete("/:id", match_controller.destroy);

export default router;
