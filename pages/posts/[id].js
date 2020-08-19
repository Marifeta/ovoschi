import {useRouter} from "next/router";
import ItemHeader from '../components/itemHeader';
import MainFooter from '../components/mainFooter';
import Image from '../components/image';
import GlobalState from '../state';

const products = [
  {
    id: 1,
    title: 'Баклажаныч',
    price: 1000,
    oldprice: 2000,
    img: '/assets/baclaj.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci aut cupiditate, doloribus ducimus earum esse, eveniet ex excepturi illo ipsam iure minus necessitatibus nobis non perspiciatis quaerat quos. Adipisci, commodi consequatur cupiditate dignissimos, doloribus est eum expedita hic iure maiores maxime necessitatibus nihil nobis pariatur praesentium quas, recusandae similique velit voluptas voluptates. Dicta ea laborum odio sapiente veritatis? Amet at maxime non odit officia reiciendis rem sunt. Aliquam beatae dolore earum error esse laudantium modi nesciunt omnis! Consequatur dicta doloribus iure minima non optio quod rerum sit vero.'},
  {
    id: 2,
    title: 'Перец болгарский',
    price: 1300,
    oldprice: 1900,
    img: '/assets/bolg.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci aut cupiditate, doloribus ducimus earum esse, eveniet ex excepturi illo ipsam iure minus necessitatibus nobis non perspiciatis quaerat quos. Adipisci, commodi consequatur cupiditate dignissimos, doloribus est eum expedita hic iure maiores maxime necessitatibus nihil nobis pariatur praesentium quas, recusandae similique velit voluptas voluptates. Dicta ea laborum odio sapiente veritatis? Amet at maxime non odit officia reiciendis rem sunt. Aliquam beatae dolore earum error esse laudantium modi nesciunt omnis! Consequatur dicta doloribus iure minima non optio quod rerum sit vero.'},
  {
    id: 3,
    title: 'Брокколи',
    price: 900,
    oldprice: 1100,
    img: '/assets/brokoli.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci aut cupiditate, doloribus ducimus earum esse, eveniet ex excepturi illo ipsam iure minus necessitatibus nobis non perspiciatis quaerat quos. Adipisci, commodi consequatur cupiditate dignissimos, doloribus est eum expedita hic iure maiores maxime necessitatibus nihil nobis pariatur praesentium quas, recusandae similique velit voluptas voluptates. Dicta ea laborum odio sapiente veritatis? Amet at maxime non odit officia reiciendis rem sunt. Aliquam beatae dolore earum error esse laudantium modi nesciunt omnis! Consequatur dicta doloribus iure minima non optio quod rerum sit vero.'},
  {
    id: 4,
    title: 'Морковь',
    price: 800,
    oldprice: 1200,
    img: '/assets/carrots.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci aut cupiditate, doloribus ducimus earum esse, eveniet ex excepturi illo ipsam iure minus necessitatibus nobis non perspiciatis quaerat quos. Adipisci, commodi consequatur cupiditate dignissimos, doloribus est eum expedita hic iure maiores maxime necessitatibus nihil nobis pariatur praesentium quas, recusandae similique velit voluptas voluptates. Dicta ea laborum odio sapiente veritatis? Amet at maxime non odit officia reiciendis rem sunt. Aliquam beatae dolore earum error esse laudantium modi nesciunt omnis! Consequatur dicta doloribus iure minima non optio quod rerum sit vero.'},
  {
    id: 5,
    title: 'Огурец',
    price: 1100,
    oldprice: 2100,
    img: '/assets/cucumbers.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci aut cupiditate, doloribus ducimus earum esse, eveniet ex excepturi illo ipsam iure minus necessitatibus nobis non perspiciatis quaerat quos. Adipisci, commodi consequatur cupiditate dignissimos, doloribus est eum expedita hic iure maiores maxime necessitatibus nihil nobis pariatur praesentium quas, recusandae similique velit voluptas voluptates. Dicta ea laborum odio sapiente veritatis? Amet at maxime non odit officia reiciendis rem sunt. Aliquam beatae dolore earum error esse laudantium modi nesciunt omnis! Consequatur dicta doloribus iure minima non optio quod rerum sit vero.'},
  {
    id: 6,
    title: 'Дайкон',
    price: 1010,
    oldprice: 2010,
    img: '/assets/daikon.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci aut cupiditate, doloribus ducimus earum esse, eveniet ex excepturi illo ipsam iure minus necessitatibus nobis non perspiciatis quaerat quos. Adipisci, commodi consequatur cupiditate dignissimos, doloribus est eum expedita hic iure maiores maxime necessitatibus nihil nobis pariatur praesentium quas, recusandae similique velit voluptas voluptates. Dicta ea laborum odio sapiente veritatis? Amet at maxime non odit officia reiciendis rem sunt. Aliquam beatae dolore earum error esse laudantium modi nesciunt omnis! Consequatur dicta doloribus iure minima non optio quod rerum sit vero.'},
  {
    id: 7,
    title: 'Кукуруза',
    price: 1200,
    oldprice: 1800,
    img: '/assets/kukuruza.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci aut cupiditate, doloribus ducimus earum esse, eveniet ex excepturi illo ipsam iure minus necessitatibus nobis non perspiciatis quaerat quos. Adipisci, commodi consequatur cupiditate dignissimos, doloribus est eum expedita hic iure maiores maxime necessitatibus nihil nobis pariatur praesentium quas, recusandae similique velit voluptas voluptates. Dicta ea laborum odio sapiente veritatis? Amet at maxime non odit officia reiciendis rem sunt. Aliquam beatae dolore earum error esse laudantium modi nesciunt omnis! Consequatur dicta doloribus iure minima non optio quod rerum sit vero.'},
  {
    id: 8,
    title: 'Лук репчатый',
    price: 1500,
    oldprice: 2000,
    img: '/assets/luk.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci aut cupiditate, doloribus ducimus earum esse, eveniet ex excepturi illo ipsam iure minus necessitatibus nobis non perspiciatis quaerat quos. Adipisci, commodi consequatur cupiditate dignissimos, doloribus est eum expedita hic iure maiores maxime necessitatibus nihil nobis pariatur praesentium quas, recusandae similique velit voluptas voluptates. Dicta ea laborum odio sapiente veritatis? Amet at maxime non odit officia reiciendis rem sunt. Aliquam beatae dolore earum error esse laudantium modi nesciunt omnis! Consequatur dicta doloribus iure minima non optio quod rerum sit vero.'},
  {
    id: 9,
    title: 'Патисон',
    price: 1020,
    oldprice: 1200,
    img: '/assets/patis.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci aut cupiditate, doloribus ducimus earum esse, eveniet ex excepturi illo ipsam iure minus necessitatibus nobis non perspiciatis quaerat quos. Adipisci, commodi consequatur cupiditate dignissimos, doloribus est eum expedita hic iure maiores maxime necessitatibus nihil nobis pariatur praesentium quas, recusandae similique velit voluptas voluptates. Dicta ea laborum odio sapiente veritatis? Amet at maxime non odit officia reiciendis rem sunt. Aliquam beatae dolore earum error esse laudantium modi nesciunt omnis! Consequatur dicta doloribus iure minima non optio quod rerum sit vero.'},
  {
    id: 10,
    title: 'Картоха',
    price: 1400,
    oldprice: 2000,
    img: '/assets/potatoes.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci aut cupiditate, doloribus ducimus earum esse, eveniet ex excepturi illo ipsam iure minus necessitatibus nobis non perspiciatis quaerat quos. Adipisci, commodi consequatur cupiditate dignissimos, doloribus est eum expedita hic iure maiores maxime necessitatibus nihil nobis pariatur praesentium quas, recusandae similique velit voluptas voluptates. Dicta ea laborum odio sapiente veritatis? Amet at maxime non odit officia reiciendis rem sunt. Aliquam beatae dolore earum error esse laudantium modi nesciunt omnis! Consequatur dicta doloribus iure minima non optio quod rerum sit vero.'},
  {
    id: 11,
    price: 1060,
    oldprice: 1400,
    title: 'Репа',
    img: '/assets/repa.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci aut cupiditate, doloribus ducimus earum esse, eveniet ex excepturi illo ipsam iure minus necessitatibus nobis non perspiciatis quaerat quos. Adipisci, commodi consequatur cupiditate dignissimos, doloribus est eum expedita hic iure maiores maxime necessitatibus nihil nobis pariatur praesentium quas, recusandae similique velit voluptas voluptates. Dicta ea laborum odio sapiente veritatis? Amet at maxime non odit officia reiciendis rem sunt. Aliquam beatae dolore earum error esse laudantium modi nesciunt omnis! Consequatur dicta doloribus iure minima non optio quod rerum sit vero.'},
  {
    id: 12,
    title: 'Томат',
    price: 1600,
    oldprice: 1800,
    img: '/assets/tomatoes.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci aut cupiditate, doloribus ducimus earum esse, eveniet ex excepturi illo ipsam iure minus necessitatibus nobis non perspiciatis quaerat quos. Adipisci, commodi consequatur cupiditate dignissimos, doloribus est eum expedita hic iure maiores maxime necessitatibus nihil nobis pariatur praesentium quas, recusandae similique velit voluptas voluptates. Dicta ea laborum odio sapiente veritatis? Amet at maxime non odit officia reiciendis rem sunt. Aliquam beatae dolore earum error esse laudantium modi nesciunt omnis! Consequatur dicta doloribus iure minima non optio quod rerum sit vero.'},
];

