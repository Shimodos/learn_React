function GoodsItem(props) {
  // const { mainId, displayName, displayDescription, displayAssets, price } = props;

  const {
    mainId: id,
    displayName: name,
    displayDescription: description,
    displayAssets: [{ background }],
    price: { regularPrice: price },
  } = props;

  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img src={background} alt={name} />
        <span className="card-title">{name}</span>
      </div>
      <div className="card-content">
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button className="btn">Buy</button>
        <span className="right">{price}</span>
      </div>
    </div>
  );
}

export default GoodsItem;
