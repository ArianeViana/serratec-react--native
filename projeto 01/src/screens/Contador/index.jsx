import { useState } from "react";
import { Text } from "react-native";
import  * as style from "./styles";

const Contador = () => {
  const [numero, setNumero] = useState(0)

  const alterarNumero = () => {
    setNumero(numero + 1)
  }

  const zerarContador = () => {
    setNumero(0)
  }

  return (
    <style.Container>
      <style.FundoTela>
        <style.Texto>Contador</style.Texto>
        <style.Numero>{numero}</style.Numero>
        <style.PosicaoBotao>
          <style.Botao onPress={alterarNumero}><Text style={{fontSize: 20}}>Aumentar</Text></style.Botao>
          <style.Botao onPress={zerarContador}><Text style={{fontSize: 20}}>Zerar</Text></style.Botao>
        </style.PosicaoBotao>
      </style.FundoTela>
    </style.Container>
  )
}

export default Contador
