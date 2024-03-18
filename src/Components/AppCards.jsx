 
import { Card, Col, Row } from 'antd';

const AppCards = () => (

  <Row gutter={80} style={{marginTop:"20px" , display:"flex"}}  >
    <Col span={12}>
      <Card title="Web Development" bordered={true}>
        Card content
      </Card>
    </Col>
    <Col span={12}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
    <Col span={12}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
  </Row>
);
export default AppCards;