import GlobalState from '../state';

export default function CartItem({item}, increment, decrement) {
  return (
    <>
      <div className="item">
        <div className="item-data">
          <div className="item-img-wrapper">
            <img className="item-img" src={item.img} alt=""/>
          </div>
          <div className="item-title">{item.title}</div>
        </div>
        <div>
          <GlobalState.Consumer>
            {globalState => (
              <button
                className="item-btn"
                onClick={() => {
                  globalState.addToCart(item.id);
                }}
              >+</button>
            )}
          </GlobalState.Consumer>
          <div className="item-quantity">{item.quantity}</div>
          <GlobalState.Consumer>
            {globalState => (
              <button
                className="item-btn"
                onClick={() => {
                    globalState.decrementItem(item.id);
                }}
              >-</button>
            )}
          </GlobalState.Consumer>
        </div>
        <div>
          <div className="item-price" style={{fontSize: '26px', marginBottom: '8px'}}>{item.price} ₽</div>
        </div>
        <GlobalState.Consumer>
          {globalState => (
            <button
              className="delete-btn"
              onClick={() => {
                globalState.removeItem(item.id);
              }}
            >
              Удалить товар
            </button>
          )}
        </GlobalState.Consumer>
      </div>
      <style jsx>{`
        .item {
          position: relative;
          padding: 16px;
          background-color: rgba(141,153,174,.18);
          border-radius: 2px;
          margin-bottom: 22px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          color: rgba(43, 45, 66, 1);
        }
        .item-img-wrapper {
          margin-right: 18px;
          margin-bottom: 16px;
        }
        .item-img {
          width: 252px;
          height: auto;
          border-radius: 2px;

        }
        .item-data {
          display: flex;
          flex-wrap: wrap;
        }
        .item-title {
          color: rgba(43, 45, 66, 1);
          font-size: 18px;
          margin-bottom: 16px;
        }
        .item-btn {
          height: 32px;
          width: 32px;
          border: 2px solid rgba(141,153,174,1);
          color: rgba(141,153,174,1);
          border-radius: 22px;
          font-size: 16px;
          font-weight: bold;
        }
        .item-btn:hover {
          border: 2px solid rgba(43, 45, 66, .8);
          color: rgba(43, 45, 66, .8);
        }
        .item-quantity {
          margin: 0 16px;
          font-size: 18px;
          display: inline-block;
        }
        .delete-btn {
          position: absolute;
          color: rgba(141,153,174,1);
          bottom: 0;
          right: 0;
          transform: translate(-10px, -10px);
        }

      `}</style>
    </>
  )
}
