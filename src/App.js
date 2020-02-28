import React, { useState } from 'react';
import Header from './Components/Header.js';
import { Container, Row, Col, Breadcrumb, Tabs, Tab, Table, ProgressBar, Pagination, Button, Popover, OverlayTrigger, Collapse } from 'react-bootstrap';
function App() {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Informasi Website</Popover.Title>
        <Popover.Content>
          Website ini dibuat untuk mempermudah Informasi seputar sepak bola
        </Popover.Content>
    </Popover>
  );
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Header/>
      <Container>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Liga Inggris</Breadcrumb.Item>
              <Breadcrumb.Item active>Transfer Pemain</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <h3>Rumor Transfer Pemain</h3>
        </Row>
        <Row>
          <Col>
            <Tabs className="justify-content-between">
              <Tab eventKey='home' title="Semua Transfer">
                <Table bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nama Pemain</th>
                      <th>Tim</th>
                      <th>Transfer</th>
                      <th>Proses Transfer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>MAROUANE FELLAINI</td>
                      <td>MANCHESTER UNITED</td>
                      <td>SHANDONG LUNENG</td>
                      <td>
                        <ProgressBar striped animated now={86} label="86%"/>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>LOUIS NANI</td>
                      <td>SPORTING CP</td>
                      <td>ORLANDO CITY</td>
                      <td>
                        <ProgressBar striped animated now={55} label="55%"/>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>MAREK HAMSIK</td>
                      <td>NAPOLI</td>
                      <td>DALIAN YIFANG</td>
                      <td>
                        <ProgressBar striped animated now={95} label="95%"/>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>SARDAR AZMOUN</td>
                      <td>RUBIN KAZAN</td>
                      <td>ZENIT ST PETERSBURG</td>
                      <td>
                        <ProgressBar striped animated now={100} label="100%"/>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>MICY BATSHUAYI</td>
                      <td>CHELSEA</td>
                      <td>CRYSTAL PALACE</td>
                      <td>
                        <ProgressBar striped animated now={50} label="50%"/>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>LUCAS PIAZON</td>
                      <td>CHELSEA</td>
                      <td>CHIEVO</td>
                      <td>
                        <ProgressBar striped animated now={100} label="100%"/>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Tab>
              <Tab eventKey='Tab_2' title="Liga Premier Inggris">

              </Tab>
              <Tab eventKey='Tab_3' title="Serie A">

              </Tab>
              <Tab eventKey='Tab_4' title="Divisi Primera">

              </Tab>
              <Tab eventKey='Tab_5' title="Bundes Liga">

              </Tab>
              <Tab eventKey='Tab_6' title="Liga 1 Indonesia">

              </Tab>
            </Tabs>
          </Col>
        </Row>
        <Pagination>
          <Pagination.First/>
          <Pagination.Prev/>
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Ellipsis/>

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item>{14}</Pagination.Item>
          <Pagination.Ellipsis/>

          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next/>
          <Pagination.Last/>
        </Pagination>
        <OverlayTrigger trigger='click' placement='right' overlay={popover}>
          <Button variant="primary" style={{marginRight:"10px"}}>Informasi</Button>
        </OverlayTrigger>
        <>
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            Versi Website
          </Button>
          <Collapse in={open}>
            <div id="example-collapse-text">
              Akses Sport V1.0
            </div>
          </Collapse>
        </>
      </Container>
    </div>
  );
}

export default App;
