import styled from "styled-components";

export const Container = styled.div`
display: flex;
height: 100vh;
`

export const Main = styled.div`
width: calc(100% - 280px);
padding: 20px;
overflow-y: auto;
::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`