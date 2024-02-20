/* The commands used in mongodb */
/**
 * - To create db : use eatfitdb
 * - To create a collection: db.createCollection("Products");
 * 
 * - db.menuLinks.insertOne({ "name": "Healthy Salad", "description": "A nutritious and delicious salad packed with fresh vegetables.", "ingredients":["lettuce", "tomatoes", "cucumbers", "bell peppers", "carrots"], "price":9.99, "image":"https://example.com/images/salad.jpg" }) 
 *   (The above command inserts one product JSON document)
 * 
// Inserting the first product
db.Products.insertOne({
  "name": "Healthy Salad",
  "description": "A nutritious and delicious salad packed with fresh vegetables.",
  "ingredients": ["lettuce", "tomatoes", "cucumbers", "bell peppers", "carrots"],
  "price": 9.99,
  "image": "https://unsplash.com/photos/vegetable-salad-on-white-ceramic-plate-xeTv9N2FjXA"
});

// Inserting the second product
db.Products.insertOne({
  "name": "Quinoa Bowl",
  "description": "A protein-packed bowl featuring quinoa, black beans, and avocado.",
  "ingredients": ["quinoa", "black beans", "avocado", "corn", "salsa"],
  "price": 12.99,
  "image": "https://unsplash.com/photos/cooked-rice-with-green-peas-and-carrots-on-stainless-steel-bowl-oYvZ-stypr4"
});

// Inserting the third product
db.Products.insertOne({
  "name": "Vegan Burger",
  "description": "A plant-based burger patty served with whole grain bun and fresh toppings.",
  "ingredients": ["black beans", "quinoa", "mushrooms", "onions", "lettuce", "tomatoes"],
  "price": 8.99,
  "image": "https://unsplash.com/photos/selective-focus-photography-of-hamburger-with-sliced-tomatoes-and-vegetables-_TLKIVSW6Do"
});

// Inserting the fourth product
db.Products.insertOne({
  "name": "Greek Salad",
  "description": "A classic Greek salad with feta cheese, olives, and Greek dressing.",
  "ingredients": ["romaine lettuce", "feta cheese", "kalamata olives", "cucumbers", "tomatoes", "red onion"],
  "price": 10.99,
  "image": "https://unsplash.com/photos/selective-focus-photography-of-vegetable-salad-V2Kw-YC7Cls"
});

// Inserting the fifth product
db.Products.insertOne({
  "name": "Fruit Bowl",
  "description": "A colorful assortment of fresh fruits including berries, melon, and pineapple.",
  "ingredients": ["strawberries", "blueberries", "raspberries", "melon", "pineapple", "grapes"],
  "price": 7.99,
  "image": "https://unsplash.com/photos/close-up-photo-of-fruits-on-bowl-pVm2awTOPZo"
});

// Inserting the sixth product
db.Products.insertOne({
  "name": "Avocado Toast",
  "description": "Sourdough toast topped with mashed avocado, cherry tomatoes, and a sprinkle of sea salt.",
  "ingredients": ["avocado", "sourdough bread", "cherry tomatoes", "sea salt"],
  "price": 5.99,
  "image": "https://unsplash.com/photos/green-and-brown-vegetable-on-white-ceramic-plate-7GO11y7bznw"
});

// Inserting the seventh product
db.Products.insertOne({
  "name": "Vegetable Stir Fry",
  "description": "A flavorful stir fry with mixed vegetables and tofu, served over brown rice.",
  "ingredients": ["tofu", "broccoli", "bell peppers", "carrots", "snap peas", "soy sauce"],
  "price": 11.99,
  "image": "https://unsplash.com/photos/vegetable-noodle-with-chopstick-on-glass-plate-5Q_Edarv5zQ"
});

// Inserting the eighth product
db.Products.insertOne({
  "name": "Chia Pudding",
  "description": "Creamy chia seed pudding topped with fresh berries and coconut flakes.",
  "ingredients": ["chia seeds", "coconut milk", "maple syrup", "vanilla extract", "berries", "coconut flakes"],
  "price": 6.49,
  "image": "https://unsplash.com/photos/white-and-brown-liquid-in-clear-glass-bowl-GipVQ6G_ZJY"
});

// Inserting the ninth product
db.Products.insertOne({
  "name": "Acai Bowl",
  "description": "A refreshing and nutritious acai bowl topped with granola, fruits, and honey.",
  "ingredients": ["acai berries", "banana", "granola", "strawberries", "blueberries", "honey"],
  "price": 8.99,
  "image": "https://unsplash.com/photos/cooked-food-on-white-ceramic-plate--0Epr3B_IV4"
});

// Inserting the tenth product
db.Products.insertOne({
  "name": "Vegetarian Sushi Rolls",
  "description": "Assorted vegetarian sushi rolls made with fresh vegetables and seasoned rice.",
  "ingredients": ["sushi rice", "nori seaweed", "cucumber", "avocado", "carrot", "bell pepper"],
  "price": 9.99,
  "image": "https://unsplash.com/photos/sushi-on-white-ceramic-rectangular-plate-i4jrjvPQCXQ"
});

// Inserting the eleventh product
db.Products.insertOne({
  "name": "Mango Smoothie Bowl",
  "description": "Creamy mango smoothie bowl topped with sliced fruits, nuts, and coconut flakes.",
  "ingredients": ["mango", "banana", "coconut milk", "pineapple", "kiwi", "almonds", "coconut flakes"],
  "price": 7.49,
  "image": "https://fedandfit.com/wp-content/uploads/2021/11/211112_Mango-Smoothie-Bowl-2.jpg"
});

// Inserting the twelveth product
db.Products.insertOne({
  "name": "Whole Grain Pasta Salad",
  "description": "Whole grain pasta salad with cherry tomatoes, olives, spinach, and feta cheese.",
  "ingredients": ["whole grain pasta", "cherry tomatoes", "kalamata olives", "spinach", "feta cheese", "balsamic vinaigrette"],
  "price": 10.49,
  "image": "https://somethingnutritiousblog.com/wp-content/uploads/2021/10/703D8F10-4DC1-41CC-A224-C79BDC73B10F-scaled.jpeg"
});

// Inserting the thirtheenth product
db.Products.insertOne({
  "name": "Protein Pancakes",
  "description": "Fluffy protein pancakes made with whey protein powder and served with fresh berries.",
  "ingredients": ["whey protein powder", "oats", "eggs", "milk", "berries", "maple syrup"],
  "price": 6.99,
  "image": "https://unsplash.com/photos/two-pancakes-on-white-plate-SxTlB4fde9Q"
});

// Inserting the fourteenth product
db.Products.insertOne({
  "name": "Coconut Curry Tofu",
  "description": "Savory coconut curry tofu served with jasmine rice and steamed vegetables.",
  "ingredients": ["tofu", "coconut milk", "curry paste", "jasmine rice", "broccoli", "carrots", "bell peppers"],
  "price": 11.99,
  "image": "https://unsplash.com/photos/a-bowl-of-noodles-and-vegetables-with-chopsticks-20c49Lo5IcY"
});

// Inserting the fifteenth product
db.Products.insertOne({
  "name": "Quinoa Salad",
  "description": "A hearty quinoa salad with roasted vegetables and a zesty lemon vinaigrette.",
  "ingredients": ["quinoa", "bell peppers", "zucchini", "red onion", "chickpeas", "lemon", "olive oil"],
  "price": 9.49,
 "image": "https://unsplash.com/photos/a-blue-bowl-filled-with-vegetables-and-a-wooden-spoon-yhc4pSbl01A"
});

// Inserting the sixteenth product
db.Products.insertOne({
  "name": "Smoothie Variety Pack",
  "description": "Assorted smoothie variety pack with different flavors including berry blast, tropical paradise, and green detox.",
  "ingredients": ["assorted fruits", "leafy greens", "yogurt", "coconut water", "honey"],
  "price": 24.99,
  "image": "https://example.com/images/smoothie_variety_pack.jpg"
});

// Inserting the seventeenth product
db.Products.insertOne({
  "name": "Veggie Wrap",
  "description": "A flavorful veggie wrap filled with hummus, roasted vegetables, and mixed greens.",
  "ingredients": ["whole wheat tortilla", "hummus", "roasted vegetables", "mixed greens", "cucumber", "red cabbage"],
  "price": 8.49,
  "image": "https://unsplash.com/photos/person-holding-a-white-and-brown-cake-8lA4s3WjBds"
});

// Inserting the eighteenth product
db.Products.insertOne({
  "name": "Blueberry Chia Jam",
  "description": "Homemade blueberry chia jam made with fresh blueberries, chia seeds, and a touch of maple syrup.",
  "ingredients": ["blueberries", "chia seeds", "maple syrup", "lemon juice"],
  "price": 5.49,
  "image": "https://unsplash.com/photos/pancake-with-orange-and-blueberries-beside-scattered-chocolate-and-coffee-beans-P1aohbiT-EY"
});
*
*/
