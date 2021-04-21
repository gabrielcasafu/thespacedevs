import React, { Component, Fragment } from 'react';
import { Modal, ModalBody, ModalHeader, Button, CardBody, ModalFooter } from 'reactstrap';

class Detalle extends Component {
    
    constructor(props) {

        super(props);

        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);

    }

    toggle() {
        this.setState({
            modal: !this.state.modal,
        });
    }
  
  render() {

    const { 
        agencia
     } = this.props;

    return (
      <Fragment>
        <Button
            color="secondary"
            size="sm"
            onClick={this.toggle}
        >
          VER DETALLE 
        </Button>  
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={'modal-lg' + this.props.className}>
          <ModalHeader toggle={this.toggle}>Informacion adicional</ModalHeader>
          <ModalBody>
            <CardBody>
              
              <div className="detail text-center">
                  <div className="detail-view">
                    <div className="image">
                        <img src={agencia.image_url} alt={agencia.name} width="100px" height="100px" />
                    </div>
                    <div className="data">
                        <h2>{agencia.name}</h2>
                    </div>
                    <div className="property">
                      <div className="left">Featured</div>
                      <div className="right">{ agencia.featured === true ? 'Destacada': 'Sin destacar'}</div>
                    </div>
                    <div className="property">
                      <div className="left">Type</div>
                      <div className="right">{agencia.type }</div>
                    </div>
                    <div className="property">
                      <div className="left">Country Code</div>
                      <div className="right">{agencia.country_code } </div>
                    </div>
                    <div className="property">
                      <div className="left">Founding Year</div>
                      <div className="right">{agencia.founding_year } </div>
                    </div>
                    <div className="property">
                      <div className="left">Administrator</div>
                      <div className="right">{agencia.administrator } </div>
                    </div>
                    <div className="property">
                      <div className="left">Launchers</div>
                      <div className="right">{agencia.launchers } </div>
                    </div>
                    <div className="property">
                      <div className="left">Abbrev</div>
                      <div className="right">{agencia.abbrev } </div>
                    </div>
 
                  </div>

            
              </div>  
              
            </CardBody>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cerrar</Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default Detalle;