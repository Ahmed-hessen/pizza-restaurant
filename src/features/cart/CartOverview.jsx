import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/helpers';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartTotalPrice = useSelector(getTotalCartPrice);

  if (totalCartQuantity)
    return (
      <div className=" flex items-center justify-between  bg-stone-700  px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
        <p className="space-x-1 font-semibold text-stone-300 sm:space-x-4">
          <span>{totalCartQuantity} pizzas =</span>
          <span>{formatCurrency(totalCartTotalPrice)}</span>
        </p>
        <Link to="/cart">Open cart &rarr;</Link>
      </div>
    );
}

export default CartOverview;
