import React from 'react';
import { Layout, Typography, Space } from 'antd';
import { MailOutlined } from '@ant-design/icons';

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

function Footer() {
  return (
    <AntFooter style={{ background: '#f5f5f5', padding: '24px 16px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src="../../../public/LOGODRONE.png" alt="Drone Logo" style={{ width: '40px', marginRight: '8px' }} />
        <Space direction="vertical" size={8}>
          <Text type="secondary" style={{ fontSize: 14, fontWeight: 'bold' }}>
            © 2023 FULL-DRONE. Todos los derechos reservados.
          </Text>
          <Text type="secondary" style={{ fontSize: 12 }}>
            Contáctanos: info@full-drone.com
          </Text>
          <a href="mailto:info@full-drone.com" style={{ fontSize: 12 }}>
            <MailOutlined style={{ marginRight: '4px' }} />
            info@full-drone.com
          </a>
        </Space>
      </div>
    </AntFooter>
  );
}

export default Footer;



