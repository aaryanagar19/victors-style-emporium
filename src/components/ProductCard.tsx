import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { Product } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
        <Link to={`/product/${product.id}`}>
          <div className="relative overflow-hidden aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
          </div>
        </Link>
        
        <div className="p-6">
          <div className="flex items-center gap-1 mb-2">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="text-sm text-muted-foreground">{product.rating}</span>
          </div>
          
          <Link to={`/product/${product.id}`}>
            <h3 className="font-semibold text-lg mb-1 hover:text-primary transition-colors">
              {product.name}
            </h3>
          </Link>
          
          <p className="text-sm text-muted-foreground mb-4">{product.category}</p>
          
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">${product.price}</span>
            <Button
              size="icon"
              onClick={(e) => {
                e.preventDefault();
                onAddToCart(product);
              }}
              className="rounded-full"
            >
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
