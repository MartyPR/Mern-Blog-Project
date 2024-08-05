const userModel = require("../../models/User/User");


const RegisterUser= async(req,res)=>{
    const {username, password, email}=req.body;
    const userExist = await userModel.find({email});

    
    if (!userExist) {

        
        throw new Error("User Already Exist");
    }



}