import e from "express";
import competitor_controller from "../controllers/competitor_controller.js";

const router = e.Router();

router.post("/", competitor_controller.store);
router.get("/", competitor_controller.index);
router.get("/:id", competitor_controller.show);
router.put("/:id", competitor_controller.update);
router.delete("/:id", competitor_controller.destroy);

export default router;
