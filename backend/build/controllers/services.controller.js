"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _Database = require('../database/Database'); var _Database2 = _interopRequireDefault(_Database);
const router = _express2.default.Router();
const { Tokens, Redirection } = _Database2.default
router.get("/", async (req, res) => {
    const token = req.query.token
    const email = req.query.email
    const name = req.query.name

    try {
        const response = await Tokens.findOne({ token: token })

        const redirect = await Redirection.findOne({ name: name })

        if (response && redirect) {
            
            setTimeout(() => {
                return res
                    .status(200)
                    .redirect(`${redirect.value}/users/authenticated?token=${token}&email=${email}`);
            }, 3000)

        }
        else {
            setTimeout(() => {
                return res
                    .status(200)
                    .json({ code: "unauthorized", msg: "Token invalido" });
            }, 3000)

        }
    } catch (err) {
        return res
            .status(500)
            .json({ code: "error", msg: "Erro interno" });
    }
});

router.get("/portainer", async (req, res) => {
    const token = req.query.token
    try {
        const response = await Tokens.findOne({ token: token })
        if (response) {
            if (response) {
                setTimeout(() => {
                    return res.status(200).redirect("https://portainer.tylers.com.br/");
                }, 3000)
            }
        }
        else {
            setTimeout(() => {
                return res
                    .status(200)
                    .json({ code: "unauthorized", msg: "Token invalido" });
            }, 3000)

        }
    } catch (err) {
        return res
            .status(500)
            .json({ code: "error", msg: "Erro interno" });
    }
});
exports. default = router;
