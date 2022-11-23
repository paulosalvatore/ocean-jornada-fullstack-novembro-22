import "./ItemCard.css"

// Exercício para amanhã: estilização do ItemCard

function ItemCard(props) {
  const item = props.item;

  return (
    <div className="ItemCard">
      <h1>{item.nome}</h1>
      <img src={item.imagemUrl} alt={"Imagem do " + item.nome} />
    </div>
  )
}

export default ItemCard;
