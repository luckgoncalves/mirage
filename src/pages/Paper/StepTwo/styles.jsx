import styled from 'styled-components'
import { Button } from 'reactstrap'

export const Container = styled.div`
  margin: 3rem;
  height: 100%;
  overflow-y: auto;
  `;

export const BtSelection = styled(Button)`
  width: 224px;
  height: 49px;

  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 4px;

  background: ${props => props.actived ? '#FFF' : 'transparent'};
  color: ${props => props.actived ? '#2BCC3B' : '#fff'};

  margin: 0 0.5rem;

  &:hover {
    background: none;
    border: 1px solid #FFFFFF;
  }
  &:visited {
    background: none;
    border: 1px solid #FFFFFF;
  }
`;

export const BtNext = styled(Button)`
  background: #4188F2;
  color: #fff;
`;