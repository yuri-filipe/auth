import express, { json } from 'express'
import cors from 'cors'
import AuthController from './controllers/auth.controller'
import ServicesController from './controllers/services.controller'
const baseDir1 = `${__dirname}/pages/login`;
const baseDir2 = `${__dirname}/pages/404`;



class Server {
    private app = express()
    private readonly port = 1756
    constructor() {
        this.app.use(express.urlencoded({ extended: false }))
        this.app.use(cors());
        this.app.use(json())
        this.app.use(express.static(`${baseDir1}`));
        this.app.use(express.static(`${baseDir2}`));
        this.app.get("/", (req, res, next) => {
            res.sendFile("index.html", { root: baseDir1 });
        });
        this.app.get("/login", (req, res, next) => {
            res.sendFile("index.html", { root: baseDir1 });
        });
        this.app.use("/api", AuthController)
        this.app.use("/services", ServicesController)
        
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