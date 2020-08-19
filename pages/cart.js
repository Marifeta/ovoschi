import MainFooter from './components/mainFooter';
import CartHeader from './components/cartHeader';
import CartItem from './components/cartItem';
import React from "react";
import GlobalState from './state';

const products = [
  {
    id: 1,
    title: 'Баклажаныч',
    price: 1000,
    oldprice: 2000,
    img: 'assets/baclaj.jpg',
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
    title: 'Броколи',
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
    title: 'Огурцы',
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
    title: 'Патисоны',
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
    title: 'Томаты',
    price: 1600,
    oldprice: 1800,
    img: '/assets/tomatoes.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci aut cupiditate, doloribus ducimus earum esse, eveniet ex excepturi illo ipsam iure minus necessitatibus nobis non perspiciatis quaerat quos. Adipisci, commodi consequatur cupiditate dignissimos, doloribus est eum expedita hic iure maiores maxime necessitatibus nihil nobis pariatur praesentium quas, recusandae similique velit voluptas voluptates. Dicta ea laborum odio sapiente veritatis? Amet at maxime non odit officia reiciendis rem sunt. Aliquam beatae dolore earum error esse laudantium modi nesciunt omnis! Consequatur dicta doloribus iure minima non optio quod rerum sit vero.'},
];

export default function Cart() {
  return (
    <>
      <CartHeader />
      <section className="section center-position">
        <div className="info-wrapper mh">
            <GlobalState.Consumer>
              {globalState => {
                if (!Object.keys(globalState.state.cart).length) {
                  return <div className="empty">Корзина пуста</div>
                } else {
                  return Object.keys(globalState.state.cart).map((cartItem) => {
                    let item = null;
                    products.forEach((key) => {
                      if (String(key.id) === cartItem) {
                        item = key;
                      }
                    });
                    return <CartItem
                      key={item.id}
                      item={{
                        ...item,
                        quantity: globalState.state.cart[cartItem]
                      }}
                    />
                  })
                }
              }}
            </GlobalState.Consumer>
        </div>
      </section>
        <GlobalState.Consumer>
          {globalState => {
          if (!Object.keys(globalState.state.cart).length) {
            return null;
          } else {
           const sum = Object.keys(globalState.state.cart).reduce((a, b) => {
             let item = null;
             products.forEach((key) => {
               if (String(key.id) === b) {
                 item = key;
               }
             });
             return a + globalState.state.cart[b] * item.price;
           }, 0)
           return <div className="order">
             <div className="order-sum">Сумма заказа {sum} ₽</div>
             <button className="product-btn">Оформить заказ</button>
           </div>
          }
          }}
        </GlobalState.Consumer>
      <MainFooter />
      <style jsx>{`
        .mh {
          min-height: 200px
        }
        .section {
          padding-top: 74px;
        }
        .empty {
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          font-weight: bold;
          color: rgba(43,45,66,1);
        }
        .img {
          width: 100%;
          height: auto;
        }
        .order {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 148px;
        }
        .order-sum {
          margin-bottom: 8px;
          font-size: 20px;
        }
        @media (min-width: 874px) {
          .img {
            max-width: 600px;
          }
        }
        @media (max-width: 873px) {
          .img {
            margin-bottom: 18px;
          }
        }

      `}</style>
    </>
  )
}
