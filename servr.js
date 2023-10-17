const http = require('http')

const server = http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if(req.method === 'POST' && req.url === '/api'){
        let body = '';
        
console.log('inside')
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
    }else{
        res.writeHead(404, {'Content-Type':'text/plan'})
        res.end('NOT FOUND')
    }
})


server.listen(3000,()=>{
    console.log('Server is running on port 3000')
})
