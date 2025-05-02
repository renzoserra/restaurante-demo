import '../styles/Header.css';

import iconFB from '../../public/assets/icon-fb.webp';
import iconIG from '../../public/assets//icon-ig.webp';
import logo from '../../public/assets/logo.webp';




export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo restaurante" className="logo-top-left" />

      <div className="social-icons">
      <a href="https://www.facebook.com/profile.php?id=61574581586995" target="_blank" rel="noreferrer">
    <img src={iconFB} alt="Facebook" className="icono-red" />
  </a>
  <a href="https://www.instagram.com/pukakoi.cl/" target="_blank" rel="noreferrer">
    <img src={iconIG} alt="Instagram" className="icono-red" />
  </a>
      </div>

      <div className="overlay">
        <h1 className="titulo">Bienvenido</h1>
        <p className="descripcion">
          La tradición milenaria de la cocina japonesa se encuentra con la intensidad y el alma de la gastronomía peruana.
        </p>
        <a href="#menu" className="btn-carta">CARTA</a> {/* <-- este es el nuevo botón */}
      </div>
    </header>
  );
}
