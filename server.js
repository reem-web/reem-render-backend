const http = require('http')

const server = http.createServer((req,res)=>{
    res.setHeader('Access-Control-Origin','*')
    res.setHeader('Access-Control-Methods','POST, GET')
    res.setHeader('Access-Control-Headers','Content-Type')
    if(req.method === 'POST'){
        let body = '';
        

        req.on('data',(chunk)=>{
            body += chunk;
            console.log(body)
        })
        req.on('end',()=>{
            let data = JSON.parse(body)
            console.log(JSON.stringify(data))
        })
        res.writeHead(200, {'Content-Type':'application/json'})
        res.end(JSON.stringify({message:'data recieved successfuly'}))
    }
})
server.listen(3000,()=>{
    console.log('Server Started')
})