import express from "express";
import path from "path";
import { renderFile } from "ejs";

import api from "./api.js";

const app = express();
const router = express.Router();
const port = "8000";

router.get("/", async (req, res) => {
    const alunos = await api.fetchAlunos();

    res.render(path.resolve("./pages/index.html"), {arg: Object.values(alunos)[1].nome});
});

app.engine('html', renderFile);

app.use('/', router);
app.listen(port);
