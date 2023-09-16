import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';
import { prisma } from "@/prisma";
import { ConnectDB } from "@/utils";
ConnectDB();
export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { email, password } = reqBody;
    if(!email && !password){
      return NextResponse.json({Message:"Require details ...!!"}, { status: 422 }); //422->unprocessable entity
    }
    const user = await prisma.user.findUnique({where:{email}});
    if(!user){
        return NextResponse.json({Message:"User not found...!!"}, { status: 404 }); 
    }
    const isPasswordMatch = bcryptjs.compare(password,user.password);
    if(!isPasswordMatch){
        return NextResponse.json({Message:"Invalid user...!!"}, { status: 403 }); //403->indicates that the server understands the request but refuses to authorize it. 
    }
    return NextResponse.json({ message:"Loged in" }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
