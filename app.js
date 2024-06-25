// const express  = require('express');
// const app = express();
// app.listen(3000);
// app.get('/' , (req,res) =>{
//     res.sendFile('./index.html' , {root: __dirname})
// });
// app.get('/about' , (req,res) =>{
//     res.sendFile('./about.html' , {root: __dirname})
// });
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });
// app.use((req,res) =>{
//     res.status(404).sendFile('./404.html' , {root: __dirname})
// });
// app.get('/', (req, res) => {
//   res.sendFile('./index.html', { root: __dirname });
// });
// app.get('/about', (req, res) => {
//   res.sendFile('./about.html', { root: __dirname });
// });
// app.get('/about-us', (req, res) => {
//   res.redirect('/about');
// });
// app.use((req, res) => {
//   res.status(404).sendFile('./404.html', { root: __dirname });
// });
const express  = require('express');
const app = express();
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.listen(9000 , ()=>{
  console.log("Server Listening")
});
app.set('view engine' , 'ejs');
let products = [];
app.post('/' , (req,res) =>{
  const newProduct = req.body.product;
    if (newProduct) {
        products.push(newProduct);
    }
  res.render('index' , { producta:products})
})
app.get('/', (req, res) => {
  res.render('index' , {title : 'Hdvsscsdc'})
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.use((req, res) => {
  res.status(404).render('404');
});