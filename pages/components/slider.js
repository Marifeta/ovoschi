import Carousel from 'react-multi-carousel';
import Link from 'next/link'
import GlobalState from '../state';

export default function Slider({products} = {products: []}) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1023, min: 800 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 800, min: 465 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  if (!products.length) return (<></>);
  return (
    <>
      <Carousel responsive={responsive}>
        { products.map((product) => {
          return (
            <Link href="/posts/[id]" as={`/posts/${product.id}`} key={product.id}>
              <div className="product">
                <div className="product-img" style={{backgroundImage: `url(${product.img})`}}></div>
                <div className="product-details">
                  <div className="product-text">{product.title}</div>
                  <GlobalState.Consumer>
                    {globalState => (
                      <button
                        className="product-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          globalState.addToCart(product.id);
                        }}
                      >Добавить в корзину</button>
                    )}
                  </GlobalState.Consumer>
                </div>
              </div>
            </Link>
          )
        }) }
      </Carousel>
      <style jsx>{`
        .product {
          margin: 16px;
          background-image: linear-gradient(90deg,rgba(141,153,174,.5),rgba(237,242,244,.7));
          border-radius: 10px;
          box-shadow: 0 0 0 1px #e1e2f5;
          cursor: pointer
        }
        .product:first-child {
          margin: 16px 16px 16px 5px;
        }
        .product:hover {
          transition: all .2s ease-in-out;
          transform: scale(1.02);
        }
        .product-img {
          border-radius: 10px 10px 0 0;
          height: 200px;
          background-size: cover;
        }
        .product-details {
          padding: 28px;
        }
        .product-text {
          font-size: 16px;
          margin-bottom: 16px;
          color: rgba(43, 45, 66, 1);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>
    </>
  )
}