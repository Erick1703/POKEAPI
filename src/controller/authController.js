
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { authRequired } from "../middleware/validateToken.js";
import { createAccesToken } from "../libs/jwt.js";



export const register = async (req, res) => {
    const { email, password, username } = req.body;
  try {
    const userFound = await User.findOne({email})
    if(userFound) return res.status(400).json(['The email is already in use'])

const passHash = await bcrypt.hash(password, 10)

    
    const newUser = new User({
      email,
      password:passHash,
      username,
    });

  const userSave =  await newUser.save();
 const token =  await createAccesToken({id:userSave._id})
        res.cookie('token', token)
   
  
   res.json({
    id:userSave._id,
    email:userSave.email,
    username:userSave.username,
    createdAt:userSave.createdAt,
    updatedAt:userSave.updatedAt
   })

  }catch (error) {
    res.status(500).json({message:error.message})

  }

};

export const login = async (req, res) => {
  const { email, password } = req.body;
try {

  const userFound = await User.findOne({email})
  if(!userFound) return res.status(400).json({message:'User not found'})

const isMatch = await bcrypt.compare(password, userFound.password)

  if(!isMatch) return res.status(400).json({message:'Invalid Credentials'})



const token =  await createAccesToken({id:userFound._id})
      res.cookie('token', token)
 

 res.json({
  id:userFound._id,
  email:userFound.email,
  username:userFound.username,
  createdAt:userFound.createdAt,
  updatedAt:userFound.updatedAt
 })

}catch (error) {
  res.status(500).json({message:error.message})

}

};
export const logout = (req, res)=>{
res.cookie('token', "",{
  expires:new Date(0)
})
return res.sendStatus(200);
}
export const profile = async(req, res)=>{
  
const userFound = await User.findById(req.user.id)

if(!userFound) return res.status(400).json({message: 'User not Found'})

return res.json({
  id:userFound._id,
  username: userFound.username,
  email:userFound.email,
  createdAt:userFound.createdAt,
  updatedAt: userFound.updatedAt
})
} 