import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import productRoutes from "./routes/products.routes.js";
import authRoutes from "./routes/auth.routes.js";

import { notFoundHandler } from "./middlewares/notFound.js";
import { errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "¡Bienvenido a la API de Tienda!",
    version: "1.0.0",
    endpoints: {
      auth: "/auth/login",
      products: "/api/products",
    },
  });
});

app.use("/auth", authRoutes);
app.use("/api/products", productRoutes);

app.use(notFoundHandler);

app.use(errorHandler);

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(
      `Servidor iniciado exitosamente Puerto: ${PORT} URL: http://localhost:${PORT}`
    );
  });
}

// Exportar la app para Vercel
export default app;
