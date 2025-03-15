import React, { useState } from 'react'
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
import { coreTechs, beAndDatabases, tools } from './initData'
const { Title, Text, Link } = Typography

function Home() {
  const [dataCoreTechs, setDataCoreTechs] = useState(coreTechs)
  const [dataBeAndDatabases, setDataBeAndDatabases] = useState(beAndDatabases)
  const [dataTools, setDataTools] = useState(tools)

  // useEffect(() => { 
  //   setDataCoreTechs(coreTechs)
  //   setDataBeAndDatabases(beAndDatabases)
  //   setDataTools(tools)
  // }, [])


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

          {/* II. Skills & Expertise */}
          <Flex
            vertical
            style={{ padding: "40px 20px", maxWidth: 1200, margin: '0 auto' }}
          >
            <Title style={{ color: green[6], marginBottom: 40, textAlign: 'center' }}>
              Skills & Expertise
            </Title>

            {/* Core Technologies */}
            <Flex
              vertical
            >
              <Title level={2} style={{ color: 'white', marginBottom: 40, textAlign: 'left' }}>
                Core Technologies
              </Title>
              <Row gutter={[24, 24]} style={{ textAlign: 'left' }}>
                {/* Row 1 */}
                {dataCoreTechs?.map((item, index) => {
                  let icon = null;
                  //xử lý icon
                  if (item.pathIcon) {
                    icon = <img src={item.pathIcon} alt={item.name} style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                  }
                  else {
                    if (item.icon) {
                      icon = item.icon
                    }
                    else {
                      icon = <GithubOutlined style={{ fontSize: 40, color: green[6] }} />
                    }
                  }
                  return (
                    <Col xs={24} sm={12} md={8} key={index}>
                      <Card hoverable style={{ background: '#1a1a1a', border: '1px solid #333' }}>
                        <Flex gap={20} align="center">
                          {icon}
                          <Flex vertical>
                            <Title level={4} style={{ color: 'white', margin: 0, fontWeight: 'bold' }}>{item.name}</Title>
                            <Text style={{ color: '#999' }}>{item.experience}</Text>
                          </Flex>
                        </Flex>
                      </Card>
                    </Col>
                  )
                })}
              </Row>
            </Flex>
            {/* Backend & Database */}
            <Flex
              vertical
            >
              <Title level={2} style={{ color: 'white', marginBottom: 40, textAlign: 'left' }}>
                Backend & Database
              </Title>
              <Row gutter={[24, 24]} style={{ textAlign: 'left' }}>
                {dataBeAndDatabases?.map((item, index) => {
                  let icon = null;
                  //xử lý icon
                  if (item.pathIcon) {
                    icon = <img src={item.pathIcon} alt={item.name} style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                  }
                  else {
                    if (item.icon) {
                      icon = item.icon
                    }
                    else {
                      icon = <GithubOutlined style={{ fontSize: 40, color: green[6] }} />
                    }
                  }
                  return (
                    <Col xs={24} sm={12} md={8} key={index}>
                      <Card hoverable style={{ background: '#1a1a1a', border: '1px solid #333' }}>
                        <Flex gap={20}>
                          {icon}
                          <Flex vertical>
                            <Title level={4} style={{ color: 'white', margin: 0, fontWeight: 'bold' }}>{item?.name}</Title>
                            <Text style={{ color: '#999' }}>3 months</Text>

                            {/* <Text style={{ color: '#999' }}>3 months</Text> */}
                          </Flex>
                        </Flex>
                      </Card>
                    </Col>
                  )
                })}
              </Row>
            </Flex>
            {/* Tools & DevOps */}
            <Flex
              vertical
            >
              <Title level={2} style={{ color: 'white', marginBottom: 40, textAlign: 'left' }}>
                Tools & DevOps
              </Title>
              <Row gutter={[24, 24]} style={{ textAlign: 'left' }}>
                {dataTools?.map((item, index) => {
                  let icon = null;
                  //xử lý icon
                  if (item.pathIcon) {
                    icon = <img src={item.pathIcon} alt={item.name} style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                  }
                  else {
                    if (item.icon) {
                      icon = item.icon
                    }
                    else {
                      icon = <GithubOutlined style={{ fontSize: 40, color: green[6] }} />
                    }
                  }
                  return (
                    <Col xs={24} sm={12} md={8} key={index}>
                      <Card hoverable style={{ background: '#1a1a1a', border: '1px solid #333' }}>
                        <Flex gap={20}>
                          {icon}
                          <Flex vertical>
                            <Title level={4} style={{ color: 'white', margin: 0, fontWeight: 'bold' }}>{item?.name}</Title>
                            <Text style={{ color: '#999' }}>3 months</Text>

                            {/* <Text style={{ color: '#999' }}>3 months</Text> */}
                          </Flex>
                        </Flex>
                      </Card>
                    </Col>
                  )
                })}
              </Row>
            </Flex>

          </Flex>
        </Flex>
      </Layout.Content>

      {/* <Footer /> */}
    </Layout>
  )
}

export default Home 