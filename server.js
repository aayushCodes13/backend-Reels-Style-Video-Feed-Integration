// server.js is uses to START the SERVER
const app = require('./src/app');


//method to start the server 
app.listen(3000,() => {
    console.log("Server is running on Port 3000");
})