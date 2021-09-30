import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
   box-sizing: border-box;
   background-color: #005DFF;
  }
`;

export const BoxMother = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Files = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

export const BoxT = styled.div``;

export const Tittle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  color: red;
  font-size: 9vh;
  text-shadow: -5px 5px 0px #00e6e6, -10px 10px 0px #01cccc,
    -15px 15px 0px #00bdbd;
  color: #ffffff;
`;

export const BoxIptBt = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Ipt = styled.input`
  height: 7vh;
  width: 350px;
  font-size: 4vh;
  font-weight: bold;
  text-align: center;
  outline: 0;
  color: green;
`;

export const AddBt = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  height: 7.5vh;
`;

export const AddImg = styled.img`
  height: 100%;
`;

export const Rmv = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 3vh;
  color: orange;
  margin: 2vh;
  font-weight: bold;
`;

export const Dumpster = styled.img`
  height: 5vh;
`;
