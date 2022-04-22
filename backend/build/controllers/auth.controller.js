"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _Database = require('../database/Database'); var _Database2 = _interopRequireDefault(_Database);
var _uuid = require('uuid');
const router = _express2.default.Router();
const { Tokens, Users } = _Database2.default
router.post("/login", async (req, res) => {
    const { email, password } = req.body
    try {
        const response = await Users.findOne({ email: email })
        if (response) {
            if (response.password === password) {
                let token = _uuid.v4.call(void 0, )
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

exports. default = router;
