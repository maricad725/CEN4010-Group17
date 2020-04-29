const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CartSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    product: { "type": "array",
      "maxItems": 2, 
      "items":[
                {"type":  mongoose.Schema.Types.ObjectId},
                {"type": Number}
              ], 
        required: true},
    subtotal: {type: Number, required: true}
  });
  const Carts  = mongoose.model("Carts", CartSchema);

  module.exports = Carts;