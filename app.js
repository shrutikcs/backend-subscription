import express from "express";
import { PORT } from "./config/env.js";
import userRouter from "./routes/user.route.js" 
import authRouter from "./routes/auth.route.js" 
import subscriptionRouter from "./routes/subscription.route.js" 

const app = express();

app.use("/api/v1/auth", authRouter)
app.use("/api/v1/users", userRouter)
app.use("/api/v1/subscriptions", subscriptionsRouter)

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
    console.log(`listening to the port ${PORT}`)
});

export default app