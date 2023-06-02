function BasketItem(props) {
  const { id, name, price, quantity } = props;

  return (
    <li className="collection-item">
      {name} x{quantity} = {price}
      <span href="#!" class="secondary-content">
        <i class="material-icons basket-dalete">close</i>
      </span>
    </li>
  );
}

export default BasketItem;
