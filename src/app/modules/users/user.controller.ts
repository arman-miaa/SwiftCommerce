import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../../config";
import { userServices } from "./user.services";

const JWT_SECRET = config.jwt_secret as string;

const registerUser = async (req: Request, res: Response):Promise<void> => {
    const { email, password, role } = req.body;
    try {
        const existingUser = await userServices.findUserByEmail(email);
        if (existingUser) {
            res.status(500).send({ message: "User email is already exists! Try using a new email" });
            return;
        }
        
        const userRole = role || "user";
        const user = await userServices.createUser( email, password, role );
        res.status(200).send({message: "User Created successfully", user})
    } catch (error) {
        res.status(500).json({message: "User Registration failed", error})
    }
    
}

const loginUser = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;
    try {
        const user = await userServices.findUserByEmail(email);
        if (!user) {
            res.status(400).send({ message: "Invalid email or password" });
            return;
        }

        const inValidPassword = await userServices.ValidatePassword(password, user.password);

        if (!inValidPassword) {
             res.status(400).send({ message: "Invalid  password" });
             return;
        }

        const token = jwt.sign({ email: user?.email, role: user.role }, JWT_SECRET, { expiresIn: '5h' });
        res.status(200).send({message: "User Logged in successfully",token})


    } catch (error) {
         res.status(500).json({ message: "User Login failed", error });
    }
}


export const UserController = {
  registerUser,
  loginUser,
};