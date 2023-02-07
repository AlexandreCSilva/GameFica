import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

export function Menu({ login }) {
  const navigate = useNavigate();

  return (<>
    <TopBar>
      <h1 onClick={ () => navigate('/') }>GameFica</h1>

      <div className='options'>
        <button onClick={ () => navigate(!login ? '/sign-in' : '/sign-up') }>{!login ? 'Login' : 'Inscrever-se'}</button>
      </div>
    </TopBar>

    <BottomBar>
      <div className='options'>
        <button onClick={ () => navigate(!login ? '/sign-in' : '/sign-up') }>{!login ? 'Login' : 'Inscrever-se'}</button>
      </div>
    </BottomBar>
  </>);
}

const TopBar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #93C6E7;

  h1 {
    color: white;
    font-weight: 400;
    font-size: 38px;
    font-family: 'Mochiy Pop One', sans-serif;
    -webkit-transition: -webkit-transform 0.2s;
    transition: -webkit-transform 0.2s;
    transition: transform 0.2s;
    transition: transform 0.2s, -webkit-transform 0.2s;
  }

  h1:hover {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
    cursor: pointer;
  }

  .options {
    button {
      padding: 10px 20px;
      border: none;
      border-radius: 20px;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
      font-family: 'Mochiy Pop One', sans-serif;
      background-color: #0081B4;
      color: white;
      -webkit-transition: -webkit-transform 0.2s;
      transition: -webkit-transform 0.2s;
      transition: transform 0.2s;
      transition: transform 0.2s, -webkit-transform 0.2s;
    }

    button:hover {
      -webkit-transform: scale(1.3);
      transform: scale(1.3);
      cursor: pointer;
    }
  }

  @media (max-width: 800px) {
    .options {
      display: none;
    }
  }
`;

const BottomBar = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
  background-color: #93C6E7;
  display: none;

  .options {
    button {
      padding: 10px 20px;
      border: none;
      border-radius: 20px;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
      font-family: 'Mochiy Pop One', sans-serif;
      background-color: #0081B4;
      color: white;
      -webkit-transition: -webkit-transform 0.2s;
      transition: -webkit-transform 0.2s;
      transition: transform 0.2s;
      transition: transform 0.2s, -webkit-transform 0.2s;
    }

    button:hover {
      -webkit-transform: scale(1.3);
      transform: scale(1.3);
      cursor: pointer;
    }
  }

  @media (max-width: 800px) {
    display: flex;
  }
`;
