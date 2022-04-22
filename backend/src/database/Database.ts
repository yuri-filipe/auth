import mongoose from "mongoose";
class Mongoose {
  private url = "mongodb+srv://cluster01.b8yil.mongodb.net/auth?retryWrites=true&w=majority";
  private database = mongoose.connect(this.url, {
    user: "admin",
    pass: "22641127",
  });
  private mongoose = mongoose;

  private usersSchema = new this.mongoose.Schema({
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
  });

  private tokensSchema = new this.mongoose.Schema({
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
  });
  private redirectionSchema = new this.mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  });


  public Users = this.mongoose.model("users", this.usersSchema);
  public Tokens = this.mongoose.model("tokens", this.tokensSchema);
  public Redirection = this.mongoose.model("redirection", this.redirectionSchema);

  // try {
  //   schema = this.mongoose.model("client");
  // } catch (error) {
  //   schema = this.mongoose.model("client", usersSchema);
  // }
  // return schema;
}

const Database = new Mongoose()
export default Database