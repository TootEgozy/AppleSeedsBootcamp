const express = require('express');
const router = express.Router();
const functions = require('./functions');

router.get('/', (req, res)=> {
    const users = functions.getUsersList();
    res.send(users);
})

router.get('/react',(req,res)=>{
    res.json({success : { id: 1,  email : 'tootEgozy@gmail.com' }})
})

//http://localhost:3000/user?id=325568413
router.get('/user', (req, res)=> {
    const id = req.query.id;
    if(id) {
        const user = functions.getUser(parseInt(id));

        if(user == undefined) res.send("found no user with id "+id);
        else res.send(user);
    }
    else res.send("must enter id")
});

//http://localhost:3000/addUser?id=456632012&cash=500&credit=800&isActive=true
router.post('/addUser', (req, res)=> {
    
     console.log("body");
     console.log(req.body);

    console.log("query");
    console.log(req.query);

    let id = req.query.id? parseInt(req.query.id) : 0; 
    let cash = req.query.cash? parseInt(req.query.cash) : 0; 
    let credit = req.query.credit? parseInt(req.query.credit) : 0; 
    let isActive = req.query.isActive? !!(req.query.isActive) : false; 

    const user = {
        id: id,
        cash: cash,
        credit: credit,
        isActive: isActive
    }

    const bool = functions.validateUser(user);
    if (bool) {
        res.send(functions.addUser(user));
    }
    else res.send("invalid user");

})




module.exports = router;