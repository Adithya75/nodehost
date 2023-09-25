import exppress from "express";

const app = exppress();

app.use("/hello", (req, res) => {
  res.status(200).send({ status: true, message: "hello" });
});

export default app;
