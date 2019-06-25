import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${props => props.theme.main};
  border-radius: 5px;

  border: 2px solid ${props => props.theme.contrast};

  padding: 20px;
`;

const CardContainer: React.FC = ({children, ...props}) => {
    return (
      <Wrapper {...props}>{children}</Wrapper>
    );
};

export default CardContainer;