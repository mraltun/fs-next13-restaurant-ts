import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import * as jose from "jose";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const bearerToken = req.headers["authorization"] as string;

  if (!bearerToken) {
    res.status(401).json({ errorMessage: "Unauthorized request (No bearer)" });
  }

  const token = bearerToken.split(" ")[1];

  if (!token) {
    res.status(401).json({ errorMessage: "Unauthorized request (No token)" });
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  try {
    await jose.jwtVerify(token, secret);
  } catch (error) {
    return res
      .status(401)
      .json({ errorMessage: "Unauthorized request (Token invalid)" });
  }

  const payload = jwt.decode(token) as { email: string };

  if (!payload.email) {
    return res.status(401).json({ errorMessage: "Unauthorized request" });
  }

  return prisma.user.findUnique({
    where: { email: payload.email },
    select: {
      id: true,
      first_name: true,
      last_name: true,
      email: true,
      city: true,
      phone: true,
    },
  });
}
