"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _authcontroller = require('./controllers/auth.controller'); var _authcontroller2 = _interopRequireDefault(_authcontroller);
var _servicescontroller = require('./controllers/services.controller'); var _servicescontroller2 = _interopRequireDefault(_servicescontroller);
const baseDir1 = `${__dirname}/pages/login`;
const baseDir2 = `${__dirname}/pages/404`;



class Server {
     __init() {this.app = _express2.default.call(void 0, )}
      __init2() {this.port = 1756}
    constructor() {;Server.prototype.__init.call(this);Server.prototype.__init2.call(this);
        this.app.use(_express2.default.urlencoded({ extended: false }))
        this.app.use(_cors2.default.call(void 0, ));
        this.app.use(_express.json.call(void 0, ))
        this.app.use(_express2.default.static(`${baseDir1}`));
        this.app.use(_express2.default.static(`${baseDir2}`));
        this.app.get("/", (req, res, next) => {
            res.sendFile("index.html", { root: baseDir1 });
        });
        this.app.get("/login", (req, res, next) => {
            res.sendFile("index.html", { root: baseDir1 });
        });
        this.app.use("/api", _authcontroller2.default)
        this.app.use("/services", _servicescontroller2.default)
        
        this.app.get("*", (req, res, next) => {
            res.sendFile("index.html", { root: baseDir2 });
        });


        this.app.listen(this.port, () => console.log("Server is runing and port: " + this.port))
    }
    // public g = this.app.get("/services/caio", (req, res) => {

    //     res.redirect("https://youtube.com.br")
    // })

}
const server = new Server()