import User from "../../model/user.model";
import generateToken from "../utils/generateToken";
import bcrypt from "bcryptjs";
const signIn = async (req, res) => {
    try {
        const { name,email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        // Find user by email
        const user = await User.findOne({ email });
        if (user) {
            return res.status(404).json({ message: "email is taken Try another email" });
        }

        const hasedPassword = await bcrypt.hash(password, 10);
        
        const newUser = User.create({
            name,
            email,
            password: hasedPassword
        })

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate token
        generateToken(newUser._id, res);

        res.status(200).json({ message: "Sign in successful", token });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = { signIn };