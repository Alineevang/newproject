import { Router } from "express";

const rotasAlunos = Router();

rotasAlunos.get("/", (req, res) => {
    return res.status(200).send({ message: "Rota GET ALL alunos" });
});

rotasAlunos.get("/:id", (req, res) => {
    const { id } = req.params;
    return res.status(200).
        send({ message: `Rota GET ALL alunos com ID ${id}` });
});

rotasAlunos.post("/", (req, res) => {
    const { nome, email, idade } = req.body;

    if (!nome || !email || !idade) {
        return res.status(400).
            send({ message: "Dados inválidos" });
    }
    return res.status(201).
        send({ message: "Rotas POST alunos" });
})

rotasAlunos.put("/:id", (req, res) => {
    const { id } = req.params;
    const { nome, email, idade } = req.body;

    if (!nome || !email || !idade) {
        return res.status(400).
            send({ message: "Dados inválidos" });
    }

    return res.status(200).
        send({ message: `Rotas PUT alunos por ID${id}` });
});

rotasAlunos.delete("/:id", (req, res) => {
    const { id } = req.params;
    return res.status(200).
        send({ message: `Rota DELETE alunos por ID${id}` });
});

export default rotasAlunos;
