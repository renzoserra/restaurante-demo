import '../styles/Header.css';
import headerImg from '../../public/assets/header-bg.jpg';
import logo from '../../public/assets/logo.png';




export default function Header() {
  return (
    <header className="header">
      <img src={headerImg} alt="Fondo" className="background-img" />
      <img src={logo} alt="Logo restaurante" className="logo-bottom" />

      <div className="social-links">
        <a href="https://www.facebook.com/profile.php?id=61574581586995"
          className="btn-redes btn-facebook"
          target="_blank"
          rel="noreferrer">
          Facebook
        </a>
        <a href="https://www.instagram.com/pukakoi.cl/"
          className="btn-redes btn-instagram"
          target="_blank"
          rel="noreferrer">
          Instagram
        </a>
      </div>

      <div className="overlay">
        <h1 className="titulo">Bienvenido</h1>
        <p className="descripcion">
          La tradición milenaria de la cocina japonesa se encuentra con la intensidad y el alma de la gastronomía peruana.
        </p>
        <a href="#menu" className="btn-carta">Nuestra Carta</a> {/* <-- este es el nuevo botón */}
      </div>
    </header>
  );
}
