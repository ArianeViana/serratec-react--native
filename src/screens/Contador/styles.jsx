import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const FundoTela = styled.View`
  border: 1px solid black;
  border-radius: 10px;
  height: 400px;
  width: 300px;
  background-color: #ffe4e1;
  justify-content: center;
`;

export const Texto = styled.Text`
  font-size: 30px;
  font-style: italic;
  text-decoration: underline;
  margin-bottom: 50px;
  align-self: center;
`;

export const Numero = styled.Text`
  font-size: 35px;
  margin-bottom: 30px;
  align-self: center;
`;

export const PosicaoBotao = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const Botao = styled.Pressable`
  background-color: #fa8072;
  padding: 5px;
  margin: 10px; 
  border-radius: 5px;
`;
