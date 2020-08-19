import Link from 'next/link'
import GlobalState from '../state';

export default function MainHeader() {
  return (
    <>
      <header className="header center-position">
        <div className="header-data">
          <div className="anchors">
            <a href="#main" className="anchor">Главная</a>
            <a href="#about_us" className="anchor">О нас</a>
            <a href="#contacts" className="anchor">Подписка</a>
          </div>
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
          z-index: 1001;
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
          display: flex;
          justify-content: space-between;
          padding: 0 16px;
        }
        .anchors {
          display: flex;
          align-items: center;
        }

        .anchor {
          margin-right: 12px;
          font-size: 18px;
          text-decoration: none;
          color: rgba(237, 242, 244, 1);
          font-weight: lighter;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .anchor:hover {
          text-shadow: 0px 0px 1px;
        }
        .icon {
          font-size: 28px;
          color: rgba(237, 242, 244, 1);
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

      `}</style>
    </>
  )
}
