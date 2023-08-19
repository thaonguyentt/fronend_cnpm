import {
  CheckSquareOutlined,
  DownOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { Button, Col, DatePicker, Row, Form } from "antd";
import React, { useState } from "react";
import "./search.css";
const defaultArrSearch = {
  adult: 1,
  children: 0,
  room: 1,
};
const SearchComponent = ({ setBooking, isloading }) => {
  const [arrSearch, setArrSearch] = useState(defaultArrSearch);
  const onFinish = (values) => {
    
    const res = {
      check_in: values?.check_in?.format("YYYY-MM-DD"),
      check_out: values?.check_out?.format("YYYY-MM-DD"),
      num_adult: arrSearch.adult,
      num_children: arrSearch.children
    };
    setBooking(res);
  };
  return (
    <div className="search-component">
      <Form onFinish={onFinish}>
        <Row className="grid-search" gutter={0}>
          <Col xs={12} md={12} lg={6} className="select big-select item1">
            <h4 className="title-select">Check-in</h4>
            <Form.Item name="check_in">
              <DatePicker className="w-100" size="large" />
            </Form.Item>
          </Col>
          <Col xs={12} md={12} lg={6} className="select big-select item2">
            <h4 className="title-select">Check-out</h4>
            <Form.Item name="check_out">
              <DatePicker className="w-100" size="large" />
            </Form.Item>
          </Col>
          <Col xs={12} md={12} lg={4} className="select item3">
            <h4 className="title-select">Adult</h4>
            <Row className="">
              <Col span={15} className="title-small-select">
                {arrSearch.adult}
              </Col>

              <Col span={9}>
                <ControlArrow
                  onUp={() =>
                    setArrSearch((prev) => ({ ...prev, adult: prev.adult + 1 }))
                  }
                  onDown={() =>
                    setArrSearch((prev) => ({ ...prev, adult: prev.adult - 1 }))
                  }
                />
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={12} lg={4} className="select item4">
            <h4 className="title-select">Children</h4>
            <Row>
              <Col span={15} className="title-small-select">
                {arrSearch.children}
              </Col>

              <Col span={9}>
                <ControlArrow
                  onUp={() =>
                    setArrSearch((prev) => ({
                      ...prev,
                      children: prev.children + 1,
                    }))
                  }
                  onDown={() =>
                    setArrSearch((prev) => ({
                      ...prev,
                      children: prev.children - 1,
                    }))
                  }
                />
              </Col>
            </Row>
          </Col>
          <Col xs={24} md={12} lg={4} className="select item5">
            <h4 className="title-select">Room</h4>
            <Row>
              <Col span={15} className="title-small-select">
                {arrSearch.room}
              </Col>

              <Col span={9}>
                <ControlArrow
                  onUp={() =>
                    setArrSearch((prev) => ({ ...prev, room: prev.room + 1 }))
                  }
                  onDown={() =>
                    setArrSearch((prev) => ({ ...prev, room: prev.room - 1 }))
                  }
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="main-button-component">
          <Button loading={isloading} className="main-button" type="primary" htmlType="submit">
            <CheckSquareOutlined /> Book room
          </Button>
        </div>
      </Form>
    </div>
  );
};

const ControlArrow = ({ onUp, onDown }) => {
  return (
    <div className="arrow-box">
      <div className="arrow-icon">
        <UpOutlined onClick={onUp} />
      </div>
      <div className="arrow-icon">
        <DownOutlined onClick={onDown} />
      </div>
    </div>
  );
};

export default SearchComponent;
