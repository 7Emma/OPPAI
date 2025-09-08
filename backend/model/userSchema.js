import mongoose from "mongoose";
import bcryptjs from "bcryptjs"
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin:{ type:Boolean, default:false}

  },
  { timestamps: true }
);

//hasher le mot de passe

userSchema.pre("save",async function(next){
  if(!this.isModified('password')){
    return next();
  }
  this.password=await bcryptjs.hash(this.password,10);
})

//vérifier la conconrdance du mot de passe renseigner pour la connexion
userSchema.methods.matchedPassword=async function(pass){
  return await bcryptjs.compare(pass,this.password)

}

const User = mongoose.model("User", userSchema);

export default User;
