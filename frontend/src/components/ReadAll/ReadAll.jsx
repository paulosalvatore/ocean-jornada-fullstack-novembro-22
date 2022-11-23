import ItemCard from "../ItemCard/ItemCard";
import "./ReadAll.css"

function ReadAll() {
  return (
    <div className="ReadAll">
      <ItemCard item={{ 
        _id: "1234", 
        nome: "Item 1", 
        imagemUrl: "https://picsum.photos/201/201" 
      }} />
      <ItemCard item={{ 
        _id: "9999", 
        nome: "Item 2", 
        imagemUrl: "https://picsum.photos/200/200" 
      }} />
    </div>
  )
}

export default ReadAll;
