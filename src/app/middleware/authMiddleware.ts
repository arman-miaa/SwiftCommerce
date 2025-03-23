import jwt from "jsonwebtoken";
import config from "../config";
import { NextFunction, Request, Response } from "express";


const JWT_SECRET = config.jwt_secret as string;


export const verifyToken = (req: Request, res: Response, nex: NextFunction) => {
  // will get token this formate: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluMUBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4xIiwiaWF0IjoxNzQyNzQ4NjQ0LCJleHAiOjE3NDI3NjY2NDR9.ccyp9LPYiNr8cX-V15oTyYv38a_ek7tcILy1Esr0Npo
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        res.status(401).send({ message: "Invalid token and Access Denied" });
        return;
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
             res.status(401).send({ message: "Invalid token and Access Denied" });
        return;
        }
        (req as any).decoded = decoded;
        nex();
    })
}