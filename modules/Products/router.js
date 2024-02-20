const express = require("express");
// the app router
var router = express.Router();
// importing the func.js file to use the functions
const model = require("./func");

// defining the way express is going to parse the form data
router.use(express.urlencoded({ extended: true }));
// the form data is converted into JSON object
router.use(express.json());

// PAGE ROUTES

// for the index page (homepage)
router.get("/", (request, response) => {
  // rendering the index page
  response.render("index", { title: "EatFit" });
});

// for the products page
router.get("/products", async (request, response) => {
  // getting the products from the function
  // await means it waits for the results from the async function before any other codes
  let products = await model.getProducts();
  console.log(products);
  // rendering the index view with the array of products from the collection
  // list = variable name, products = the array of JSON products object from the collection
  response.render("products", { title: "Products", list: products });
});

// for the new product form page
router.get("/newProductForm", (request, response) => {
  response.render("addProducts", { title: "New Product" });
});

// form submission
router.post("/newProductForm/add/submit", async (req, res) => {
  // defining the form data for the product
  let pName = req.body.productName;
  let pDesc = req.body.description;
  let pIngredients = req.body.ingredients;
  let pPrice = req.body.price;
  let pImage = req.body.image;

  // assigning the variables to the collection keys
  var newProduct = {
    name: pName,
    description: pDesc,
    ingredients: pIngredients,
    price: pPrice,
    image: pImage,
  };

  // adding the product into the db
  await model.addProduct(newProduct);
  // redirecting to the products page
  res.redirect("/products");
});

// exporting the router 
module.exports = router;