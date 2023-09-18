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
export const login = async ({email,password}:{email:string,password:string}) =>{
    try{
        const login = await fetch("/api/login",{
            method: 'POST',
            headers: {
                'Content-Type': 
                    'application/json;charset=utf-8'
            },
            body: JSON.stringify({email,password})
        });
        return login;
    }catch(err){
        console.log(err);
        return err;
    }
}

export const getTweets = async () =>{
    try{
        const res = await fetch("/api/tweets");
        const tweets = await res.json();
        return tweets;
    }catch(err){
        console.log(err);
        return err;
    }
}