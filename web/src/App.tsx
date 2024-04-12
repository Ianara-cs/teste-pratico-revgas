import axios from "axios";
import "./App.css";
import { useState } from "react";

interface Banco {
  codigo_compensacao: number;
  nome: string;
}

function App() {
  const [bancos, setBancos] = useState<Banco[]>([]);
  const [codigoCompensacao, setCodigoCompensacao] = useState("");
  const [error, setError] = useState<string>('');

  const listarBancos = () => {
    axios
      .get("http://localhost:5000/bancos")
      .then((response) => {
        setBancos(response.data);
        setError('');
        setCodigoCompensacao('');
      })
      .catch((error) => {
        console.error(error);
        setError('Erro ao listar bancos');
      });
  };

  const consultarBanco = () => {
    axios
      .get(`http://localhost:5000/bancos/${codigoCompensacao}`)
      .then((response) => {
        setBancos([response.data]);
        setError('');
      })
      .catch((error) => {
        console.error(error);
        setError('Banco não encontrado');
        setBancos([]);

      });
  };

  return (
    <div>
      <h1>Consulta de Bancos</h1>
      {error && <p>{error}</p>}
      <div className="content">
        <div className="inputContainer">
          <input className="input"
            type="text"
            value={codigoCompensacao}
            onChange={(e) => setCodigoCompensacao(e.target.value)}
            placeholder="Código de Compensação"
          />
        </div>
        <button onClick={consultarBanco}>Consultar Banco</button>
        <button onClick={listarBancos}>Listar Bancos</button>
      </div>
      <div>
        {bancos.map((banco: Banco) => (
          <div className="card" key={banco.codigo_compensacao}>
            <p>Código de Compensação: {banco.codigo_compensacao}</p>
            <p>Nome: {banco.nome}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
