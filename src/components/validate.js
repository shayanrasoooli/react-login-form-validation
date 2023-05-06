export const validate =( data,type) => {
    const error = {};

    if(!data.email) {
        error.email = "email  Required"
    }else if (!/\S+@\S+\.\S+/.test(data.email)){
        error.email = "email address is invalid"
    }else{
        delete error.email
    }

    if(!data.password){
        error.password = "password is required"
    }else if (data.password.length <= 5){
        error.password = "password must be more than 6 charector"
    }else{
        delete error.password
    }
    

    if (type === "signup") {
        if (!data.name.trim()) {
            error.name = "UserName Required"
        }else{
            delete error.name
        }

        if(!data.confirmPassword) {
            error.confirmPassword = " confirm the password"
        }else if (data.confirmPassword !== data.password){
            error.confirmPassword = "thay arnt as same as each other"
        }else {
            delete error.confirmPassword
        }
    
        if(data.isAccepted){
            delete error.isAccepted
        }else{
            error.isAccepted = "accept our regulation"
        }
    
    
        
    }












    return error;
}