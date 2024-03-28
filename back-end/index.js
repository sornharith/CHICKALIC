const express = require('express');
const dotenv = require("dotenv");
const path = require('path');
const mysql = require('mysql2');

const app = express();

const router = express.Router();
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

connection.connect(function(err){
    if(err) throw err;
    console.log(`Connected DB: ${process.env.MYSQL_DATABASE}`)
})

app.use(router);

router.use(express.json());
router.use(express.urlencoded({extended: true}));


router.get("/request/menu", (req,res) => {
    if (req.url == "/request/menu"){
        console.log('get all menu')
        let select = `select p.pid, p.p_name, p.p_description, p.ABV, p.p_price, p.p_quantity, c.c_name, p.p_picture from Product p 
        join Category c on p.CID = c.CID order by p.pid asc;`    
        connection.query(select, function(error, result){
            if (error) throw error;
             return res.status(200).send(result)
        })
    }
    else {
        // const id = req.url.match(/\?id=(.+)/) // request/menu?id={p_id}
        // console.log(`get menu by p_id -> ${id[1]}`)
    
        // let select = `select p.pid, p.p_name, p.p_description, p.ABV, p.p_price, p.p_quantity, c.c_name, p.p_picture from Product p 
        // join Category c on p.CID = c.CID where p.pid = ${id[1]};`
        //     connection.query(select, function(error, result){
        //         if (error) throw error;
        //         if (result.length == 0){
        //             return res.status(404).send(`The product ID ${id[1]} is not found`)    
        //         }
        //         return res.status(200).send(result)
        //     })
        const p_type = req.url.match(/\?type=(.+)/) // request/menu?id={p_id}
        console.log(`get menu by type -> ${p_type[1]}`)
    
        let select = `select p.pid, p.p_name, p.p_description, p.ABV, p.p_price, p.p_quantity, c.c_name, p.p_picture from Product p 
        join Category c on p.CID = c.CID where c.c_name = '${p_type[1]}' order by p.pid;`
            connection.query(select, function(error, result){
                if (error) throw error;
                if (result.length == 0){
                    return res.status(404).send(`The Produce Type ${p_type[1]} is not found`)    
                }
                return res.status(200).send(result)
            })
    }
});

router.get("/request/menu/:id", (req,res) => { // 'request/menu/{p_id}'
    var id = req.params.id;
    console.log(`get menu by p_id -> ${id}`)
    var select = `select p.pid, p.p_name, p.p_description, p.ABV, p.p_price, p.p_quantity, c.c_name, p.p_picture from Product p 
    join Category c on p.CID = c.CID where p.pid = ${id};`
        connection.query(select, function(error, result){
            if (error) throw error;
            if (result.length == 0){
                return res.status(404).send(`The product ID ${id[1]} is not found`)    
            }
            res.status(200).send(result)
        })
});




app.listen(process.env.PORT, () => {
    console.log(`Server listening on port: ${process.env.PORT}`);

})