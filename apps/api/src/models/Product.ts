import { model, Schema } from 'mongoose';

const productSchema = new Schema({
  id: { type: String, required: true, unique: true },
  img: { type: String, required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});
const Product = model('Product', productSchema);

export default Product;
