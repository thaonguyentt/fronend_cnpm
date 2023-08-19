import { Col, Row } from "antd";
import React from "react";

const ClassicalItem = () => {
  return (
    <div className="classical-container">
      <Row className="list-classical container-small">
        <Col xs={24} sm={12} md={12} lg={6} className="classical">
          <span className="icon">
            <i class="fas fa-cocktail"></i>
          </span>
          <div className="classical-title">
            <h4>35,427</h4>
            <h5>DRINKS</h5>
          </div>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6} className="classical">
          <span className="icon">
            <i class="fas fa-key"></i>
          </span>
          <div className="classical-title">
            <h4>35,427</h4>
            <h5>HOTEL KEY'S</h5>
          </div>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6} className="classical">
          <span className="icon">
            <i class="fas fa-plane-departure"></i>
          </span>
          <div className="classical-title">
            <h4>35,427</h4>
            <h5>TOUR</h5>
          </div>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6} className="classical">
          <span className="icon">
            <i class="fas fa-bus-alt"></i>
          </span>
          <div className="classical-title">
            <h4>35,427</h4>
            <h5>TOTAL PEOPLE</h5>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ClassicalItem;
