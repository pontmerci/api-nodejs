/**
 * Created by bmr3055 on 08/09/2017.
 */
const http = require('http');
const app = require('./app.js'); // The express app we just created

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`The server is running at localhost:${port}`);
});