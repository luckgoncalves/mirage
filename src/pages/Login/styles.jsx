import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { Form } from 'reactstrap';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  background: #2BCC3B;
`;

export const BtSubmit = styled(Link)`
  padding: 0.5rem 1.5rem;

  color: #FFF;
  background: #2BCC3B;
  border-radius: 8px;

`;

export const FormLogin = styled(Form) `
  width: 552px;
  height: 484px;

  background: #FFFFFF;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

`;