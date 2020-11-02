import React from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';
import mirageLogo from '../../assets/image/mirage-logo.svg';

import { Container, BtSubmit, FormLogin} from './styles';

function Login() {
  return (
    <Container>
      <div className="d-flex align-items-center justify-content-center mb-5">
        <img src={mirageLogo} alt="Mirage" />
        <h1 className="text-white">mirage</h1>
      </div>
    <FormLogin>

      <h2 className="mb-5">Faça o login</h2>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Nome</Label>
        <Col sm={10}>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>Senha</Label>
        <Col sm={10}>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </Col>
      </FormGroup>
      <FormGroup check row>
        <BtSubmit to="/paper">Login</BtSubmit>
      </FormGroup>
    </FormLogin>
    </Container>
  );
}
export default Login;