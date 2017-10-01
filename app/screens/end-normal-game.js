import React from 'react';
import Header from '../components/header';
import { Button, ButtonToolbar, Jumbotron, ListGroup, ListGroupItem, Table, Modal, FormGroup, Col,
        FormControl, Checkbox, Form, ControlLabel } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import endNormalGameStyle from '../../assets/js/end-normal-game.js';
import { sortBy } from 'underscore';

class EndNormalGame extends React.PureComponent {
    
  constructor(props) {
    super(props);
    this.state = {
      showModalSignIn: false,
      showModalSignUp: false
    };
    this.openModalSignIn = this.openModalSignIn.bind(this);
    this.closeModalSignIn = this.closeModalSignIn.bind(this);
    this.openModalSignUp = this.openModalSignUp.bind(this);
    this.closeModalSignUp = this.closeModalSignUp.bind(this);
    this.handleShowSignIn = this.handleShowSignIn.bind(this);
    this.handleShowSignUp = this.handleShowSignUp.bind(this);
    this.handleHideModals = this.handleHideModals.bind(this);
  }

  openModalSignIn() {
    this.setState({ showModalSignIn:true });    
  }

  closeModalSignIn() {
    this.setState({ showModalSignIn:false });
  }

  openModalSignUp() {
    this.setState({ showModalSignUp:true });    
  }

  closeModalSignUp() {
    this.setState({ showModalSignUp:false });
  }

  handleShowSignIn() {
    this.openModalSignIn();
  }

  handleShowSignUp() {
    this.closeModalSignIn();
    this.openModalSignUp();
  }

  handleHideModals() {
    this.closeModalSignIn();
    this.closeModalSignUp();
  }

  render() {
    return (
      <div className='container'>
         <Jumbotron>
          <h1>Your final score is 100!</h1>
          <p>Would you like to save your score to compete with other players?</p>
          <p>
            <Button bsStyle="success" onClick={() => this.handleShowSignIn()}>
              Save
            </Button>
            <Link to={'/'}>
              <Button bsStyle="default">
                Return Home
              </Button>
            </Link>  
          </p>
        </Jumbotron>


        <div className="modal-container" style={{height: 20}}>
          <Modal
            show={this.state.showModalSignIn}
            onHide={this.handleHideModals()}
            container={this}
            aria-labelledby="contained-modal-title" 
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title">Sign in to save your score</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Email
                  </Col>
                  <Col sm={10}>
                    <FormControl type="email" placeholder="Email" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Password
                  </Col>
                  <Col sm={10}>
                    <FormControl type="password" placeholder="Password" />
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Checkbox>
                      Remember me
                    </Checkbox>
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Link to={'/'}>
                      <Button bsStyle="primary" type="submit">
                        Sign in
                      </Button>
                    </Link>  
                  </Col>
                </FormGroup>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Col xs={12} lg={4} sm={10}>
                <p>Don't have an account?</p>
                <Button bsStyle="link" onClick={() => this.handleShowSignUp()}>
                  Sign up
                </Button>
              </Col>
              <Button onClick={() => this.handleHideModals()}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        <div className="modal-container" style={{height: 20}}>
          <Modal
            show={this.state.showModalSignUp}
            onHide={this.handleHideModals()}
            container={this}
            aria-labelledby="contained-modal-title" 
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title">Sign up to save your score</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form horizontal>
                <FormGroup controlId="formHorizontalUsername">
                  <Col componentClass={ControlLabel} sm={2}>
                    Username
                  </Col>
                  <Col sm={10}>
                    <FormControl type="username" placeholder="Username" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Email
                  </Col>
                  <Col sm={10}>
                    <FormControl type="email" placeholder="Email" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Password
                  </Col>
                  <Col sm={10}>
                    <FormControl type="password" placeholder="Password" />
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Link to={'/'}>
                      <Button bsStyle="primary" type="submit">
                        Confirm
                      </Button>
                    </Link>  
                  </Col>
                </FormGroup>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => this.handleHideModals()}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        
        <h2>Leaderboard</h2>
        <Table responsive>
          <thead>
            <tr>
              <th>Place</th>
              <th>Player</th>
              <th>Points</th>
            </tr>
          </thead>
          {/*{ this.renderRanking() */}
          <tbody>
            <tr>
              <td>13</td>
              <td>guille</td>
              <td>105</td>
            </tr>
            <tr>
              <td>14</td>
              <td>seba_bolso</td>
              <td>103</td>
            </tr>
            <tr style={ endNormalGameStyle.currentPlayer }>
              <td>15</td>
              <td>pepito (You)</td>
              <td>100</td>
            </tr>
            <tr>
              <td>16</td>
              <td>mauricap</td>
              <td>97</td>
            </tr>
            <tr>
              <td>17</td>
              <td>voiras</td>
              <td>95</td>
            </tr>
          </tbody>
        </Table>
        <p>
          Share your score!
        </p>
        <Button bsStyle="primary" bsSize="small">f | Compartir</Button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    matchData: state.matchData,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadCurrentMatch: (input) => dispatch(loadCurrentMatch(input)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EndNormalGame)



  /*CODIGO PARA ORDENAR LAS POSICIONES DEL RANKING
  renderRanking() {
    const obj = {
      game: {
        image: '',
        description: 'Juego de prueba',
        name: 'Experto Fútbol',
        ranking: [ {user: 'Tito', points: 40}, {user: 'Juan', points: 500}, {user: 'Pepito', points: 0} ]
      }
    }
    const ranking = sortBy(obj.game.ranking, 'points').reverse();
    const items = [];
    ranking.forEach( (entry, index) => {
      items.push(
        <tr> ACA HAY QUE DISTINGUIR AL CURRENT PLAYER PARA PINTARLO DE OTRO COLOR COMO ABAJO
          <td>{ index + 1 }</td>
          <td>{ entry.user }</td>
          <td>{ entry.points } pts</td>
        </tr>
      );
    });
    return (<tbody>{ items }</tbody>);
  }*/