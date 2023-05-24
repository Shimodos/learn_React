function GoodsItem(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    displayAssets: [full_background],
    // full_background,
    // price: [regularPrice],
  } = props;

  return (
    <div className="card" id={mainId}>
      <div className="card-image">
        <img src={full_background} alt={displayName} />
        <span className="card-title">{displayName}</span>
      </div>
      <div className="card-content">
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button className="btn">Buy</button>
        {/* <span className="right">{regularPrice}</span> */}
      </div>
    </div>
  );
}

export default GoodsItem;
