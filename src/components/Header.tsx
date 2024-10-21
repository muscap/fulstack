import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useShoppingCart } from '../contexts/ShoppingCartContext';

const Header: React.FC = () => {
  const { cartItems } = useShoppingCart();

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Bolt.new</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
            <li><Link to="/products" className="hover:text-blue-200">Products</Link></li>
            <li>
              <Link to="/cart" className="flex items-center hover:text-blue-200">
                <ShoppingCart className="mr-1" />
                <span>Cart ({cartItems.length})</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;