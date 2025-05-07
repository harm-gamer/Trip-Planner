

export const SignUser = async (req,res) =>{
    try{
       const {email,password} = req.body;
       
    }catch(err){
        res.status(500).json({message: 'User sign in failed', error: err.message});
    }
}