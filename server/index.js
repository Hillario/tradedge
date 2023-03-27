/**
 * Application Layer(Business Logic) or Back-End of our application where database
 * parameters, connection and APIs are defined. NOTE that MariaDB was chosen as the
 * DBMS.
 */

//call express
const express=require("express");
//initialize our app
const app=express();
//body-parser
const bodyParser=require("body-parser");
//MySQL,MariaDB
const mysql=require("mysql2");
//cors-used to access our backend api
const cors=require("cors");

//establish db connection
//define connection parameters
const db=mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "tradedge"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

//API to get data from MariaDB
app.get("/api/get", (req,res)=>{
    const sqlGet="SELECT * FROM trade ";
    db.query(sqlGet, (error,result)=>{
        res.send(result);
    });
});


//API to get data from client and POST to MariaDB
app.post("/api/post", (req,res)=>{
    const {darray}=req.body;
    //Convert String to Array using the map function
    var dischargeArray= darray.split(',').map(function(item){
        return parseInt(item,10);    
    });   
    const sqlInsert="INSERT INTO trade  (darray) VALUES (?)";
    db.query(sqlInsert, [darray], (error, result)=>{
        if(error){
            console.log(error);
        }
    });
});

//API to delete data
app.delete("/api/remove/:id", (req,res)=>{
    const {id}=req.params;
    const sqlRemove="DELETE FROM trade  WHERE tradeid=?";
    db.query(sqlRemove, id, (error, result)=>{
        if(error){
            console.log(error);
        }
    });
});

//API to get data for UPDATE
app.get("/api/get/:id", (req,res)=>{
    const {id}=req.params;
    const sqlGet="SELECT * FROM trade  WHERE tradeid=?";
    db.query(sqlGet, id, (error,result)=>{
        if(error){
            console.log(error);
        }
        res.send(result);
    });
});

//API to update data
app.put("/api/update/:id", (req,res)=>{
    const {id}=req.params;
    const {darray}=req.body;
    //Convert String to Array using the map function
    var dischargeArray= darray.split(',').map(function(item){
        return parseInt(item,10);    
    });
    const sqlUpdate="UPDATE trade  SET darray=? WHERE tradeid=?";
    db.query(sqlUpdate, [darray, id], (error,result)=>{
        if(error){
            console.log(error);
        }
        res.send(result);
    });
});

app.listen(5000, ()=>{
    console.log("Server is running on port 5000!");
});