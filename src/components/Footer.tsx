import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="brand" style={{cursor:'default', marginBottom:16}}>
            <div className="brand-mark">T</div>
            <div>
              <div className="brand-name">Tirzah S. Kook</div>
              <span className="brand-sub">Psicología Clínica · UM</span>
            </div>
          </div>
          <p style={{fontSize:14, color:'var(--color-charcoal)', maxWidth:320}}>
            Portafolio de aprendizaje que documenta mi proceso formativo en la Universidad de Montemorelos.
          </p>
        </div>
        <div>
          <h5>Navegación</h5>
          <div className="footer-links">
            <a href="/">Inicio</a>
            <a href="/cosmovision">Cosmovisión</a>
            <a href="/perfil-egreso">Perfil de Egreso</a>
            <a href="/repositorio">Repositorio</a>
            <a href="/linea-investigacion">Investigación</a>
            <a href="/contacto">Contacto</a>
          </div>
        </div>
        <div>
          <h5>Contacto</h5>
          <div className="footer-links">
            <a href="mailto:tirzahkook0126@gmail.com">
              <Icon name="mail" size={14} style={{display:'inline-block', verticalAlign:'-2px', marginRight:6}}/>
              tirzahkook0126@gmail.com
            </a>
            <a href="https://instagram.com/__txr.zxh__" target="_blank" rel="noreferrer">
              <Icon name="instagram" size={14} style={{display:'inline-block', verticalAlign:'-2px', marginRight:6}}/>
              @__txr.zxh__
            </a>
            <span>
              <Icon name="map-pin" size={14} style={{display:'inline-block', verticalAlign:'-2px', marginRight:6}}/>
              Montemorelos, NL
            </span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Tirzah S. Kook · Universidad de Montemorelos</span>
        <span className="serif-italic">Hecho con dedicación en Montemorelos</span>
      </div>
    </footer>
  );
}
