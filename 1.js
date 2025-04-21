import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';
import { logger } from './middleware/logger.js';

dotenv.config(); 
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(logger);

// Routes
app.use('/product', productRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



import express from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;

// ./middleware/logger.js
import { Request, Response, NextFunction } from 'express';

export const logger = (req, res, next) => {
  const now = new Date().toLocaleString();
  console.log(`[${now}] ${req.method} ${req.url}`);
  next();
};
