import './Footer.css'

function Footer() {
  const ano = new Date().getFullYear();

  return <div className="Footer">Todos os direitos reservados ~ {ano}.</div>;
}

export default Footer;
