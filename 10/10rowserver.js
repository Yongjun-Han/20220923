import http, { createServer } from 'http';
import fs from 'fs';

http.createServer((request,response) => {
  
  const data = fs.readFileSync('./index.html');
  response.writeHead(200, {'content-type' : 'text/html; charset=utf-8'});
  response.write(data);
  response.end;
}).listen(9876, ()=> {
  console.log('서버 정상작동중~');
})