import ClipLoader from 'react-spinners/ClipLoader';
import styled from 'styled-components';

const Rooms = styled.div`
  display: flex;
  flex-direction: column;
  overflow-anchor: none;
`;

const RoomItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const RoomsGrid = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, 19.2857rem);
  justify-items: center;
  justify-content: space-between;
  gap: 1.5rem 0.5rem;
  margin-bottom: 2.1429rem;
`;

const Preloader = styled(ClipLoader)`
  align-self: center;
`;

export { Rooms, RoomsGrid, RoomItem, Preloader };
