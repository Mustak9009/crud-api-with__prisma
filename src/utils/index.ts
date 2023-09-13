import {prisma} from '../prisma';
export async function ConnectDB  (){
    try{
        await  prisma.$connect();
    }catch(err:any){
        return Error(err.message);
    }
}