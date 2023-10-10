import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 45px;
  flex-wrap: wrap;
  flex-direction: row;
  cursor: pointer;
`;

export const ListItem = styled.li`
  width: calc(100% / 3);
  border: 1px solid;
  color: black;
  display: grid;
  justify-items: center;
  padding: 15px;
  border-radius: ${props => props.theme.radii.lg};
  background: aliceblue;
  /* :hover {
    background-color: green; */
  }
`;

export const NameItem = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: ${props => {
    return props.color;
  }};
`;

export const ContactItem = styled.p`
  font-size: 20px;
  color: ${props => {
    return props.color;
  }};
`;

export const BtnItem = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 20px;
  color: red;
  font-weight: bold;
  cursor: pointer;
`;
