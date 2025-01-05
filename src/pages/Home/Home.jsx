import React from 'react'
import './Home.scss'
import { Button, Card, Col, Flex, Layout, Row, Space, Typography } from 'antd'
import { Footer, Header } from '../../components'
import { blue, green } from '@ant-design/colors'
import {
  GithubOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeOutlined
} from '@ant-design/icons'

const { Title, Text, Link } = Typography

function Home() {
  return (
    <Layout style={{ background: "black", color: "white" }}>
      {/* <Header /> */}

      <Layout.Content className='container' style={{ minHeight: "100vh" }}>
        <Flex vertical justify='center' align='center'>
          {/* intro */}
          <Flex className='intro' vertical align='flex-start' style={{ maxWidth: 1200, textAlign: 'left' }}>
            <Title style={{ color: green[6], fontSize: '68px', margin: 0, padding: 0 }} level={1}>
              Hello
            </Title>
            <Title style={{ color: green[6] }}>
              My name is Huynh Khanh Duy
            </Title>
            <Text style={{ color: 'white', fontSize: '24px' }}>
              "I'm a developer who likes to do different and cool things, learn from great people"
            </Text>
            <Space size={'large'} style={{ marginTop: 20 }}>
              <Button
                type="text"
                icon={<GithubOutlined style={{ fontSize: '30px', color: green[6] }} />}
              />
              <Button
                type="text"
                icon={<FacebookOutlined style={{ fontSize: '30px', color: green[6] }} />}
              />
              <Button
                type="text"
                icon={<InstagramOutlined style={{ fontSize: '30px', color: green[6] }} />}
              />
              <Button
                type="text"
                icon={<LinkedinOutlined style={{ fontSize: '30px', color: green[6] }} />}
              />
              <Button
                type="text"
                icon={<YoutubeOutlined style={{ fontSize: '30px', color: green[6] }} />}
              />
            </Space>
          </Flex>

          {/* Skills & Expertise */}
          <Flex
            vertical
            style={{ padding: "40px 20px", maxWidth: 1200, margin: '0 auto' }}
          >
            <Title style={{ color: green[6], marginBottom: 40, textAlign: 'left' }}>
              Skills & Expertise
            </Title>

            <Row gutter={[24, 24]} style={{ textAlign: 'left' }}>
              {/* Row 1 */}
              <Col xs={24} sm={12} md={8}>
                <Card hoverable style={{ background: '#1a1a1a', border: '1px solid #333' }}>
                  <Title level={4} style={{ color: 'white', margin: 0 }}>Frontend</Title>
                  <Text style={{ color: '#999' }}>React, Vue, Angular</Text>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Card hoverable style={{ background: '#1a1a1a', border: '1px solid #333' }}>
                  <Title level={4} style={{ color: 'white', margin: 0 }}>Backend</Title>
                  <Text style={{ color: '#999' }}>Node.js, Python, Java</Text>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Card hoverable style={{ background: '#1a1a1a', border: '1px solid #333' }}>
                  <Title level={4} style={{ color: 'white', margin: 0 }}>Database</Title>
                  <Text style={{ color: '#999' }}>MongoDB, MySQL, PostgreSQL</Text>
                </Card>
              </Col>

              {/* Row 2 */}
              <Col xs={24} sm={12} md={8}>
                <Card hoverable style={{ background: '#1a1a1a', border: '1px solid #333' }}>
                  <Title level={4} style={{ color: 'white', margin: 0 }}>Mobile</Title>
                  <Text style={{ color: '#999' }}>React Native, Flutter</Text>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Card hoverable style={{ background: '#1a1a1a', border: '1px solid #333' }}>
                  <Title level={4} style={{ color: 'white', margin: 0 }}>DevOps</Title>
                  <Text style={{ color: '#999' }}>Docker, Kubernetes, AWS</Text>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Card hoverable style={{ background: '#1a1a1a', border: '1px solid #333' }}>
                  <Title level={4} style={{ color: 'white', margin: 0 }}>Testing</Title>
                  <Text style={{ color: '#999' }}>Jest, Cypress, Selenium</Text>
                </Card>
              </Col>

              {/* Row 3 */}
              <Col xs={24} sm={12} md={8}>
                <Card hoverable style={{ background: '#1a1a1a', border: '1px solid #333' }}>
                  <Title level={4} style={{ color: 'white', margin: 0 }}>UI/UX</Title>
                  <Text style={{ color: '#999' }}>Figma, Adobe XD</Text>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Card hoverable style={{ background: '#1a1a1a', border: '1px solid #333' }}>
                  <Title level={4} style={{ color: 'white', margin: 0 }}>Version Control</Title>
                  <Text style={{ color: '#999' }}>Git, GitHub, GitLab</Text>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Card hoverable style={{ background: '#1a1a1a', border: '1px solid #333' }}>
                  <Title level={4} style={{ color: 'white', margin: 0 }}>Other Tools</Title>
                  <Text style={{ color: '#999' }}>VS Code, Postman, Jira</Text>
                </Card>
              </Col>
            </Row>
          </Flex>
        </Flex>
      </Layout.Content>

      {/* <Footer /> */}
    </Layout>
  )
}

export default Home 