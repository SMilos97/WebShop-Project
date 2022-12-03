const express = require("express")
const app = express()
const path = require("path")
const ejs = require("ejs")
const mongodb = require("./mongodb")


const tempelatePath = path.join(__dirname, '../tempelates')

app.use(express.json())
app.set("view engine", "ejs")
// app.set("view engine","html")
app.set("views", tempelatePath)
// app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {

    const products = await mongodb.productscollection.find();

    console.log(products, 'MUSAAAAAA');

    res.render("home", {
        products: products
    })
})

app.get('/signup', (req, res) => {
    res.render("signup")
})

app.post("/signup", async (req, res) => {

    console.log(req, 'afasdfasd');

    const data = {
        name: req.body.name,
        password: req.body.password
    }

    await mongodb.collection.insertMany([data])

    res.render("home")

})
app.get("/product", async (req, res) => {



    res.render("insertproducts")

})

app.post("/product", async (req, res) => {

    console.log(req, 'afasdfasd');

    const data = {
        title: req.body.title,
        imageURL: req.body.imageURL,
        price: req.body.price

    }

    await mongodb.productscollection.insertMany([data])

    res.redirect("/")

})




app.listen(3000, () => {
    console.log("PORT CONNECTED!!");
})


