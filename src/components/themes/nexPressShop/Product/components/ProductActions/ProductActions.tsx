import AddToCart from '../AddToCart';

export default function ProductActions() {
  return (
    <>
      {/* Product Actions */}
      <form className="mt-6">
        {/* Colors : TODO: to be used in variable products */}
        {/* <ColorSelector /> */}

        <AddToCart />
      </form>
    </>
  );
}
