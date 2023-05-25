const mongodb = require('mongodb');      //FOR CREATING MONGODB PACKAGE
const MongoClient = mongodb.MongoClient;  //USING THIS CLASS WHICH HELPS US FOR ACESSING IT'S METHOD FOR CONN
const ObjectID = mongodb.ObjectId;

let database;

async function getDatabase(){      //SINCE IT CONSUMES SO MUCH TIME SO ASYN FN
    const client = await MongoClient.connect('mongodb://127.0.0.1:27017');   //CONN STRING (SINCE IT TAKES A PROMISE SO WE HAVE TO WAIT)
    database = client.db('Project0');   //A SINGLE DATABASE 

    if (!database) {
            console.log('Database not connected');
    }

    return database;  //OBJECT FOR DB WILL BE HERE
}

module.exports = {   //SINCE THE ABOVE FN IS ASYN WE HAVE TO  EXPORT IT TO APP.JS
    getDatabase,
    ObjectID
}