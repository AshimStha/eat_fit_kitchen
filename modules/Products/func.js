// importing MongoClient object from the mongodb driver to create a client
const { MongoClient } = require("mongodb");

// DB settings

// defining the connection URL string for a default db using env variable
const dbURL = `${process.env.DB_HOST}`;
// the client
const client = new MongoClient(dbURL);

// DB helper functions

/*
 * function to establish a connection with the db
 *
 * It selects the eastfitdb and returns it
 *
 */
async function connection() {
  // select eatfitdb
  db = client.db("eatfitdb");
  return db;
}

// function to return every documents from the Products collection
async function getProducts() {
  db = await connection();
  // selecting all documents
  var results = db.collection("Products").find({});
  // converting the documents list to an array
  productsArray = await results.toArray();
  return productsArray;
}

// function to add the product
async function addProduct(product) {
  db = await connection();
  // it uses the insertOne function to do so
  var status = await db.collection("Products").insertOne(product);
  console.log("Product added!");
}

// exporting the functions
module.exports = {
    getProducts,
    addProduct
}