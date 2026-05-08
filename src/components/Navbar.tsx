import { useState, useEffect } from 'react';
import Icon from './Icon';

const ROUTES = {
  generales: [
    { label: "Autobiografía", path: "/generales/autobiografia", icon: "users" },
    { label: "Curriculum Vitae", path: "/generales/cv", icon: "file-text" },
    { label: "Tarjeta de presentación", path: "/generales/tarjeta", icon: "id-card" },
    { label: "Declaración de afirmación", path: "/generales/declaracion", icon: "quote" },
    { label: "Datos actuales UM", path: "/generales/datos", icon: "bar-chart" },
  ],
  perfil: [
    { label: "Vista general", path: "/perfil-egreso", icon: "target" },
    { label: "Cosmovisión", path: "/perfil-egreso/cosmovision", icon: "compass" },
    { label: "Generación y Aplicación", path: "/perfil-egreso/generacion", icon: "lightbulb" },
    { label: "Integración", path: "/perfil-egreso/integracion", icon: "puzzle" },
  ],
};

interface NavbarProps {
  currentPath: string;
}

export default function Navbar({ currentPath }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => { setMobileOpen(false); }, [currentPath]);

  const isActive = (path: string) =>
    currentPath === path || currentPath.startsWith(path + '/');

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="/" className="brand">
          <div className="brand-mark">T</div>
          <div>
            <div className="brand-name">Tirzah S. Kook</div>
            <span className="brand-sub">Portafolio académico</span>
          </div>
        </a>

        <nav>
          <ul className="nav-links">
            <li>
              <a className={`nav-link ${isActive('/') ? 'active' : ''}`} href="/">Inicio</a>
            </li>
            <li className="nav-item-drop">
              <a className={`nav-link ${isActive('/generales') ? 'active' : ''}`}>
                Generales <span className="nav-caret"><Icon name="chevron-down" size={12}/></span>
              </a>
              <div className="nav-dropdown">
                {ROUTES.generales.map(c => (
                  <a key={c.path} className="nav-dropdown-link" href={c.path}>
                    <Icon name={c.icon} size={16}/>{c.label}
                  </a>
                ))}
              </div>
            </li>
            <li>
              <a className={`nav-link ${isActive('/cosmovision') ? 'active' : ''}`} href="/cosmovision">Cosmovisión</a>
            </li>
            <li className="nav-item-drop">
              <a className={`nav-link ${isActive('/perfil-egreso') ? 'active' : ''}`}>
                Perfil de Egreso <span className="nav-caret"><Icon name="chevron-down" size={12}/></span>
              </a>
              <div className="nav-dropdown">
                {ROUTES.perfil.map(c => (
                  <a key={c.path} className="nav-dropdown-link" href={c.path}>
                    <Icon name={c.icon} size={16}/>{c.label}
                  </a>
                ))}
              </div>
            </li>
            <li><a className={`nav-link ${isActive('/portafolio-i') ? 'active' : ''}`} href="/portafolio-i">Portafolio I</a></li>
            <li><a className={`nav-link ${isActive('/portafolio-ii') ? 'active' : ''}`} href="/portafolio-ii">Portafolio II</a></li>
            <li><a className={`nav-link ${isActive('/portafolio-iii') ? 'active' : ''}`} href="/portafolio-iii">Portafolio III</a></li>
            <li><a className={`nav-link ${isActive('/linea-investigacion') ? 'active' : ''}`} href="/linea-investigacion">Investigación</a></li>
            <li><a className={`nav-link ${isActive('/portafolio-profesional') ? 'active' : ''}`} href="/portafolio-profesional">Profesional</a></li>
            <li><a className={`nav-link ${isActive('/contacto') ? 'active' : ''}`} href="/contacto">Contacto</a></li>
          </ul>
        </nav>

        <button className="hamburger" onClick={() => setMobileOpen(true)} aria-label="Abrir menú">
          <span></span>
        </button>
      </div>

      <div className={`mobile-overlay ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(false)}/>
      <aside className={`mobile-panel ${mobileOpen ? 'open' : ''}`}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16}}>
          <div className="brand-name">Menú</div>
          <button className="btn btn-ghost btn-sm" onClick={() => setMobileOpen(false)} aria-label="Cerrar">
            <Icon name="x" size={18}/>
          </button>
        </div>
        <a className={`mobile-link ${isActive('/') ? 'active' : ''}`} href="/">Inicio</a>
        <div className="mobile-section-title">Generales</div>
        {ROUTES.generales.map(c => (
          <a key={c.path} className="mobile-sub" href={c.path}>{c.label}</a>
        ))}
        <a className={`mobile-link ${isActive('/cosmovision') ? 'active' : ''}`} href="/cosmovision">Cosmovisión</a>
        <div className="mobile-section-title">Perfil de Egreso</div>
        {ROUTES.perfil.map(c => (
          <a key={c.path} className="mobile-sub" href={c.path}>{c.label}</a>
        ))}
        <a className={`mobile-link ${isActive('/portafolio-i') ? 'active' : ''}`} href="/portafolio-i">Portafolio I</a>
        <a className={`mobile-link ${isActive('/portafolio-ii') ? 'active' : ''}`} href="/portafolio-ii">Portafolio II</a>
        <a className={`mobile-link ${isActive('/portafolio-iii') ? 'active' : ''}`} href="/portafolio-iii">Portafolio III</a>
        <a className={`mobile-link ${isActive('/linea-investigacion') ? 'active' : ''}`} href="/linea-investigacion">Línea de investigación</a>
        <a className={`mobile-link ${isActive('/portafolio-profesional') ? 'active' : ''}`} href="/portafolio-profesional">Portafolio profesional</a>
        <a className={`mobile-link ${isActive('/contacto') ? 'active' : ''}`} href="/contacto">Contacto</a>
      </aside>
    </header>
  );
}
