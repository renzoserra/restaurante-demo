import '../styles/Footer.css'
import logo from '../../public/assets/logo.webp';

export default function Footer() {
  return (
    <footer className="footer">
      {/* Sección superior con tres columnas */}
      <div className="footer-top">
      <div className="footer-col">
  <h4>Dirección:</h4>
  <p>
    <a
      href="https://www.google.com/maps?q=Calle+Manuel+Rodríguez+511,+Los+Andes"
      target="_blank"
      rel="noopener noreferrer"
      className="footer-link"
    >
      Calle Manuel Rodríguez #511, Los Andes
    </a>
  </p>
  <div className="map-container">
    <iframe
      title="Ubicación del restaurante"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.9949140287215!2d-70.60697582445654!3d-32.83864097298895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96891f0104105d5d%3A0x11859a8f442558c2!2sManuel%20Rodr%C3%ADguez%20511%2C%20Los%20Andes%2C%20Valpara%C3%ADso!5e0!3m2!1ses!2scl!4v1711848300782!5m2!1ses!2scl"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    ></iframe>
  </div>
</div>


        <div className="footer-col">
          <h4>Horario:</h4>
          <p>Lunes a Sábado: 12:30 HRS – 23:00 HRS</p>
          <p>Domingo: 12:30 HRS – 17:00 HRS</p>
        </div>
        <div className="footer-col">
          <h4>Contáctanos</h4>
          <p>(34) 2 xxxx xxxx</p>
        </div>
      </div>

      {/* Sección inferior con logo y redes */}
      <div className="footer-bottom">
        <img src={logo} alt="Logo" className="footer-logo" />
        <p className="footer-copy">
          © Todos los derechos reservados. Diseñado por Renzo Serra.
        </p>
        <div className="footer-socials">
          <a href="https://www.facebook.com/profile.php?id=61574581586995">Facebook</a> · <a href="https://www.instagram.com/pukakoi.cl/">Instagram</a>
        </div>
      </div>
    </footer>
  )
}
