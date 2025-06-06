
export const generateToken = (userId,res) =>{
   const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {   
    expiresIn: '30d',
   })
   res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, 
    httpOnly: true, 
    sameSite: "strict", 
    secure: process.env.NODE_ENV !== "development",
});
}

export default generateToken;

