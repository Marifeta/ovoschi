import MainHeader from './components/mainHeader'
import Slider from './components/slider'
import InfoBlock from './components/infoBlock'
import MainFooter from './components/mainFooter'

const posts = [
  {
    id: 1,
    img: '/assets/fullsize.jpg',
    detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci aut cupiditate,\n' +
      '            doloribus ducimus earum esse, eveniet ex excepturi illo ipsam iure minus necessitatibus nobis non\n' +
      '            perspiciatis quaerat quos.\n' +
      '            Adipisci, commodi consequatur cupiditate dignissimos, doloribus est eum expedita hic iure maiores maxime\n' +
      '            necessitatibus nihil nobis pariatur praesentium quas, recusandae similique velit voluptas voluptates. Dicta\n' +
      '            ea laborum odio sapiente veritatis?\n' +
      '            Amet at maxime non odit officia reiciendis rem sunt. Aliquam beatae dolore earum error esse laudantium\n' +
      '            modi nesciunt omnis! Consequatur dicta doloribus iure minima non optio quod rerum sit vero.'
  },
  {
    id: 2,
    img: '/assets/imgpreview.jpeg',
    detail: '1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci aut cupiditate,\n' +
      '            doloribus ducimus earum esse, eveniet ex excepturi illo ipsam iure minus necessitatibus nobis non\n' +
      '            perspiciatis quaerat quos.\n' +
      '            Adipisci, commodi consequatur cupiditate dignissimos, doloribus est eum expedita hic iure maiores maxime\n' +
      '            necessitatibus nihil nobis pariatur praesentium quas, recusandae similique velit voluptas voluptates. Dicta\n' +
      '            ea laborum odio sapiente veritatis?\n' +
      '            Amet at maxime non odit officia reiciendis rem sunt. Aliquam beatae dolore earum error esse laudantium\n' +
      '            modi nesciunt omnis! Consequatur dicta doloribus iure minima non optio quod rerum sit vero.'
  },
  {
    id: 3,
    img: '/assets/doc74obzmflxlt8cme216t.jpg',
    detail: '2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci aut cupiditate,\n' +
      '            doloribus ducimus earum esse, eveniet ex excepturi illo ipsam iure minus necessitatibus nobis non\n' +
      '            perspiciatis quaerat quos.\n' +
      '            Adipisci, commodi consequatur cupiditate dignissimos, doloribus est eum expedita hic iure maiores maxime\n' +
      '            necessitatibus nihil nobis pariatur praesentium quas, recusandae similique velit voluptas voluptates. Dicta\n' +
      '            ea laborum odio sapiente veritatis?\n' +
      '            Amet at maxime non odit officia reiciendis rem sunt. Aliquam beatae dolore earum error esse laudantium\n' +
      '            modi nesciunt omnis! Consequatur dicta doloribus iure minima non optio quod rerum sit vero.'
  },
  {
    id: 4,
    img: '/assets/LR2016.02-IL-Breakfast-9.jpg',
    detail: '2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci aut cupiditate,\n' +
      '            doloribus ducimus earum esse, eveniet ex excepturi illo ipsam iure minus necessitatibus nobis non\n' +
      '            perspiciatis quaerat quos.\n' +
      '            Adipisci, commodi consequatur cupiditate dignissimos, doloribus est eum expedita hic iure maiores maxime\n' +
      '            necessitatibus nihil nobis pariatur praesentium quas, recusandae similique velit voluptas voluptates. Dicta\n' +
      '            ea laborum odio sapiente veritatis?\n' +
      '            Amet at maxime non odit officia reiciendis rem sunt. Aliquam beatae dolore earum error esse laudantium\n' +
      '            modi nesciunt omnis! Consequatur dicta doloribus iure minima non optio quod rerum sit vero.'
  }
];
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
export default function Home() {
  return (
    <div className="container">
      <MainHeader/>
      <div style={{ marginBottom: '76px' }}></div>
      <a name="main"></a>
      <section className="section center-position">
        <div className="info-wrapper">
          <div className="catlog">Выбери свой овощ</div>
          <Slider products={products}/>
        </div>
      </section>
      <section className="section center-position" style={{ minHeight: '100vh' }}>
        <div className="info-wrapper">
          { posts.map((post) => (
            <InfoBlock img={ post.img } key={ post.id } detail={ post.detail }/>
          )) }
        </div>
      </section>
      <MainFooter />

      <style jsx>{`

      `}</style>

      <style jsx global>{`
        .catlog {
          color: rgba(43, 45, 66, 1);
          font-size: 18px;
          margin-bottom: 6px;
        }
      `}</style>
    </div>
  )
}
