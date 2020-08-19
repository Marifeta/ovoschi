import Link from 'next/link'
import GlobalState from '../state';

export default function ItemHeader({itemName}) {
  return (
    <>
      <header className="header center-position">
          <div className="header-data">
            <Link href="/">
              <button className="back-btn">
                <i className="material-icons icon back-icon">arrow_back</i>
              </button>
            </Link>
            <div className="product-title">{itemName}</div>
            <Link href="/cart">
              <button className="cart-btn">
                <i className="material-icons icon">shopping_cart</i>
                <GlobalState.Consumer>
                  {globalState => {
                  if (!Object.keys(globalState.state.cart).length) {
                    return null;
                  } else {
                    return <div className="quantity">{globalState.quant}</div>
                  }
                  }}
                </GlobalState.Consumer>
              </button>
            </Link>
          </div>
      </header>
      <style jsx>{`
          .header {
            position: fixed;
            top: 0;
            z-index: 1;
            background-color: rgba(141, 153, 174, .78);
            display: flex;
            align-items: center;
            min-height: 56px;
            height: 56px;
            width: 100%;
            backdrop-filter: blur(2px);
          }
          .header-data {
            width: 100%;
            height: 100%;
            max-width: 1240px;
            height: 100%;
            display: flex;
            justify-content: space-between;
            padding: 0 16px;
          }
          .product-title {
            color: rgba(237, 242, 244, 1);
            font-size: 24px;
            font-weight: 200;
            line-height: 50px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .back-btn {
            min-width: 44px;
            height: 100%;
            width: 44px;
          }
          .icon {
            color: rgba(237, 242, 244, 1);
            font-size: 28px;
          }
          .quantity {
            height: 14px;
            min-width: 14px;
            width: 14px;
            background-color: blueviolet;
            font-size: 12px;
            border-radius: 4px;
            position: absolute;
            top: 0;
            right: 0;
            transform: translateY(5px);
            color: rgba(237, 242, 244, 1);
          }
          .cart-btn {
            position: relative;
          }
          .back-icon {
            transform: translateX(-11px);
          }

        `}</style>
    </>

  )

}