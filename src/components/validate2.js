export const Validate = ( data, type) => {
    const error = {};


    if(!data.email) {
        error.email = "email  Required"
    }else if (!/\S+@\S+\.\S+/.test(data.email)){
        error.email = "email address is invalid"
    }else{
        delete error.email
    }



    if (!data.name.trim()) {
        error.name = "name required"
    }else{
        delete error.name
    }
    return error
}