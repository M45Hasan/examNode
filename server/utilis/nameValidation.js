

function nameValid(name){
    const nameRegex = /^[A-Za-z]{2,10}$/;
   if(!name.match(nameRegex))
    {
        return true;
    }
}

module.exports=nameValid