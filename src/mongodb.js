const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/projekt")
    .then(() => {
        console.log("mongodb connected")
    })
    .catch(() => {
        console.log("failed to connect")
    })

const LogInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
const ProductsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})


const collection = new mongoose.model("collection1", LogInSchema)
const productscollection = new mongoose.model("productscollection", ProductsSchema)

module.exports = { collection, productscollection };
