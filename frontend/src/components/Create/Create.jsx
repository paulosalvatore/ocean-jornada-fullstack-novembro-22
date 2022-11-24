import { useNavigate } from "react-router-dom";
import { Api } from "../../api/api";
import "./Create.css"

function Create() {
  const navigate = useNavigate();

  async function processarSubmit(event) {
    event.preventDefault();

    const nome = event.target.nome.value;
    const imagemUrl = event.target.imagemUrl.value;

    const payload = {
      nome,
      imagemUrl
    };

    const createUrl = Api.itens.create();
    const response = await Api.buildApiPostRequest(createUrl, payload);
    const body = await response.json();

    if (response.status === 200) {
      alert(body.message);
      navigate("/");
    } else {
      alert("Algum erro ocorreu, tente novamente.");
    }
  }

  return (
    <div className="Create">
      <form onSubmit={processarSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" />
        </div>

        <div>
          <label htmlFor="imagemUrl">URL da Imagem:</label>
          <input type="text" id="imagemUrl" />
        </div>

        <div>
          <input type="submit" value="Adicionar" />
        </div>
      </form>
    </div>
  )
}

export default Create;
