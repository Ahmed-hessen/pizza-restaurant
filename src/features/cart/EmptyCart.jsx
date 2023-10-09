import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className="py-8 text-lg">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="my-8 text-xl font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