export default function Item() {
  const router = useRouter();
  const { id } = router.query;
  let product = null;
  products.forEach((key) => {
    if (String(key.id) === id) {
      product = key;
    }
  });
  if(!product) return (<></>);

  return (
      <>
        <ItemHeader itemName={product.title}/>
        <section className="section center-position">
          <div className="info-wrapper">
            <div className="info-main">
              <div className="info">
                <Image img={product.img} />
                <div className="info-sale">
                  <div className="info-price-wrapper">
                    <div className="info-price">{product.price} ₽</div>
                    <div className="info-price-old">{product.oldprice} ₽</div>
                    <GlobalState.Consumer>
                      {globalState => (
                        <button
                          onClick={() => {
                            globalState.addToCart(product.id);
                          }}
                          className="product-btn product-btn--margin"
                        >
                          Добавить в корзину
                        </button>
                      )}
                    </GlobalState.Consumer>
                  </div>
                   <ul className="list">
                      <li className="list-item">
                        <span>Без ГМО</span>
                        <i className="material-icons">biotech</i>
                      </li>
                      <li className="list-item">
                        <span>Только с грядки</span>
                        <i className="material-icons">filter_vintage</i>
                      </li>
                      <li className="list-item">
                        <span>Натуральные</span>
                        <i className="material-icons">eco</i>
                      </li>
                      <li className="list-item">
                        <span>Друзья веганы оценят</span>
                        <i className="material-icons">favorite</i>
                      </li>
                    </ul>
                </div>
              </div>
            </div>
            <div className="description">{product.description}</div>
          </div>
        </section>
        <MainFooter />
        <style jsx>{`
          .header {
            position: fixed;
            top: 0;
            z-index: 1;
            background-color: rgba(0, 0, 0, .78);
            display: flex;
            align-items: center;
            min-height: 56px;
            height: 56px;
            width: 100%;
          }
          .section {
            padding-top: 74px;
          }
          .back-btn {
            min-height: 44px;
            min-width: 44px;
            height: 44px;
            width: 44px;
          }
          .icon {
            color: rgba(237, 242, 244, 1);
            font-size: 34px;
          }
          .info {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
          }
          .info-main {
            margin-bottom: 18px;
          }
          .info-title {
            color: rgba(43, 45, 66, 1);
            margin-top: 70px;
          }
          .info-sale {
            padding: 0 0 0 24px;
          }
          .info-img {
            width: 600px;
            height: auto;
            border-radius: 2px;
          }
          .info-price {
            font-size: 34px;
            font-weight: 600;
            color: rgba(43, 45, 66, 1);
          }
          .info-price-old {
            text-decoration: line-through;
            font-size: 28px;
            font-weight: 300;
            color: rgba(141, 153, 174, 1);
            margin-bottom: 24px;
          }
          .product-btn--margin {
            margin-bottom: 34px;
          }
          .list {
            padding-left: 9px;
            margin: 0;
          }
          .list-item {
            display: flex;
            align-items: center;
            position: relative;
            margin-bottom: 24px;
            color: rgba(141, 153, 174, 1);
          }
          .list-item:before {
            content: '';
            width: 2px;
            height: 100%;
            background-color: rgba(43, 45, 66, .6);
            position: absolute;
            top: 0;
            left: 0;
            transform: translate(-9px);
          }
          .description {
            color: rgba(43, 45, 66, 1);
            font-size: 16px;
            margin-bottom: 28px;
          }
          @media (max-width: 873px) {
            .info-sale {
              padding: 0;
              display: flex;
              flex-wrap: wrap;
              width: 100%;
            }
            .list {
              flex-grow: 1;
            }
            .info-price-wrapper {
              flex-grow: 1;
              margin-right: 18px;
            }
          }

        `}</style>
      </>

    )

}