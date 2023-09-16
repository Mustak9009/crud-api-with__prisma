import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';
import { prisma } from "@/prisma";
import { ConnectDB } from "@/utils";
ConnectDB();
export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const slat = bcryptjs.genSaltSync(10);
    const { name, email, password } = reqBody;
    if(!name && !email && !password){
      return NextResponse.json({Message:"Require details ...!!"}, { status: 422 }); //unprocessable entity
    }
    const isUserExist = await prisma.user.findFirst({where:{email}});
    if(isUserExist) return NextResponse.json({Message:"User already exist ... please signUP"},{status:201}); //201 => shows user alredy created ...
    const passwordHash = await bcryptjs.hash(password,slat);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password:passwordHash,
      },
    });
    return NextResponse.json({ user }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
