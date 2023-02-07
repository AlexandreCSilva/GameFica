import { useState } from "react";
import { Oval } from "react-loader-spinner";
import { toast } from "react-toastify";
import styled from "styled-components";
import { Menu } from "../components/Menu";
import { signUpSchema } from "../schemas/SignUp";

export function SignUp() {
  const [ isAble, setIsAble ] = useState(true);
  const [ form, setForm ] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmaSenha: "",
  });

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const signUp = (event) => {
    event.preventDefault();

    const validation = signUpSchema.validate(form);

    if (validation.error) {
      toast(validation.error.message);
      return;
    }

    const body = {
      name: form.name,
      email: form.email,
      password: form.password,
    };

    //postSignUp
    
    setIsAble(false);
  };

  return (<Wrapper>
    <Menu />

    <div className='content'>
      <form onSubmit={signUp}>
        <input
          type="text"
          name="nome"
          value={form.nome}
          onChange={handleForm}
          placeholder="Nome"
          disabled={!isAble}
        />
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleForm}
          placeholder="E-mail"
          disabled={!isAble}
        />
        <input
          type="password"
          name="senha"
          value={form.senha}
          onChange={handleForm}
          placeholder="Senha"
          disabled={!isAble}
        />
        <input
          type="password"
          name="confirmaSenha"
          value={form.confirmaSenha}
          onChange={handleForm}
          placeholder="Confirme sua senha"
          disabled={!isAble}
        />
        <button type="submit">
          {isAble ? (
            "Inscreva-se"
          ) : (
            <Oval
              height="20"
              width="80"
              color="white"
              secondaryColor="#AEA972"
              visible={true}
            />
          )}
        </button>
      </form>
    </div>
  </Wrapper>);
}

const Wrapper = styled.div`
  background-color: #ECF9FF;
  height: 100vh;

  .content {
    max-height: 100vh;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    form {
      max-width: 60%;
      width: 100%;
    }
    
    input {
      padding-left: 3%;
      margin: 10px 0;
      width: 97%;
      height: 58px;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      font-weight: 400;
      font-family: 'Mochiy Pop One', sans-serif;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input[type="number"] {
      -moz-appearance: textfield;
    }

    button {
      margin: 10px 0;
      width: 100%;
      height: 58px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      padding: 10px;
      border-radius: 5px;
      background-color: #0081B4;
      color: white;
      font-weight: 400;
      font-family: 'Mochiy Pop One', sans-serif;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
      font-size: 20px;
      -webkit-transition: -webkit-transform 0.2s;
      transition: -webkit-transform 0.2s;
      transition: transform 0.2s;
      transition: transform 0.2s, -webkit-transform 0.2s;
    }

    button:hover {
      -webkit-transform: scale(1, 1.1);
      transform: scale(1, 1.1);
      cursor: pointer;
    }

    select {
      padding: 0 3%;
      margin: 0 0 10px 6%;
      width: 86%;
      height: 58px;
      border: none;
      border-radius: 5px;
      font-size: 20px;
      background-color: white;
    }

    input::placeholder {
      color: #748DA6;
    }
  }
`;