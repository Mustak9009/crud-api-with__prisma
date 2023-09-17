export const register = async ({name,email,password}:{name:string,email:string,password:string}) =>{
    try{
        const register = await fetch("/api/signup",{
            method: 'POST',
            headers: {
                'Content-Type': 
                    'application/json;charset=utf-8'
            },
            body: JSON.stringify({name,email,password})
        });
        return register;
    }catch(err){
        console.log(err);
        return err;
    }
}