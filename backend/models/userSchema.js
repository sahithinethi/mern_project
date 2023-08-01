const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt =require("jsonwebtoken");
const SECRECT_KEY = "abcdefghijklmnop"
const userSchema = new mongoose.Schema({
  uname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Not Valid Email");
      }
    },
  },
  pass: {
    type: String,
    required: true,
    minlength: 8,
  },
  tokens: [
    {
        token: {
            type: String,
            required: true,
        }
    }
]
});

// hash password
userSchema.pre("save", async function (next) {
  if (this.isModified("pass")) {
    this.pass = await bcrypt.hash(this.pass, 12);
  }
  next();
});


// token generate
userSchema.methods.generateAuthtoken = async function(){
  try {
      let newtoken = jwt.sign({_id:this._id},SECRECT_KEY,{
          expiresIn:"1d"
      });

      this.tokens = this.tokens.concat({token:newtoken});
      await this.save();
      return newtoken;
  } catch (error) {
      res.status(400).json(error)
  }
}


const Users = mongoose.model("users", userSchema);

module.exports = Users;
