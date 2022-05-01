import express from 'express';

const app = express();

//routes

import testRoutes from "./routes/test.routes.js";

app.use("/api/test", testRoutes);

export default app;