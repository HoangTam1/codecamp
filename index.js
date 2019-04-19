var http = require('http');
var url = require('url');
const host = process.env.HOST;
const port = process.env.PORT;
http.createServer(function (req, res) {
if (req.url=="/hello"){
  if(req.method=="GET")
    res.end('world');

  else if (req.method=="POST")
    res.end('world created');

  else if (req.method=="PUT")
    res.end('world updated');

  else (req.method=="DELETE")
    res.end('world deleted');
}
})
server.listen(port, host, () => {console.log(`Server is listening on ${host}:${port}`)});