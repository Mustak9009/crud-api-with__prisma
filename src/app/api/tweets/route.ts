import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma";
import { ConnectDB } from "@/utils";
ConnectDB();
export const GET = async (req: NextRequest) => {
  try {
    const tweets = await prisma.tweet.findMany();
    return NextResponse.json({tweets}, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const POST = async (req:NextRequest) =>{
    try {
        const reqBody = await req.json();
        const {tweet,userID} = reqBody;
        if(!tweet && !userID) return NextResponse.json({Message:"Invalid data"}, { status: 422 }); //unprocessable entity
        const isPresentUser = await prisma.user.findFirst({where:{id:userID}});
        if(!isPresentUser) return  NextResponse.json({Message:"Invalid user"}, { status: 401 }); //the client request has not been completed because it lacks valid authentication credentials for the requested resource
        const newTweet = await prisma.tweet.create({data:{tweet,userID}})
        return NextResponse.json({ tweet:newTweet }, { status: 201 });
      } catch (err) {
        console.log(err);
        return NextResponse.json({ error: err }, { status: 500 });
      } finally {
        await prisma.$disconnect();
      }
}
