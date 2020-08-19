import Link from 'next/link'

export default function CartHeader() {
  return (
    <>
      <header className="header center-position">
        <div className="header-data">
          <Link href="/">
            <button className="back-btn">
              <i className="material-icons icon back-icon">arrow_back</i>
            </button>
          </Link>
          <div className="product-title">Корзина</div>
          <div className="back-btn"></div>
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
          .back-icon {
            transform: translateX(-11px);
          }

        `}</style>
    </>

  )

}
