const express = require('express');
const app = express();              //FOR CREATING A EXPRESS APP
const bodyparser = require('body-parser');
const exhbs = require('express-handlebars'); //FOR TEMPLATING THE (VIEW ELEMENTS)
const dbo = require('./db');   //THE EXPORTING THE MODULE  OBJ FORM DB
const ObjectID = dbo.ObjectID; //OID IS A CLASS

app.engine('hbs',exhbs.engine({layoutsDir:'views/',defaultLayout:"main",extname:"hbs"}))  //for (creating objects)
app.set('view engine','hbs');
app.set('views','views');     //FOR HANDLING THE VIEWS TEMPLATING ENGINE
app.use(bodyparser.urlencoded({extended:true})); //USED AS A MIDDLE & RETURNS A METHOD

app.get('/',async (req,res)=>{    //FOR CREATING THE ROUTE
    //let message ='test';
    res.render('main',{message})
})
    let database = await dbo.getDatabase();  //RETURNS A PROMISE
    const collection = database.collection('BOOKS');  //CREATS THIS COLL
    const cursor = collection.find({})   //RETURNS A DATA AS CURSOR OBJ (HERE,ALL THE DATA WILL COME)
    let books = await cursor.toArray();   //STORES THE DATA AS ARRAY
let message='';
res.render('main',{message,books})

    //let message = '';
    
    let edit_id, edit_book;

    if(req.query.edit_id){
        edit_id = req.query.edit_id;
        edit_book = await collection.findOne({_id: new ObjectID(edit_id)})
    }

    if (req.query.delete_id) {
        await collection.deleteOne({_id: new ObjectID(req.query.delete_id)})
        return res.redirect('/?status=3');
    }
    

    switch (req.query.status) {
        case '1':
            message = 'INSERTED SUCCESSFULLY !!!';
            break;

        case '2':
            message = 'UPDATED SUCCESSFULLY !!!';
            break;

        case '3':
            message = 'DELETED SUCCESSFULLY !!!';
            break;

        default:
            break;
    }


    res.render('main',{message,books,edit_id,edit_book})
    res.render('main',{message,books})

app.post('/store_book',async (req,res)=>{
    let database = await dbo.getDatabase();
    const collection = database.collection('BOOKS');
    let book = { title: req.body.title, author: req.body.author  }; // THE OBJ ARE STORED IN THE BOOK OBJ
    await collection.insertOne(book);  //INSERTONE RETURNS A PROMISE
    return res.redirect('/?status=1'); //SENDING A QUERY PARAMETER FOR OUR AUTHENTICATION THAT INSERT HAS BEEN DONE
})

app.post('/update_book/:edit_id',async (req,res)=>{
    let database = await dbo.getDatabase();
    const collection = database.collection('BOOKS');
    let book = { title: req.body.title, author: req.body.author  }; 
    let edit_id = req.params.edit_id;

    await collection.updateOne({_id: new ObjectID(edit_id)},{$set:book});
    return res.redirect('/?status=2');
})

app.listen(8000,()=>{console.log('Listening to 8000 port');})
