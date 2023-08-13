import styled from 'styled-components';

export const StyledButton = styled.button`
width: ${props => props.width};
height: 40px;
background: ${props => props.color === "grey" ? '#6E707A' : '#3C47E9'};
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
margin-left: 12px;
`;