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
  YoutubeOutlined,
  CustomerServiceFilled,
  FireFilled,
  ToolOutlined,
  ToolTwoTone,
  ToolFilled,
  DatabaseFilled,
  GlobalOutlined,
  TrophyOutlined
} from '@ant-design/icons'

import { coreTechs, beAndDatabases, tools } from './initData'
import { university } from './text'

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

      <Layout.Content className='container' >
        <Flex vertical justify='center' align='center'>
          {/* intro */}
          <Flex className='intro' vertical align='flex-start' style={{ maxWidth: 1200, textAlign: 'left' }}>
            <Title style={{ color: green[6], fontSize: '68px', margin: 0, padding: 0 }} level={1}>
              Hii!
            </Title>
            <Title style={{ color: green[6] }}>
              {'My name is Huynh Khanh Duy (GreenD)'}
            </Title>
            <Text style={{ color: 'white', fontSize: '24px', fontWeight: '500' }}>
              I'm a developer who likes to do different and cool things, learn from great people 😉. Oh, and I really like the color green!🍀
            </Text>
            {/* here */}
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
                {/* <span style={{ color: green[6], marginRight: 10 }}>|</span> Core Technologies */}
                <FireFilled style={{ color: green[6], marginRight: 8 }} />
                Core Technologies
              </Title>
              <Row gutter={[24, 24]}>
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
                    <Col xs={24} sm={12} md={8} key={index} style={{ textAlign: 'left' }}>
                      <Card
                        hoverable
                        className="card-custom"
                      >
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
                <DatabaseFilled style={{ color: green[6], marginRight: 8 }} />
                Backend & Database
              </Title>
              <Row gutter={[24, 24]}>
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
                    <Col xs={24} sm={12} md={8} key={index} style={{ textAlign: 'left' }}>
                      <Card
                        hoverable
                        className="card-custom"
                      >
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
                <ToolFilled style={{ color: green[6], marginRight: 8 }} />
                Tools & DevOps
              </Title>
              <Row gutter={[24, 24]}>
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
                    <Col xs={24} sm={12} md={8} key={index} style={{ textAlign: 'left' }}>
                      <Card
                        hoverable
                        className="card-custom"
                      >
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
          {/* III. Education */}
          <Flex
            vertical
            style={{ padding: "40px 20px", maxWidth: 1200, margin: '0 auto' }}
          >
            <Title style={{ color: green[6], marginBottom: 40, textAlign: 'center' }}>
              Education
            </Title>

            <Card
              style={{ textAlign: 'left', background: '#1e1e1e', border: '1px solid #333' }}
            >
              <Title level={4} style={{ marginTop: 0, color: 'white' }}>{university.name}</Title>

              <Title level={4} style={{ color: green[6] }}>{university.degree}</Title>
              <Text style={{ color: '#A6A6A6', display: 'block', marginBottom: 10 }}>{university.duration}</Text>

              <Text style={{ color: '#A6A6A6', display: 'block' }}>{university.description}</Text>
            </Card>
          </Flex>

          {/* IV. Languages */}
          <Flex
            vertical
            style={{ padding: "40px 20px", maxWidth: 1200, margin: '0 auto', width: '100%' }}
          >
            <Title style={{ color: green[6], marginBottom: 40, textAlign: 'center' }}>
              Languages
            </Title>

            <Row gutter={[24, 24]} justify="center">
              <Col xs={24} sm={12} style={{ display: 'flex' }}>
                <Card
                  style={{ background: '#1e1e1e', border: '1px solid #333', width: '100%' }}
                >
                  <Flex align="center" gap={16}>
                    <GlobalOutlined style={{ fontSize: 32, color: green[6] }} />
                    <Flex vertical align="flex-start" style={{ textAlign: 'left' }}>
                      <Title level={4} style={{ marginTop: 0, marginBottom: 8, color: 'white' }}>Vietnamese</Title>
                      <Text style={{ color: '#A6A6A6', fontWeight: 'bold' }}>Native Proficiency</Text>
                      <Text style={{ color: '#A6A6A6', fontSize: 12 }}>Native speaker with complete fluency in reading, writing, and speaking. Deep understanding of cultural nuances and business communication.</Text>
                    </Flex>
                  </Flex>
                </Card>
              </Col>

              <Col xs={24} sm={12} style={{ display: 'flex' }}>
                <Card
                  style={{ background: '#1e1e1e', border: '1px solid #333', width: '100%' }}
                >
                  <Flex align="center" gap={16}>
                    <GlobalOutlined style={{ fontSize: 32, color: green[6] }} />
                    <Flex vertical align="flex-start" style={{ textAlign: 'left' }}>
                      <Title level={4} style={{ marginTop: 0, marginBottom: 8, color: 'white' }}>English</Title>
                      <Text style={{ color: '#A6A6A6', fontWeight: 'bold' }}>Professional Proficiency</Text>
                      <Text style={{ color: '#A6A6A6', fontSize: 12 }}>Strong command of English in professional settings. Proficient in business communication, technical documentation, and daily conversation.</Text>
                    </Flex>
                  </Flex>
                </Card>
              </Col>
            </Row>
          </Flex>

          {/* V. Certifications & Awards */}
          <Flex
            vertical
            style={{ padding: "40px 20px", maxWidth: 1200, margin: '0 auto', width: '100%' }}
          >
            <Title style={{ color: green[6], marginBottom: 40, textAlign: 'center' }}>
              Certifications & Awards
            </Title>

            <Row gutter={[24, 24]} justify="center">
              <Col xs={24} sm={12} style={{ display: 'flex' }}>
                <Card
                  style={{ background: '#1e1e1e', border: '1px solid #333', width: '100%' }}
                >
                  <Flex align='center' gap={16}>
                    <TrophyOutlined style={{ fontSize: 32, color: green[6] }} />
                    <Flex vertical align="flex-start" style={{ textAlign: 'left' }}>
                      <Title level={4} style={{ marginTop: 0, marginBottom: 8, color: 'white' }}>TOEIC 545</Title>
                      <Text style={{ color: '#A6A6A6', fontWeight: 'bold' }}>Educational Testing Service (ETS)</Text>
                      <Text style={{ color: '#A6A6A6', fontSize: 12 }}>Issue January 2025 • No Expiration Date</Text>
                    </Flex>
                  </Flex>
                </Card>
              </Col>
            </Row>
          </Flex>

          <Space style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '40px 0' }}>
            <Link href="https://github.com/GreenDyy" target="_blank">
              <GithubOutlined style={{ fontSize: 32, color: '#A6A6A6', marginRight: 24, transition: 'color 0.3s' }} className="social-icon" />
            </Link>
            <Link href="https://www.facebook.com/greendyy" target="_blank">
              <FacebookOutlined style={{ fontSize: 32, color: '#A6A6A6', marginRight: 24, transition: 'color 0.3s' }} className="social-icon" />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <LinkedinOutlined style={{ fontSize: 32, color: '#A6A6A6', marginRight: 24, transition: 'color 0.3s' }} className="social-icon" />
            </Link>
            <Link href="https://www.youtube.com/channel/UCvmIHpWJ5HFjA3qqOIXaM7A" target="_blank">
              <YoutubeOutlined style={{ fontSize: 32, color: '#A6A6A6', transition: 'color 0.3s' }} className="social-icon" />
            </Link>
          </Space>

        </Flex>
      </Layout.Content>

      {/* <Footer /> */}
    </Layout >
  )
}

export default Home 