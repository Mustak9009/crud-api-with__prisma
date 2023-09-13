import {NextRequest,NextResponse} from 'next/server';
import {prisma} from '@/prisma';
import {ConnectDB} from '@/utils';
ConnectDB();
export async function GET(req:NextRequest){
    try{
        const user = await prisma.user.findMany();
        return NextResponse.json({user},{status:200});
    }catch(err){
        console.log(err);
        return NextResponse.json({error:err},{status:500});
    }finally{
        await prisma.$disconnect();
    }
}