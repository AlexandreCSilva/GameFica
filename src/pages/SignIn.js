import styled from "styled-components";
import { Menu } from "../components/Menu";

export function SignIn() {
  return (<Wrapper>
    <Menu login />
    Login
  </Wrapper>);
}

const Wrapper = styled.div`
  padding-top: 60px;
`;