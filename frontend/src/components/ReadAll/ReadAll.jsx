import ItemCard from "../ItemCard/ItemCard";
import "./ReadAll.css"

function ReadAll() {
  const itens = [
    {
      _id: "1234", 
      nome: "Item 1", 
      imagemUrl: "https://picsum.photos/201/201" 
    },
    { 
      _id: "9999", 
      nome: "Item 2", 
      imagemUrl: "https://picsum.photos/200/200" 
    }
  ];
  console.log(itens);

  return (
    <div className="ReadAll">
      {itens.map(function (item, index) {
        return <ItemCard key={`item-card-${index}`} item={item} />
      })}
    </div>
  )
}

export default ReadAll;
