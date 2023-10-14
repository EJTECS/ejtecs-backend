import express from "express";
import { connect, disconnect } from "./repository/index.js";
import productRoutes from "./routes/product.js";
const app = express();
app.use(express.json());

await connect();
process.on("exit", async () => {
    await disconnect();
});

app.use(productRoutes);

app.listen(8080);
