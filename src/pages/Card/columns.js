import Title from "antd/lib/skeleton/Title";

export const columnsCard = [
  {
    render: (text, record) => (
      <div className="delete-product">
        {" "}
        <i class="fas fa-times"></i>
      </div>
    ),
  },
  {
    dataIndex: "img",
    render: (text) => <img className="img-table" src={text} alt={text} />,
  },
  {
    title: "Product",
    dataIndex: "product",
    render: (text, record) => (
      <>
        <Title className="product-name" level={5}>
          {record.productName}
        </Title>
        <p> Check-in: {record.productDetail.checkIn}</p>
        <p> Check-out: {record.productDetail.checkOut}</p>
        <p> Adults: {record.productDetail.adult}</p>
        <p> Childrens: {record.productDetail.children}</p>
        <p> Rooms: {record.productDetail.room}</p>
        <p>
          {" "}
          Room Code:{" "}
          <span className="fw-bold">{record.productDetail.roomCode}</span>
        </p>
      </>
    ),
  },
  {
    title: "Price",
    dataIndex: "price",
    render: (text) => (
      <>
        <span className="fw-bold">${text}</span>/Night(s)
      </>
    ),
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    render: (text) => <>{text} Night(s)</>,
  },
  {
    title: "Subtotal",
    dataIndex: "subtotal",
    render: (text) => (
      <>
        <span className="fw-bold">${text}</span>
      </>
    ),
  },
];

export const  dummiedata = [
  {
    key: "1",
    img: "https://i.ibb.co/QNkMLRk/2001.jpg",

    productName: "John Brown",
    productDetail: {
      checkIn: "2023-8-28",
      checkOut: "2023-8-29",
      adult: 1,
      children: 1,
      room: 1,
      roomCode: 1500,
    },
    price: 32,
    quantity: 1,
    subtotal: 270,
  },
  // {
  //   key: "2",
  //   img: "http://demo.ovathemes.com/hozing/wp-content/uploads/2018/11/family-room.jpg",
  //   productName: "Jim Green",
  //   productDetail: {
  //     checkIn: "2021-11-06",
  //     checkOut: "2021-11-07",
  //     adult: 1,
  //     children: 1,
  //     room: 1,
  //     roomCode: 1500,
  //   },
  //   price: 42,
  //   quantity: 1,
  //   subtotal: 270,
  // },
  // {
  //   key: "3",
  //   img: "http://demo.ovathemes.com/hozing/wp-content/uploads/2018/11/family-room.jpg",
  //   productName: "Joe Black",
  //   productDetail: {
  //     checkIn: "2021-11-06",
  //     checkOut: "2021-11-07",
  //     adult: 1,
  //     children: 1,
  //     room: 1,
  //     roomCode: 1500,
  //   },
  //   price: 32,
  //   quantity: 1,
  //   subtotal: 270,
  // },
];
export const listTotal = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];
