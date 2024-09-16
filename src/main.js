import e from "express";
import user_router from "./http/router/user_router.js";
const app = e();
const port = 3000;
app.use(e.json());
app.use("/user", user_router);
app.listen(port, () => console.log("Servidor escutando "));
