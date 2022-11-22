import "./Header.css"
import Brand from "../../assets/brand.svg"

function Header() {
  return (
    <div className="Header">
      <a href="/">
        <img src={Brand} width={32} height={32} alt="Samsung Ocean Logo" />
      </a>

      <a href="/">Listar</a>

      <a href="/adicionar">Adicionar</a>
    </div>
  )
}

export default Header;
