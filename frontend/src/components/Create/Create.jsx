import { Api } from "../../api/api";
import "./Create.css"

function Create() {
  async function processarSubmit(event) {
    event.preventDefault();

    const nome = event.target.nome.value;
    const imagemUrl = event.target.imagemUrl.value;

    const payload = {
      nome,
      imagemUrl
    };

    console.log(payload);

    const createUrl = Api.itens.create();
    const response = await Api.buildApiPostRequest(createUrl, payload);
    const body = await response.json();

    console.log(body);
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
