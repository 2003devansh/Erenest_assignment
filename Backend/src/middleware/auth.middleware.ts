import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface JwtPayload {
  userId: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Unauthorized: No token provided",
    });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized: Token missing",
    });
  }

  try {
    const accessSecret = process.env.ACCESS_SECRET;

    if (!accessSecret) {
      return res.status(500).json({
        message: "Internal server error: ACCESS_SECRET not set",
      });
    }

    const decoded = jwt.verify(token, accessSecret) as JwtPayload;

    req.user = {
      userId: decoded.userId,
    };

    next();
  } catch {
    return res.status(401).json({
      message: "Unauthorized: Invalid token",
    });
  }
};
