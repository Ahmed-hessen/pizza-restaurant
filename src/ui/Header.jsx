import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/user/UserName';

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-400 bg-yellow-400 px-5 py-4  uppercase sm:px-6  ">
      <Link to="/" className="text-2xl tracking-[0.25rem] ">
        <p>Pizza Restaurant</p>
      </Link>
      <SearchOrder />
      {<UserName />}
    </header>
  );
}

export default Header;
