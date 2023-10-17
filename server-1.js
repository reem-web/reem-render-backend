const http = require('http')
const mysql = require('mysql')
const port = 3000
const host = 'localhost'


const con = mysql.createConnection({
    host:host,
    user:'root',
    password:'2468',
    database:'schoolm',
    port:3306
})


con.connect(function(err){
    if(err){
        console.log('Error connection with MySql')
        return;
    }
    console.log('Connected Successfully')
})


const server = http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','GET')
    res.setHeader('Access-Control-Allow-Headers','Origin, Content-Type')

    if(req.method == 'GET' && req.url == '/users')
    {
      con.query('SELECT * FROM admins',function(err , rezult){
        if(err){
            console.log('Error SQL Query')
            res.writeHead(500).end('Error during fetch users ')
            return;
        }
        res.writeHead(200,{'Content-Type':'applicatqueryion/json'})
        res.end(JSON.stringify(rezult))
      })
    }else{
        res.writeHead(404,{'Content-Type':'test/plan'})
        res.end('NOT FOUND')
    }
    
})



server.listen(port,function(){
    console.log(`Server Started on port http://${host}:${port}`)
})

