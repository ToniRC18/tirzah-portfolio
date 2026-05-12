import { useState } from "react";
import PreviewModal from "./PreviewModal";
import type { CategoriaCompetencia, Evidencia, TipoEvidencia } from "../data/repositorio";

const TIPOS: TipoEvidencia[] = ["PDF", "Imagen", "Texto", "Enlace"];
const COMPETENCIAS: CategoriaCompetencia[] = [
  "Cosmovisión",
  "Generación y Aplicación",
  "Integración",
  "Extracurricular",
];

const TIPO_ICONS: Record<TipoEvidencia, string> = {
  PDF: "📄",
  Imagen: "🖼️",
  Texto: "📝",
  Enlace: "🔗",
};

const TIPO_COLORS: Record<TipoEvidencia, string> = {
  PDF: "rgba(193, 120, 90, 0.15)",
  Imagen: "var(--color-lavender-light)",
  Texto: "var(--color-surface)",
  Enlace: "rgba(165, 147, 123, 0.15)",
};

const coverMediaStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
} as const;

type TipoFiltro = TipoEvidencia | "Todos";
type CompetenciaFiltro = CategoriaCompetencia | "Todas";

const TIPO_FILTROS: TipoFiltro[] = ["Todos", ...TIPOS];
const COMPETENCIA_FILTROS: CompetenciaFiltro[] = ["Todas", ...COMPETENCIAS];

export default function RepositorioGrid({ evidencias }: { evidencias: Evidencia[] }) {
  const [tipoFiltro, setTipoFiltro] = useState<TipoFiltro>("Todos");
  const [compFiltro, setCompFiltro] = useState<CompetenciaFiltro>("Todas");
  const [expandida, setExpandida] = useState<string | null>(null);

  const filtered = evidencias.filter((e) => {
    const matchTipo = tipoFiltro === "Todos" || e.tipo === tipoFiltro;
    const matchComp = compFiltro === "Todas" || e.competencia === compFiltro;
    return matchTipo && matchComp;
  });

  return (
    <div>
      <div className="repo-filters">
        <div className="repo-filter-group">
          <span className="repo-filter-label">Tipo</span>
          <div className="repo-filter-pills">
            {TIPO_FILTROS.map((t) => (
              <button
                key={t}
                type="button"
                className={`filter-pill ${tipoFiltro === t ? "active" : ""}`}
                onClick={() => setTipoFiltro(t)}
              >
                {t !== "Todos" && `${TIPO_ICONS[t]} `}
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="repo-filter-group">
          <span className="repo-filter-label">Competencia</span>
          <div className="repo-filter-pills">
            {COMPETENCIA_FILTROS.map((c) => (
              <button
                key={c}
                type="button"
                className={`filter-pill ${compFiltro === c ? "active" : ""}`}
                onClick={() => setCompFiltro(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="repo-count">
        {filtered.length} {filtered.length === 1 ? "evidencia" : "evidencias"}
        {tipoFiltro !== "Todos" || compFiltro !== "Todas" ? " encontradas" : " en total"}
      </p>

      {filtered.length === 0 ? (
        <div className="repo-empty">
          <p>No hay evidencias con estos filtros todavía.</p>
        </div>
      ) : (
        <div className="repo-grid">
          {filtered.map((ev) => (
            <div key={ev.id} className="repo-card">
              <PreviewModal
                titulo={ev.titulo}
                items={[ev.archivo && { tipo: ev.archivo.tipo, ruta: ev.archivo.ruta }].filter(Boolean)}
              >
                <div className="repo-card-cover" style={{ background: TIPO_COLORS[ev.tipo] }}>
                  {ev.archivo?.tipo === "imagen" ? (
                    <img src={ev.archivo.ruta} alt={ev.titulo} style={coverMediaStyle} />
                  ) : (
                    <span className="repo-tipo-icon">
                      {ev.archivo?.tipo === "pdf" ? "📄" : ev.archivo?.tipo === "video" ? "▶" : TIPO_ICONS[ev.tipo]}
                    </span>
                  )}
                  <span className="repo-tipo-badge">{ev.tipo}</span>
                </div>
              </PreviewModal>

              <div className="repo-card-body">
                <div className="repo-card-meta">
                  <span className="tag" style={{ fontSize: 11 }}>
                    {ev.competencia}
                  </span>
                  {ev.semestre && (
                    <span className="text-muted" style={{ fontSize: 12 }}>
                      {ev.semestre}
                    </span>
                  )}
                </div>
                <h3 className="repo-card-title">{ev.titulo}</h3>
                <p className="repo-card-desc">{ev.descripcion}</p>
                {ev.tipo === "Texto" && ev.contenido && (
                  <>
                    {expandida === ev.id && (
                      <div className="repo-texto-content">{ev.contenido}</div>
                    )}
                    <button
                      type="button"
                      className="repo-toggle-btn"
                      onClick={() => setExpandida(expandida === ev.id ? null : ev.id)}
                    >
                      {expandida === ev.id ? "Leer menos ↑" : "Leer más ↓"}
                    </button>
                  </>
                )}

                <div className="repo-card-foot">
                  {ev.tipo === "Enlace" && ev.url && (
                    <a
                      href={ev.url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      Abrir enlace →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
