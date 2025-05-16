import '../styles/HeaderMenu.css';
import logo from '../../public/assets/logoClear.webp';

export default function HeaderMenu() {
  return (
    <header className="header-menu">
      {/* IZQUIERDA: Dirección */}
      <div className="header-left">
        <p>
          <i className="fas fa-map-marker-alt"></i> Manuel Rodríguez 511, Los Andes
        </p>
      </div>

      {/* CENTRO: Logo + nombre */}
      <div className="header-center">
        <img src={logo} alt="Logo Puka Koi" />
        <h1>PUKA KOI</h1>
      </div>

      {/* DERECHA: Redes sociales */}
      <div className="header-right">
        <p>Nuestros canales de contacto</p>
        <div className="social-icons">
          <a
            href="https://www.instagram.com/pukakoi.cl/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61574581586995"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook fa-2x"></i>
          </a>
        </div>
      </div>
    </header>
  );
}
