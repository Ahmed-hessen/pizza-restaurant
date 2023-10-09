import { Outlet, useNavigation } from 'react-router-dom';
import Header from './Header';
import CartOverView from '../features/cart/CartOverview';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] ">
      {isLoading && <Loader />}
      <Header />
      <div className=" overflow-scroll">
        <main className="mx-auto max-w-3xl">
          {/* As the main content is in the half of page  and will changes by children  */}
          <Outlet />
        </main>
      </div>
      <CartOverView />
    </div>
  );
}

export default AppLayout;
