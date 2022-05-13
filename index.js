// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))

const express = require('express');
const app = express();

// ... other imports
const path = require("path");

// ... other app.use middleware
app.use(express.static(path.join(__dirname, "client", "build")))
app.get('/api/test', (req, res) => {
    console.log('Hello World')
})

// ...

// Right before your app.listen(), add this:

app.get("*", (req, res) => {
    console.log('Test')
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(5000)