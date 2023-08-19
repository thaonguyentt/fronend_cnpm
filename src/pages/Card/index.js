import {
   Button,
  Col,
  Row,
  Table,
  Typography,
  List,
  // Avatar,
  // Skeleton,
} from "antd";
import React from "react";
import { useHistory } from "react-router";
import { router } from "../../App";
import { columnsCard, dummiedata, listTotal } from "./columns";
import "./style.css";
const { Title } = Typography;
const Card = () => {
  const history = useHistory()
  return (
    <div
      className="container-small"
    >
      <Title level={3}>My card</Title>
      <Row gutter={32}>
        <Col xs={24} lg={18}>
          <Table
            className="order-table"
            columns={columnsCard}
            dataSource={dummiedata}
          />
        </Col>
        <Col className="card-total" xs={24} lg={6}>
          
          <div className="head-card">
            <h4>Price</h4>
            <span>
              <i className="fas fa-cart-plus"/>
            </span>
          </div>
          <div className="card-body">
            <div className="card-body-item">
              <p className="title-money">Subtotal</p>
              <p className="money-result">$279</p>
            </div>
            <div className="card-body-item">
              <p className="title-money">Tax</p>
              <p className="money-result">$279</p>
            </div>
            <div className="card-body-item">
              <p className="title-money">Total</p>
              <p className="money-result">$279</p>
            </div>
            <div className="w-100 text-center">

            <Button className="proceed-checkout" onClick={()=>history.push(router.checkout)}>Checkout</Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Card;
