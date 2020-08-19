export default function InfoBlock(props) {
  return (
    <>
      <a name="about_us"></a>
      <div className="info">
        <div className="info-stub" style={{ backgroundImage: `url(${props.img})` }}></div>
        <div className="info-stub-wrapper"></div>
        <div className="info-img" style={{ backgroundImage: `url(${props.img})` }}></div>
        <div className="info-text">
          { props.detail }
        </div>
      </div>

      <style jsx>{`
        .info {
          min-height: 300px;
          display: flex;
          width: 100%;
          max-width: 1240px;
          background-image: linear-gradient(45deg,rgba(141,153,174,1),rgba(237,242,244,1));
          border-radius: 16px;
          margin-bottom: 20px;
        }
        .info:nth-of-type(even) {
          flex-direction: row-reverse;
          background-image: linear-gradient(-45deg,rgba(141,153,174,1),rgba(237,242,244,1));
        }
        .info-stub-wrapper {
          display: none;
          border-radius: 16px;
        }
        .info > .info-img {
          width: 40%;
          background-size: cover;
          border-radius: 16px 0 0 16px;
        }
        .info:nth-of-type(even) > .info-img {
          width: 40%;
          background-size: cover;
          border-radius: 0 16px 16px 0;
        }
        .info-text {
          padding: 34px;
          width: 60%;
          color: #2b2d42;
        }
        @media (max-width: 854px) {
          .info {
            position: relative;
            z-index: 1;
            background-image: linear-gradient(45deg,rgba(141,153,174,.8),rgba(237,242,244,.8));
          }
          .info:nth-of-type(even) {
            background-image: linear-gradient(-45deg,rgba(141,153,174,.8),rgba(237,242,244,.8));
          }
          .info-stub-wrapper {
            display: block;
            position: absolute;
            z-index: 2;
            width: 100%;
            height: 100%;
            background-image: inherit;
          }
          .info-stub {
            position: absolute;
            width: 100%;
            height: 100%;
            background-size: cover;
            z-index: 1;
            border-radius: 16px;
          }
          .info-img {
            display: none;
          }
          .info-text {
            z-index: 2;
            width: 100%;
          }
        }

      `}</style>
    </>
  )
}
