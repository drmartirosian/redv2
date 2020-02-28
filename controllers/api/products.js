const Product = require('../../models/product');

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update
};

//LIST ALL
async function index(req, res) {
  const products = await Product.find({});
  try{
    res.status(200).json(products);
  }
  catch (err) {
    res.status(400).json(err);
  }
}

//DETAILS
async function show(req, res) {
  const product = await Product.findById(req.params.id);
  try {
    res.status(200).json(product);
  }
  catch (err) {
    res.status(400).json(err);
  }
}

//ADD
async function create(req, res) {
  // req.body.user = req.user
  // console.log(req.body)
  const product = await Product.create(req.body);
    try {
      res.status(200).json(product);
    }
    catch (err) {
      res.status(400).json(err);
    }
}

//DELETE
async function deleteOne(req, res) {
  const deletedProduct = await Product.findByIdAndRemove(req.params.id);
  try {
    res.status(200).json(deletedProduct);
  }
  catch (err) {
    res.status(400).json(err);
  }
}

//UPDATE
async function update(req, res) {
  const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
  try{
    res.status(200).json(updatedProduct);
  }
  catch {
    res.status(400).json(err);
  }
}
