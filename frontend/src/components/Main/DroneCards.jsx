import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Collapse, Typography } from 'antd';
import { fetchData } from '../../utils/api';
import { DollarOutlined, InfoCircleOutlined } from '@ant-design/icons';
import FavoritesButton from './Buttons/FavoritesButton';
import CartButton from './Buttons/CartButton';

import '../../styles/DroneCards.css';

const { Panel } = Collapse;
const { Text } = Typography;
const { Meta } = Card;

const DroneCards = () => {
  const [drones, setDrones] = useState([]);

  useEffect(() => {
    fetchData().then((data) => setDrones(data));
  }, []);

  return (
    <div className="drone-cards-container">
      <Row gutter={[16, 16]}>
        {drones.map((drone) => (
          <Col xs={24} sm={12} md={8} lg={6} key={drone._id}>
            <Card
              hoverable
              cover={<img alt={drone.name} src={drone.image} />}
              actions={[
                <FavoritesButton drone={drone} />,
                <CartButton />,
              ]}
            >
              <Meta title={drone.name} description={drone.type} />
              <div className="card-content">
                <div className="price-container">
                  <DollarOutlined />
                  <Text className="price-text">{drone.price}</Text>
                </div>
                <Collapse ghost>
                  <Panel header="More Information" key="1" extra={<InfoCircleOutlined />}>
                    <p>{drone.description}</p>
                  </Panel>
                </Collapse>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default DroneCards;
