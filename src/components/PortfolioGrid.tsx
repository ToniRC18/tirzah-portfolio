import { useState } from 'react';
import type { ArchivoRef } from '../data/portafolios';
import type { ArchivoItem } from '../data/repositorio';
import Icon from './Icon';
import PreviewModal from './PreviewModal';
import Reveal from './Reveal';

interface Work {
  title: string;
  subj: string;
  cat: string;
  grade?: string;
  periodo?: string;
  desc: string;
  competencias?: string[];
  reflexion?: string;
  archivo?: ArchivoRef;
  archivo2?: ArchivoRef;
  archivo3?: ArchivoRef;
}

interface PortfolioData {
  semester: string;
  period: string;
  desc: string;
  finalReflection?: string;
  works: Work[];
}

interface Props {
  data: PortfolioData;
  which: 'i' | 'ii' | 'iii';
}

const gradients = [
  "linear-gradient(135deg, var(--color-lavender-light), var(--color-tan))",
  "linear-gradient(135deg, var(--color-tan), var(--color-surface))",
  "linear-gradient(135deg, var(--color-lavender), var(--color-lavender-light))",
];

const coverMediaStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
} as const;

export default function PortfolioGrid({ data, which }: Props) {
  const [filter, setFilter] = useState("Todos");

  const categories = ["Todos", ...Array.from(new Set(data.works.map(w => w.cat)))];
  const filtered = filter === "Todos" ? data.works : data.works.filter(w => w.cat === filter);

  const counts = categories.reduce((acc: Record<string, number>, cat) => {
    acc[cat] = cat === "Todos" ? data.works.length : data.works.filter(w => w.cat === cat).length;
    return acc;
  }, {});

  return (
    <>
      <Reveal>
        <div className="portfolio-summary">
          <div>
            <div className="lbl">Periodo</div>
            <div className="val" style={{fontSize:18}}>{data.period}</div>
          </div>
          <div>
            <div className="lbl">Trabajos</div>
            <div className="val">{data.works.length}</div>
          </div>
          <div>
            <div className="lbl">Materias</div>
            <div className="val">{new Set(data.works.map(w => w.subj)).size}</div>
          </div>
          <div>
            <div className="lbl">Categorías</div>
            <div className="val">{categories.length - 1}</div>
          </div>
        </div>
      </Reveal>

      <div className="filter-tabs">
        {categories.filter(c => counts[c] > 0).map(cat => (
          <button
            key={cat}
            className={`filter-tab ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}>
            {cat}
            <span className="count">{counts[cat]}</span>
          </button>
        ))}
      </div>

      <div className="work-grid">
        {filtered.map((w, i) => (
          <Reveal key={w.title} delay={i * 60}>
            <article className="work-card">
              <PreviewModal
                titulo={w.title}
                archivos={[
                  w.archivo ? { tipo: w.archivo.tipo, ruta: w.archivo.ruta } : undefined,
                  w.archivo2 ? { tipo: w.archivo2.tipo, ruta: w.archivo2.ruta } : undefined,
                  w.archivo3 ? { tipo: w.archivo3.tipo, ruta: w.archivo3.ruta } : undefined,
                ].filter((x): x is ArchivoItem => x !== undefined)}
              >
                <div className="placeholder-photo" style={{
                  width:'100%', height:'100%',
                  background: gradients[i % 3],
                  fontSize:13,
                }}>
                  {w.archivo?.tipo === "imagen" ? (
                    <img src={w.archivo.ruta} alt={w.title} style={coverMediaStyle} />
                  ) : w.archivo?.tipo === "pdf" ? (
                    <span style={{ fontSize: 40 }}>📄</span>
                  ) : w.archivo?.tipo === "video" ? (
                    <span style={{ fontSize: 40 }}>▶</span>
                  ) : (
                    <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 13 }}>
                      {w.cat}
                    </span>
                  )}
                </div>
                <span className="work-type">{w.cat}</span>
              </PreviewModal>
              <div className="work-body">
                <div className="work-meta">
                  <span>{w.subj}</span>
                  <span className="sep">·</span>
                  <span>{w.periodo || data.period}</span>
                </div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
                {w.competencias && (
                  <div style={{marginTop:16}}>
                    <div className="eyebrow" style={{fontSize:10, marginBottom:8}}>Competencias</div>
                    <ul className="cv-bullets" style={{margin:0}}>
                      {w.competencias.map((competencia) => (
                        <li key={competencia}>{competencia}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {w.reflexion && (
                  <div style={{marginTop:16, paddingTop:14, borderTop:'1px solid rgba(165,147,123,0.16)'}}>
                    <div className="eyebrow" style={{fontSize:10, marginBottom:8}}>Reflexión</div>
                    <p style={{fontSize:13, margin:0}}>{w.reflexion}</p>
                  </div>
                )}
                <div className="work-foot">
                  <span className="work-link">Ver trabajo <Icon name="arrow-right" size={14}/></span>
                  {w.grade && w.grade !== "—" && <span className="work-grade">{w.grade}</span>}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{padding:64, textAlign:'center', color:'var(--color-taupe)', fontStyle:'italic', fontFamily:'var(--font-serif)'}}>
          No hay trabajos en esta categoría todavía.
        </div>
      )}

      {data.finalReflection && (
        <Reveal>
          <div className="declaration" style={{marginTop:64, padding:'56px 40px'}}>
            <span className="eyebrow" style={{display:'block', marginBottom:12}}>Reflexión final</span>
            <p className="declaration-quote" style={{fontSize:'clamp(22px, 3vw, 34px)'}}>
              «{data.finalReflection}»
            </p>
            <div className="declaration-attr">— Tirzah S. Kook</div>
          </div>
        </Reveal>
      )}

      <Reveal>
        <div style={{marginTop:64, display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:16}}>
          {which !== 'i' && (
            <a className="btn btn-ghost" href={`/portafolio-${which === 'ii' ? 'i' : 'ii'}`}>
              ← Portafolio {which === 'ii' ? 'I' : 'II'}
            </a>
          )}
          <div style={{flex:1}}/>
          {which !== 'iii' && (
            <a className="btn btn-secondary" href={`/portafolio-${which === 'i' ? 'ii' : 'iii'}`}>
              Portafolio {which === 'i' ? 'II' : 'III'} <Icon name="arrow-right" size={14}/>
            </a>
          )}
        </div>
      </Reveal>
    </>
  );
}
