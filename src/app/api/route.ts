import {NextRequest,NextResponse} from 'next/server';


export async function GET(req:NextRequest){
    return NextResponse.json({apis:["tweets","users"]},{status:200});
}