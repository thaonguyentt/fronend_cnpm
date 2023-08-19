import {
  CheckSquareOutlined,
  DownOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { Button, Col, DatePicker, Row, Form } from "antd";
import moment from "moment";
import React, { useState } from "react";
import "./search.css";
const defaultArrSearch = {
  children: 0,
  room: 1,
  num_people: 1,
};
const SearchAllRoomComponent = ({ filter, setFilter }) => {
  const [arrSearch, setArrSearch] = useState(defaultArrSearch);
  const onChangeCheckin = (date, dateString) => {
    console.log(date, dateString);
  };
  const onFinish = (values) => {
    const res = {
      check_in: values?.check_in?.format("YYYY-MM-DD"),
      check_out: values?.check_out?.format("YYYY-MM-DD"),
      num_people: arrSearch.num_people,
    };
    setFilter(res);
  };
  return (
    <div className="search-component">
      <Form
        onFinish={onFinish}
        defaultValue={{
          check_in: moment(),
          check_out: moment().add(3, "days"),
        }}
      >
        <Row className="grid-search" gutter={0}>
          <Col xs={12} md={12} lg={6} className="select big-select item1">
            <h4 className="title-select">Check-in</h4>
            <Form.Item name="check_in">
              <DatePicker
                className="w-100"
                size="large"
                // value={moment()}
                onChange={onChangeCheckin}
                format="YYYY-MM-DD"
              />
            </Form.Item>
          </Col>
          <Col xs={12} md={12} lg={6} className="select big-select item2">
            <h4 className="title-select">Check-out</h4>
            <Form.Item name="check_out">
              <DatePicker
                className="w-100"
                size="large"
                // value={moment().add(3, "days")}
                onChange={onChangeCheckin}
                format="YYYY-MM-DD"
              />
            </Form.Item>
          </Col>
          <Col xs={12} md={12} lg={4} className="select item3">
            <h4 className="title-select">Adult</h4>
            <Row className="">
              <Col span={15} className="title-small-select">
                {arrSearch.num_people}
              </Col>

              <Col span={9}>
                <ControlArrow
                  onUp={() =>
                    setArrSearch((prev) => ({
                      ...prev,
                      num_people: prev.num_people + 1,
                    }))
                  }
                  onDown={() =>
                    setArrSearch((prev) => ({
                      ...prev,
                      num_people: prev.num_people - 1,
                    }))
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
          <Button className="main-button" type="primary" htmlType="submit">
            <CheckSquareOutlined /> Check available
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

export default SearchAllRoomComponent;
