import { useEffect, useRef, useState } from 'react';
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

type DropdownKey = 'generales' | 'perfil' | 'portfolio-i' | 'portfolio-ii' | 'portfolio-iii';

export default function Navbar({ currentPath }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => document.body.classList.remove('menu-open');
  }, [mobileOpen]);

  useEffect(() => { setMobileOpen(false); }, [currentPath]);
  useEffect(() => {
    setOpenDropdown(null);
  }, [currentPath]);
  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  const isActive = (path: string) =>
    currentPath === path || currentPath.startsWith(path + '/');

  const openMenu = (key: DropdownKey) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setOpenDropdown(key);
  };

  const closeMenuSoon = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setOpenDropdown(null), 180);
  };

  const closeMenuNow = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setOpenDropdown(null);
  };

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

        <nav aria-label="Navegación principal">
          <ul className="nav-links">
            <li>
              <a className={`nav-link ${isActive('/') ? 'active' : ''}`} href="/">Inicio</a>
            </li>
            <li
              className={`nav-item-drop ${openDropdown === 'generales' ? 'open' : ''}`}
              onMouseEnter={() => openMenu('generales')}
              onMouseLeave={closeMenuSoon}
            >
              <button
                type="button"
                className={`nav-link nav-link-button ${isActive('/generales') ? 'active' : ''}`}
                onFocus={() => openMenu('generales')}
                onClick={() => setOpenDropdown(openDropdown === 'generales' ? null : 'generales')}
                aria-expanded={openDropdown === 'generales'}
              >
                Generales <span className="nav-caret"><Icon name="chevron-down" size={12}/></span>
              </button>
              <div className="nav-dropdown">
                {ROUTES.generales.map(c => (
                  <a key={c.path} className="nav-dropdown-link" href={c.path} onClick={closeMenuNow}>
                    <Icon name={c.icon} size={16}/>{c.label}
                  </a>
                ))}
              </div>
            </li>
            <li>
              <a className={`nav-link ${isActive('/cosmovision') ? 'active' : ''}`} href="/cosmovision">Cosmovisión</a>
            </li>
            <li
              className={`nav-item-drop ${openDropdown === 'perfil' ? 'open' : ''}`}
              onMouseEnter={() => openMenu('perfil')}
              onMouseLeave={closeMenuSoon}
            >
              <button
                type="button"
                className={`nav-link nav-link-button ${isActive('/perfil-egreso') ? 'active' : ''}`}
                onFocus={() => openMenu('perfil')}
                onClick={() => setOpenDropdown(openDropdown === 'perfil' ? null : 'perfil')}
                aria-expanded={openDropdown === 'perfil'}
              >
                Perfil de Egreso <span className="nav-caret"><Icon name="chevron-down" size={12}/></span>
              </button>
              <div className="nav-dropdown">
                {ROUTES.perfil.map(c => (
                  <a key={c.path} className="nav-dropdown-link" href={c.path} onClick={closeMenuNow}>
                    <Icon name={c.icon} size={16}/>{c.label}
                  </a>
                ))}
              </div>
            </li>
            <li
              className={`nav-item-drop ${openDropdown === 'portfolio-i' ? 'open' : ''}`}
              onMouseEnter={() => openMenu('portfolio-i')}
              onMouseLeave={closeMenuSoon}
            >
              <button
                type="button"
                className={`nav-link nav-link-button ${isActive('/portafolio-i') ? 'active' : ''}`}
                onFocus={() => openMenu('portfolio-i')}
                onClick={() => setOpenDropdown(openDropdown === 'portfolio-i' ? null : 'portfolio-i')}
                aria-expanded={openDropdown === 'portfolio-i'}
              >
                Portafolio I <span className="nav-caret"><Icon name="chevron-down" size={12}/></span>
              </button>
              <div className="nav-dropdown">
                {ROUTES.portfolios.i.map(c => (
                  <a key={c.path} className="nav-dropdown-link" href={c.path} onClick={closeMenuNow}>
                    <Icon name={c.icon} size={16}/>{c.label}
                  </a>
                ))}
              </div>
            </li>
            <li
              className={`nav-item-drop ${openDropdown === 'portfolio-ii' ? 'open' : ''}`}
              onMouseEnter={() => openMenu('portfolio-ii')}
              onMouseLeave={closeMenuSoon}
            >
              <button
                type="button"
                className={`nav-link nav-link-button ${isActive('/portafolio-ii') ? 'active' : ''}`}
                onFocus={() => openMenu('portfolio-ii')}
                onClick={() => setOpenDropdown(openDropdown === 'portfolio-ii' ? null : 'portfolio-ii')}
                aria-expanded={openDropdown === 'portfolio-ii'}
              >
                Portafolio II <span className="nav-caret"><Icon name="chevron-down" size={12}/></span>
              </button>
              <div className="nav-dropdown">
                {ROUTES.portfolios.ii.map(c => (
                  <a key={c.path} className="nav-dropdown-link" href={c.path} onClick={closeMenuNow}>
                    <Icon name={c.icon} size={16}/>{c.label}
                  </a>
                ))}
              </div>
            </li>
            <li
              className={`nav-item-drop ${openDropdown === 'portfolio-iii' ? 'open' : ''}`}
              onMouseEnter={() => openMenu('portfolio-iii')}
              onMouseLeave={closeMenuSoon}
            >
              <button
                type="button"
                className={`nav-link nav-link-button ${isActive('/portafolio-iii') ? 'active' : ''}`}
                onFocus={() => openMenu('portfolio-iii')}
                onClick={() => setOpenDropdown(openDropdown === 'portfolio-iii' ? null : 'portfolio-iii')}
                aria-expanded={openDropdown === 'portfolio-iii'}
              >
                Portafolio III <span className="nav-caret"><Icon name="chevron-down" size={12}/></span>
              </button>
              <div className="nav-dropdown">
                {ROUTES.portfolios.iii.map(c => (
                  <a key={c.path} className="nav-dropdown-link" href={c.path} onClick={closeMenuNow}>
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

        <button
          className="hamburger"
          onClick={() => setMobileOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={mobileOpen}
        >
          <span></span>
        </button>
      </div>

      <div
        className={`mobile-overlay ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />
      <aside className={`mobile-panel ${mobileOpen ? 'open' : ''}`} aria-label="Menú móvil">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <div className="brand-name">Menú</div>
          <button
            className="btn btn-ghost btn-sm"
            onClick={() => setMobileOpen(false)}
            aria-label="Cerrar menú"
          >
            <Icon name="x" size={18}/>
          </button>
        </div>
        <a className={`mobile-link ${isActive('/') ? 'active' : ''}`} href="/" onClick={() => setMobileOpen(false)}>Inicio</a>
        <div className="mobile-section-title">Generales</div>
        {ROUTES.generales.map(c => (
          <a key={c.path} className="mobile-sub" href={c.path} onClick={() => setMobileOpen(false)}>{c.label}</a>
        ))}
        <a className={`mobile-link ${isActive('/cosmovision') ? 'active' : ''}`} href="/cosmovision" onClick={() => setMobileOpen(false)}>Cosmovisión</a>
        <div className="mobile-section-title">Perfil de Egreso</div>
        {ROUTES.perfil.map(c => (
          <a key={c.path} className="mobile-sub" href={c.path} onClick={() => setMobileOpen(false)}>{c.label}</a>
        ))}
        <div className="mobile-section-title">Portafolio I</div>
        {ROUTES.portfolios.i.map(c => (
          <a key={c.path} className="mobile-sub" href={c.path} onClick={() => setMobileOpen(false)}>{c.label}</a>
        ))}
        <div className="mobile-section-title">Portafolio II</div>
        {ROUTES.portfolios.ii.map(c => (
          <a key={c.path} className="mobile-sub" href={c.path} onClick={() => setMobileOpen(false)}>{c.label}</a>
        ))}
        <div className="mobile-section-title">Portafolio III</div>
        {ROUTES.portfolios.iii.map(c => (
          <a key={c.path} className="mobile-sub" href={c.path} onClick={() => setMobileOpen(false)}>{c.label}</a>
        ))}
        <a className={`mobile-link ${isActive('/repositorio') ? 'active' : ''}`} href="/repositorio" onClick={() => setMobileOpen(false)}>Repositorio</a>
        <a className={`mobile-link ${isActive('/linea-investigacion') ? 'active' : ''}`} href="/linea-investigacion" onClick={() => setMobileOpen(false)}>Línea de investigación</a>
        <a className={`mobile-link ${isActive('/portafolio-profesional') ? 'active' : ''}`} href="/portafolio-profesional" onClick={() => setMobileOpen(false)}>Portafolio profesional</a>
        <a className={`mobile-link ${isActive('/contacto') ? 'active' : ''}`} href="/contacto" onClick={() => setMobileOpen(false)}>Contacto</a>
      </aside>
    </header>
  );
}
