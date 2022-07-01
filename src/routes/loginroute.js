const express = require('express'); 
const loginRouter = express.Router();
const user = require('../data/user');

loginRouter.get('/',function(req,res){

    res.render('login',{});
    
})


loginRouter.post('/check',function(req,res){
    // Fixed param to params
    var checkuser = req.body;    
    console.log(checkuser);
    var flag=false;
    for(let i=0;i<user.length;i++){    
        if(checkuser.uid==user[i].uid && checkuser.pwd==user[i].pwd){            
            flag=true;
            break;
        }
        else{
                flag=false;
        }
    };
    console.log(flag);
    let result = flag.toString();
    console.log(result)
    res.end(result)
/* 
 */

});




module.exports = loginRouter;