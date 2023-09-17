import {NextRequest,NextResponse} from 'next/server';
import {prisma} from '@/prisma';
import {ConnectDB} from '@/utils';
ConnectDB();

export async function GET(req:NextRequest,params:{params:{id:string}}){
    try{
        const tweet = await prisma.tweet.findFirst({where:{id:params.params.id}});
        return NextResponse.json({tweet},{status:200});
    }catch(err){
        console.log(err);
        return NextResponse.json({error:err},{status:500});
    }finally{
        await prisma.$disconnect();
    }
}
export async function PUT(req:NextRequest,params:{params:{id:string}}){
    try{
        const reqBody = await req.json();
        const {tweet} = reqBody;
        const updatedTweet = await prisma.tweet.update({data:{tweet:tweet},where:{id:params.params.id}});
        return NextResponse.json({updatedTweet},{status:200});
    }catch(err){
        console.log(err);
        return NextResponse.json({error:err},{status:500});
    }finally{
        await prisma.$disconnect();
    }
}

export async function  DELETE(req:NextRequest,params:{params:{id:string}}){
    try{
        const deletedTweet = await prisma.tweet.delete({where:{id:params.params.id}});
        return NextResponse.json({deletedTweet},{status:200});
    }catch(err){
        console.log(err);
        return NextResponse.json({error:err},{status:500});
    }finally{
        await prisma.$disconnect();
    }
}