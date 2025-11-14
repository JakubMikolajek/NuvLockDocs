import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

// Swagger docs
app.use("/docs", express.static(path.join(__dirname, "public/docs")));

// MQTT docs
app.use("/mqtt", express.static(path.join(__dirname, "public/mqtt")));

// optional: root redirect
app.get("/", (req, res) => {
  res.redirect("/docs");
});

app.listen(PORT, () => {
  console.log(`Docs running at http://localhost:${PORT}`);
  console.log(`Swagger: http://localhost:${PORT}/docs`);
  console.log(`MQTT docs: http://localhost:${PORT}/mqtt`);
});
