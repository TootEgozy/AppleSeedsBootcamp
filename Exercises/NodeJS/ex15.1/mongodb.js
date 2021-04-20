// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databasename = 'Test';

//creates a new id on every start of the server.

//the first 4 digits are a time stamp for when this id was created. (today).
//the object id is actually a function that gets this string 
//and returns binary data.
//the id also have some methods, check documentations.
const id = new ObjectID();
console.log(id.getTimestamp());

//here everything happens
MongoClient.connect(connectionURL, {useNewUrlParser : true}, (error, client)=> {
    if(error) {
        return console.log('unable to connect to database');
    }

    //define a database
    const db = client.db(databasename);

    //first command, containing the new document and a handler function
    db.collection('Test').insertOne({
        name: 'Toot',
        age: 26
    }, 
    (error, result)=> {
        if(error) return console.log('unable to insert user');

        //ops are all the documents created, in an array
        //console.log(result.ops);
        //just expirementing with more options on the result object
        // console.log(result.insertedCount);
        // console.log(result.result);
    });

    //insert many docs option
    db.collection('Test').insertMany([
        {
            name: 'chuck',
            age: 200
        },
        {
            name: 'norris',
            age: 3
        }, 
        {
            name: 'nami',
            age: 50
        }, 
        {
            name: 'hehe',
            age: 1
        }
    ], (error, result)=> {
        if(error) return console.log('could not insert docs');
        //console.log(result.ops);
    })


    //fetching data.
    //if the docunment does not exist, returns null.
    db.collection('Test').findOne({'name': 'hehe'}, (error, user)=> {
        if(error) return console.log('couldnt fetch user');
       // console.log(user);
    })

    //fetch by id:
    db.collection('Test').findOne({_id: new ObjectID('607dcf6f72b58b2364a45346')}, (error, user)=> {
        if(error) return console.log('couldnt fetch user');
       // console.log(user);
    })

    //find multiple collections. we get back not the objects but a pointer.
    //find does not get a callback, we can get back an array.
    //the toArray does get a callback.
    db.collection('Test').find({ age: 1}).toArray((error, users)=> {
        if(error) return console.log(error);
        console.log(users);
    })
    db.collection('Test').find({ age: 1}).count((error, count)=> {
        if(error) return console.log(error);
        console.log(count);
    })

    //updating documents with promises:
    //the promise with then/catch replaces the callback with error/object.
    db.collection('Test').updateOne({
        name: 'Toot'
    },
    {
        $set: {
            name: 'Toot Egozy'
        }
    }).then(result=>console.log(result))
    .catch(error=> console.log(error));


    //delete documents with promise

    db.collection('Test').deleteMany({
        age: 26
    }).then(console.log('deleted'))
    .catch(error=> (console.log(error)));

});