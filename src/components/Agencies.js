import React, { Component, Fragment } from 'react';
import { CardBody, Col, Table, Card, CardHeader, Input, Row, Alert, CardFooter, Label } from 'reactstrap';
import { apiService } from '../services/api.service';
import Detalle from './Detalle';

class Agencies extends Component {

    constructor(props) {
    
        super(props); 
    
        this.state = {
            agencyList: [],
            currentFeatured: '',
            currentAgencyType: '',
            currentCountryCode: '',

            next: '',
            previous: ''
        };

        this.ConsultarAgencias = this.ConsultarAgencias.bind(this);
    
      }
    
    componentDidMount() {

        this.ConsultarAgencias();

    }

    changeFeatured = e => {

        this.setState({
            currentFeatured: e.target.value,
        }, () => {
            this.ConsultarAgencias();
        })
    
    }

    changeAgencyType = e => {

        this.setState({
            currentAgencyType: e.target.value,
        }, () => {
            this.ConsultarAgencias();
        })
    
      }

    changeCountryCode = e => {

    this.setState({
        currentCountryCode: e.target.value,
    }, () => {
        this.ConsultarAgencias();
    })

    }
    

    ConsultarAgencias() {
        apiService.getAll(this.state.currentFeatured, this.state.currentAgencyType, this.state.currentCountryCode)
        .then(agencyList => {

            this.setState(() => ({ 
                agencyList: agencyList.results && agencyList.results,
            }));
            
        });

    }
    
        
    render() {
       

        const { 
            agencyList,
            currentFeatured,
            currentAgencyType,
            currentCountryCode
         } = this.state;
                
      return (
        <div className="animated fadeIn">  
            <br></br>
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            Filtrar por
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col>
                                    <Label>Agency Type</Label>
                                    <Input
                                        type="select"
                                        className="form-control"
                                        onChange={this.changeAgencyType}
                                        value={currentAgencyType}
                                    >
                                        <option value=''>Todos</option>
                                        <option value="1">Government</option>
                                        <option value="2">Multinational</option>
                                        <option value="3">Commercial</option>
                                        <option value="4">Educational</option>
                                        <option value="5">Private</option>
                                        
                                    </Input>
                                </Col>

                                <Col>
                                    <Label>Featured</Label>
                                    <Input
                                        type="select"
                                        className="form-control"
                                        onChange={this.changeFeatured}
                                        value={currentFeatured}
                                    >
                                        <option value=''>Todos</option>
                                        
                                        <option value="true">Destacada</option>
                                        <option value="false">Sin destacar</option>
                                        
                                    </Input>
                                </Col>

                                <Col>
                                    <Label>Country Code</Label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        onChange={this.changeCountryCode}
                                        value={currentCountryCode}
                                        placeholder="Enter CountryCode"
                                    >
                                    </Input>
                                </Col>
    

                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        <br></br>
            <Row>
                <Col md="12">
                    <Card>
                        <CardHeader className="d-flex justify-content-between align-items-center">
                            <div><i className="fa fa-align-justify"></i> Listado de agencias </div>
                        </CardHeader>
                        <CardBody>
                        {
                            agencyList.length > 0 ?     
                            <Table hover responsive >
                                <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Description</th>
                                    <th>Featured</th>
                                    <th>Type</th>
                                    <th>Country Code</th>                                    
                                    <th>Acciones</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    agencyList.map( (agencia, index) => {
                                         
                                    return (
                                        <tr key={index}>
                                            <td>{agencia.name}</td>
                                            <td>{agencia.description}</td>
                                            <td>{agencia.featured === true ? 'Destacada': 'Sin destacar'} </td>
                                            <td>{agencia.type}</td>
                                            <td>{agencia.country_code}</td>
                                            <td className="flex-row">
                                                { 
                                                    <Fragment>
                                                        
                                                        <Detalle
                                                            agencia={agencia}
                                                        />
                                
                                                    </Fragment>
                                                    
                                                }
                                            </td>
                                        </tr>
                                    );
                                        
                                    })

                                }
                                </tbody>
                            </Table>
                            :
                            <Row className="justify-content-center">
                              <Col md="4" >
                                <Alert color="info" className="text-center">
                                    No se han encontrado datos de agencias
                                </Alert>
                              </Col>
                            </Row>
                        }
                        </CardBody>
                        <CardFooter>
                        <>
                            <div className="pagination">
                                <button onClick="">Previous</button> 
                                <button onClick="">Next</button>
                            </div>
                        </>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>

        </div>
    );
  }

}

export default Agencies;