import express from "express";
import cors from "cors";
import contactsRouter from "./app/routes/contact.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

export default app;
