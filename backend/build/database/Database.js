"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
class Mongoose {constructor() { Mongoose.prototype.__init.call(this);Mongoose.prototype.__init2.call(this);Mongoose.prototype.__init3.call(this);Mongoose.prototype.__init4.call(this);Mongoose.prototype.__init5.call(this);Mongoose.prototype.__init6.call(this);Mongoose.prototype.__init7.call(this);Mongoose.prototype.__init8.call(this);Mongoose.prototype.__init9.call(this); }
   __init() {this.url = "mongodb+srv://cluster01.b8yil.mongodb.net/auth?retryWrites=true&w=majority"}
   __init2() {this.database = _mongoose2.default.connect(this.url, {
    user: "admin",
    pass: "22641127",
  })}
   __init3() {this.mongoose = _mongoose2.default}

   __init4() {this.usersSchema = new this.mongoose.Schema({
    name: {
      type: String,
      required: true,

    },
    email: {
      type: String,
      required: true,

    },
    password: {
      type: String,
      required: true,

    },
    token: {
      type: String,
      required: true,

    },
    id: {
      type: Number,
      required: true,

    }
  })}

   __init5() {this.tokensSchema = new this.mongoose.Schema({
    email: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
    timeStamp: {
      type: Number,
      required: true
    }
  })}
   __init6() {this.redirectionSchema = new this.mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  })}


   __init7() {this.Users = this.mongoose.model("users", this.usersSchema)}
   __init8() {this.Tokens = this.mongoose.model("tokens", this.tokensSchema)}
   __init9() {this.Redirection = this.mongoose.model("redirection", this.redirectionSchema)}

  // try {
  //   schema = this.mongoose.model("client");
  // } catch (error) {
  //   schema = this.mongoose.model("client", usersSchema);
  // }
  // return schema;
}

const Database = new Mongoose()
exports. default = Database