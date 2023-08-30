const http=require('http') //importing core module (http) from node

const server=http.createServer((req,res)=>{ //creating instance of http.createserver
    res.setHeader('Content-Type','text/html') 
    if(req.url=='/home'){
        res.end('<h1>Welcome to home page</h1>')
     }
    else if(req.url=='/about'){
        res.end('<h1>Welcome to about page</h1>')
    }
    else{
        res.end('<h1>404 page not found</h1>')
    }
})
server.listen(3000) //listening at port 3000