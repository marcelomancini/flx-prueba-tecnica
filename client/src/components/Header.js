import React from 'react';
import { Row, Col, Typography } from 'antd';

const { Text, Title } = Typography;

const Header = () => {
  return (
    <>
      <Row justify="start" align="middle" style={{ backgroundColor: '#D9D9D9', borderRadius: '8px', height: '91px', width: '100vw'}}>
        <Col>
          <img
            src='https://s3-alpha-sig.figma.com/img/6b8b/6193/8cda741ef446c5206a1bdca3b4e7acad?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bQVR2fuRU7saYMTNafemCfbAPml2uQsQwJCu9SwU9XlatkLXFxIv2dF7QwM36iZhCnNNvkaq4bKCu68psatVocA3DJHAq57nYky~KLQmwyxSfGj23kIrEpN-9rBDmVsSIlHnlMw5nKDn6D5CYjFNnWbZ8lM1y~eXL1yS5IwWxMDaYaAbhnLME6CJVrbO2mLKxNrjLQP0IWsqsX~OhduAYSaW3g1XYu9OJ41GHtyMhnKsaQUlir1ldJApHO2K1L-kpp7UbHe3gnjekYU7S2~lMApL07ZXmCdIdQ~2L~bVEhynuRdVucKUbMKTVzk5jF9GWGpVZErUGAtYV-XNN5a9iQ__'
            alt='logo'
            style={{ width: '153px', height: '36px', paddingTop: '27px', paddingLeft: '63px' }}
          />
        </Col>
      </Row>

      <Row style={{ marginBottom: '20px', paddingLeft: '98px' }}>
        <Col>
          <Title level={4} style={{ marginBottom: '0' }}>
            <Text style={{ color: 'gray' }}>Usuarios /</Text> Listado de usuarios
          </Title>
        </Col>
      </Row>
    </>
  );
};

export default Header;