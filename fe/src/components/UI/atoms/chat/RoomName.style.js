import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  text-align: center;
  background-color: ${(props) => props.theme.white};
  padding: 1rem 0;
  border-bottom: 1px solid ${(props) => props.theme.whiteDark};
  height: 100%;
`;

export const RoomNameText = styled.span`
  font-family: 'Mulish', 'Nanum Gothic', sans-serif;
  font-size: 2.2rem;
  font-weight: 500;
  color: ${(props) => props.theme.blackLight};
`;
