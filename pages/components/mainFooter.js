export default function MainFooter() {
  return (
    <>
      <a name="contacts"></a>
      <footer className="footer center-position">
        <div className="footer-all">
          <div className="footer-data-wrapper">
            <div className="footer-anchors">
              <a href="#main" className="footer-anchor">Главная</a>
              <a href="#about_us" className="footer-anchor">О нас</a>
            </div>
            <form className="footer-form">
              <div className="footer-title">Подпишитесь, чтобы узнать об овощах больше</div>
                <input className="form-input name" type="text" placeholder="Имя" />
              <div style={{ display: 'flex' }}>
                <input className="form-input email" type="text" placeholder="Ваш email" />
                <button className="form-btn">Отправить</button>
              </div>
            </form>
          </div>
          <div className="footer-contacts" style={{ color: 'wheat' }}>
            <img className="social" src="/assets/fb.svg" alt="facebook logo" />
            <img className="social" src="/assets/tw.svg" alt="twitter logo" />
            <img className="social" src="/assets/yt.svg" alt="youtube logo" />
          </div>
        </div>
      </footer>

      <style jsx>{`
        .footer {
          min-height: 168px;
          background-color: rgba(43, 45, 66, 1);
          padding: 28px 16px 28px 16px;
        }
        .footer-all {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
        .footer-data-wrapper {
          display: flex;
          justify-content: space-between;
          width: 100%;
          max-width: 1240px;
          margin-bottom: 24px;
        }
        .footer-anchors {
          display: flex;
          flex-direction: column;
        }
        .footer-anchor {
          color: rgba(237, 242, 244, 1);
          font-size: 18px;
          text-decoration: none;
          padding-bottom: 6px;
          font-weight: lighter;
        }
        .footer-anchor:hover {
          text-shadow: 0px 0px 1px;
        }
        .footer-form {
          width: 70%;
          max-width: 670px;
        }
        .footer-title {
          color: rgba(237, 242, 244, 1);
          font-size: 16px;
          font-weight: lighter;
          margin-bottom: 18px;
        }
        .form-input {
          height: 40px;
          width: calc(100% - 35%);
          background-color: rgba(237, 242, 244, 1);
          border: none;
          color: #2b2d42;
          padding: 0 8px;
          font-size: 16px;
          flex-shrink: 0;
          flex-grow: 0;
        }
        .name {
          margin-bottom: 8px;
        }
        .review-form-file {
          display: none;
        }
        .icon-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: calc(100% - 35%);
          padding: 0 8px;
          height: 40px;
          margin-bottom: 8px;
          text-align: center;
          background-color: gainsboro;
          color: gray;
          font-size: 16px;
        }
        .icon {
          vertical-align: middle;
          transform: rotate(38deg);
        }
        .form-text {
          width: calc(100% - 35%);
          color: rgba(141, 153, 174, .78);
          border: none;
          color: green;
          padding: 8px;
          font-size: 16px;
          flex-shrink: 0;
          flex-grow: 0;
          resize: none;
        }
        ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
          color: rgba(141, 153, 174, .78);
        }
        ::-moz-placeholder { /* Firefox 19+ */
          color: rgba(141, 153, 174, .78);
        }
        :-ms-input-placeholder { /* IE 10+ */
          color: rgba(141, 153, 174, .78);
        }
        :-moz-placeholder { /* Firefox 18- */
          color: rgba(141, 153, 174, .78);
        }
        .form-container {
          display: flex;
        }
        .form-btn {
          height: 40px;
          min-width: 90px;
          vertical-align: bottom;
          width: 35%;
          background-color: rgba(141, 153, 174, .78);
          border: none;
          font-size: 16px;
          color: rgba(237, 242, 244, 1);
          cursor: pointer;
          align-self: flex-end;
        }
        .footer-contacts {
          display: flex;
          justify-content: center;
        }
        .social {
          margin-left: 8px;
          cursor: pointer;
        }
        .show {
          display: none;
        }
        @media (max-width: 434px) {
          .footer-data-wrapper {
            flex-direction: column;
          }

        }

      `}</style>
    </>
  )
}