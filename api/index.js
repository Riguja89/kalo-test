const app=require('./src/app.js')
const PORT=4242;

app.listen(PORT, () => console.log("Node server listening on port " + PORT));