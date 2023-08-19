import { Col, Row } from "antd";
import React from "react";
import { SendOutlined } from "@ant-design/icons";
import "./checkout.css";
const Checkout = () => {
  return (
    <div className="container-small form-style">
      <h1>My Checkout</h1>
      <form>
        <Row gutter={32}>
          <Col span={14}>
            <h5 className="billing">BILLING DETAILS</h5>
            <Row gutter={12}>
              <Col span={12}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  autoComplete="off"
                ></input>
              </Col>
              <Col span={12}>
                <label htmlFor="name">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  autoComplete="off"
                ></input>
              </Col>
              <Col span={24}>
                <label htmlFor="name">Street address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Street address"
                  autoComplete="off"
                ></input>
              </Col>
              <Col span={24}>
                <label htmlFor="name">Phone</label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Your number"
                  autoComplete="off"
                ></input>
              </Col>
              <Col span={24}>
                <label htmlFor="name">Order note (optional)</label>
                <textarea
                  type="text"
                  id="note"
                  placeholder="Notes about your order, e.g. special notes for delivery."
                ></textarea>
              </Col>
            </Row>
          </Col>
          <Col span={10}>
            <h5 className="billing">YOUR ORDER</h5>

            <div className="head-order">
              <p className="title-order">PRODUCT</p>
              <p className="title-order">SUBTOTAL</p>
            </div>
            <div className="body-order">
              <div className="order-body-item">
                <div className="room-detail">
                  <h6 className="title-money">Connecting Room 1 Night(s)</h6>
                  <p>Check-in: 2021-11-28</p>
                  <p>Check-out: 2021-11-29</p>
                  <p>Room Code: 501</p>
                </div>
                <p className=" fw-bold">$279</p>
              </div>
              <div className="order-body-item">
                <p className="title-money">SUBTOTAL</p>
                <p className="">$279</p>
              </div>
              <div className="order-body-item">
                <p className="title-money">Tax</p>
                <p className="">$279</p>
              </div>
              <div className="order-body-item fw-bold">
                <p className="title-money">Total</p>
                <p className="">$279</p>
              </div>
            </div>
          </Col>
        </Row>
        <button type="submit">
          <div className="icon_contact">
            <SendOutlined />
          </div>
        </button>
      </form>
    </div>
  );
};

export default Checkout;
