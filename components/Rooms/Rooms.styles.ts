import styled from 'styled-components';

const Rooms = styled.div`
  display: flex;
  flex-direction: column;
`;

const RoomItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const RoomsGrid = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(19.2857rem, 1fr));
  justify-items: center;
  gap: 1.5rem 0.5rem;
`;

export { Rooms, RoomsGrid, RoomItem };
