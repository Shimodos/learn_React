import { useContext } from 'react';
import { ShopContext } from '../context';
import BasketItem from './BasketItem';

function BascetList() {
  const { order = [], handleBasketShow = Function.prototype } = useContext(ShopContext);

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active ">Basket</li>
      {order.length ? (
        order.map((item) => <BasketItem key={item.id} {...item} />)
      ) : (
        <li className="collection-item ">Basket is empty</li>
      )}
      <li className="collection-item active">Total cost: {totalPrice} $</li>
      <li className="collection-item ">
        <button className=" btn btn-small">Checkout</button>
      </li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
}

export default BascetList;
