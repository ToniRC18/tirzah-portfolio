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
  portfolios: {
    i: [
      { label: "Académico-profesional", path: "/portafolio-i", icon: "file-text" },
      { label: "Eclesiástico", path: "/portafolio-i/eclesiastico", icon: "compass" },
      { label: "Artístico", path: "/portafolio-i/artistico", icon: "id-card" },
      { label: "Personal", path: "/portafolio-i/personal", icon: "users" },
      { label: "Tabla de competencias", path: "/portafolio-i/competencias", icon: "bar-chart" },
    ],
    ii: [
      { label: "Académico-profesional", path: "/portafolio-ii", icon: "file-text" },
      { label: "Eclesiástico", path: "/portafolio-ii/eclesiastico", icon: "compass" },
      { label: "Artístico", path: "/portafolio-ii/artistico", icon: "id-card" },
      { label: "Personal", path: "/portafolio-ii/personal", icon: "users" },
      { label: "Tabla de competencias", path: "/portafolio-ii/competencias", icon: "bar-chart" },
    ],
    iii: [
      { label: "Académico-profesional", path: "/portafolio-iii", icon: "file-text" },
      { label: "Eclesiástico", path: "/portafolio-iii/eclesiastico", icon: "compass" },
      { label: "Artístico", path: "/portafolio-iii/artistico", icon: "id-card" },
      { label: "Personal", path: "/portafolio-iii/personal", icon: "users" },
      { label: "Tabla de competencias", path: "/portafolio-iii/competencias", icon: "bar-chart" },
    ],
  },
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
            <span className="brand-sub">Portafolio de aprendizaje</span>
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
            <li className="nav-item-drop">
              <a className={`nav-link ${isActive('/portafolio-i') ? 'active' : ''}`}>
                Portafolio I <span className="nav-caret"><Icon name="chevron-down" size={12}/></span>
              </a>
              <div className="nav-dropdown">
                {ROUTES.portfolios.i.map(c => (
                  <a key={c.path} className="nav-dropdown-link" href={c.path}>
                    <Icon name={c.icon} size={16}/>{c.label}
                  </a>
                ))}
              </div>
            </li>
            <li className="nav-item-drop">
              <a className={`nav-link ${isActive('/portafolio-ii') ? 'active' : ''}`}>
                Portafolio II <span className="nav-caret"><Icon name="chevron-down" size={12}/></span>
              </a>
              <div className="nav-dropdown">
                {ROUTES.portfolios.ii.map(c => (
                  <a key={c.path} className="nav-dropdown-link" href={c.path}>
                    <Icon name={c.icon} size={16}/>{c.label}
                  </a>
                ))}
              </div>
            </li>
            <li className="nav-item-drop">
              <a className={`nav-link ${isActive('/portafolio-iii') ? 'active' : ''}`}>
                Portafolio III <span className="nav-caret"><Icon name="chevron-down" size={12}/></span>
              </a>
              <div className="nav-dropdown">
                {ROUTES.portfolios.iii.map(c => (
                  <a key={c.path} className="nav-dropdown-link" href={c.path}>
                    <Icon name={c.icon} size={16}/>{c.label}
                  </a>
                ))}
              </div>
            </li>
            <li><a className={`nav-link ${isActive('/repositorio') ? 'active' : ''}`} href="/repositorio">Repositorio</a></li>
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
        <div className="mobile-section-title">Portafolio I</div>
        {ROUTES.portfolios.i.map(c => (
          <a key={c.path} className="mobile-sub" href={c.path}>{c.label}</a>
        ))}
        <div className="mobile-section-title">Portafolio II</div>
        {ROUTES.portfolios.ii.map(c => (
          <a key={c.path} className="mobile-sub" href={c.path}>{c.label}</a>
        ))}
        <div className="mobile-section-title">Portafolio III</div>
        {ROUTES.portfolios.iii.map(c => (
          <a key={c.path} className="mobile-sub" href={c.path}>{c.label}</a>
        ))}
        <a className={`mobile-link ${isActive('/repositorio') ? 'active' : ''}`} href="/repositorio">Repositorio</a>
        <a className={`mobile-link ${isActive('/linea-investigacion') ? 'active' : ''}`} href="/linea-investigacion">Línea de investigación</a>
        <a className={`mobile-link ${isActive('/portafolio-profesional') ? 'active' : ''}`} href="/portafolio-profesional">Portafolio profesional</a>
        <a className={`mobile-link ${isActive('/contacto') ? 'active' : ''}`} href="/contacto">Contacto</a>
      </aside>
    </header>
  );
}
