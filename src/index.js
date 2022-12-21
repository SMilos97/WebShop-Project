const express = require("express")
const app = express()
const path = require("path")
const ejs = require("ejs")
const mongodb = require("./mongodb")

const objectid = mongodb.ObjectId
const tempelatePath = path.join(__dirname, '../tempelates')

// app.use(express.static("public"));
app.use(express.json())
app.set("view engine", "ejs")
// app.set("view engine", "html")
app.set("views", tempelatePath)
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {

    const products = await mongodb.productscollection.find();

    console.log(products, 'MUSAAAAAA');

    res.render("home", {
        products: products
    })
})

app.get('/sign', async (req, res) => {

    res.render("signup")
})

app.post("/sign", async (req, res) => {



    const data = {
        name: req.body.name,
        password: req.body.password
    }

    await mongodb.collection.insertMany([data])

    res.render("insertproducts")

})
app.get("/product", async (req, res) => {



    res.render("insertproducts")

})

app.post("/product", async (req, res) => {



    const data = {
        title: req.body.title,
        imageURL: req.body.imageURL,
        price: req.body.price

    }

    await mongodb.productscollection.insertMany([data])

    res.redirect("/")

})
app.post("/order", async (req, res) => {

    const { productid, quantity } = req.body

    console.log(req.body);

    const { price } = await mongodb.productscollection.findById(productid)

    console.log(price);

    await mongodb.orders.insertMany([{ productid, quantity, price: price * quantity }]);

    res.redirect("/orders")




})
app.get('/orders', async (req, res) => {

    let orders = await mongodb.orders.find();
    const products = await mongodb.productscollection.find();
    let totalprice = 0;

    let orders1 = orders.map((order) => {
        totalprice += order.price;


        return {
            ...order, product: products.find((prod) => {
                console.log(order.productid.toString());
                console.log(prod._id.toString());
                return order.productid.toString() === prod._id.toString();
            }) || "zika"
        };
    });
    console.log(orders1)



    res.render("orders", {
        orders: orders1,
        totalprice
    })
})


app.listen(3000, () => {
    console.log("PORT CONNECTED!!");
})


