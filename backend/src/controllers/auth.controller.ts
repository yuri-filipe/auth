import express, { Router } from "express";
import Database from "../database/Database";
import { v4 } from 'uuid'
const router = express.Router();
const { Tokens, Users } = Database
router.post("/login", async (req, res) => {
    const { email, password } = req.body
    try {
        const response = await Users.findOne({ email: email })
        if (response) {
            if (response.password === password) {
                let token = v4()
                await new Tokens({
                    email: email,
                    token: token,
                    timeStamp: new Date().getTime()
                }).save()
                setTimeout(() => {
                    return res.status(200).json({ code: "sucess", msg: { token, email } });
                }, 3000)

            }
            else {
                setTimeout(() => {
                    return res
                        .status(200)
                        .json({ code: "unauthorized", msg: "Credenciais incorretas" });
                }, 3000)

            }
        }
        else {
            setTimeout(() => {
                return res
                    .status(200)
                    .json({ code: "unauthorized", msg: "Credenciais incorretas" });
            }, 3000)

        }
    } catch (err) {
        return res
            .status(500)
            .json({ code: "error", msg: "Erro interno" });
    }
});

export default router;
