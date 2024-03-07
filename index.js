
import http from 'http';

const hostname='127.0.0.1';
const port=5000;

const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    
});

server.listen(port,hostname,()=>{
    console.log(`server is running`);
});





/*
import http from 'http';
import fs from 'fs';
import axios from 'axios';

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer(async (req, res) => {
    
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html'); 
    
    try {
        let userId = await fs.promises.readFile('./input.txt', 'utf8');
        console.log("User ID read from file");

        let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        console.log("User Info");

        let userData = response.data;
        let table = `
            <table border="1">
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                <tr>
                    <td>${userData.name}</td>
                    <td>${userData.username}</td>
                    <td>${userData.email}</td>
                    <td>${userData.phone}</td>
                </tr>
            </table>
        `;
        res.end(table);
    } catch (err) {
        console.error(err);
        res.end("Error occurred");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server is running `);
});
*/

