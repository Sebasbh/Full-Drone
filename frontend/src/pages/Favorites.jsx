import React, { useContext } from 'react';
import { Row, Col, Card, Typography } from 'antd';
import { FavoritesContext } from '../components/Main/Context/FavoritesContext';
import { DollarOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';

const { Panel } = Collapse;
const { Text } = Typography;
const { Meta } = Card;

const FavoritesPage = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="favorites-container">
      <Row gutter={[16, 16]}>
        {favorites.length > 0 ? (
          favorites.map((drone) => (
            <Col xs={24} sm={12} md={8} lg={6} key={drone._id}>
              <Card
                hoverable
                cover={<img alt={drone.name} src={drone.image} />}
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
          ))
        ) : (
          <h2>No hay drones en tus favoritos aún.</h2>
        )}
      </Row>
    </div>
  );
};

export default FavoritesPage;

