import { useState } from 'react';
import Icon from './Icon';
import Reveal from './Reveal';

interface Work {
  title: string;
  subj: string;
  cat: string;
  grade: string;
  desc: string;
}

interface PortfolioData {
  semester: string;
  period: string;
  desc: string;
  works: Work[];
}

interface Props {
  data: PortfolioData;
  which: 'i' | 'ii' | 'iii';
}

const CATEGORIES = ["Todos", "Ensayo", "Estudio de caso", "Bitácora", "Investigación", "Reseña", "Protocolo", "Trabajo gráfico", "Reporte técnico"];

const gradients = [
  "linear-gradient(135deg, var(--color-lavender-light), var(--color-tan))",
  "linear-gradient(135deg, var(--color-tan), var(--color-surface))",
  "linear-gradient(135deg, var(--color-lavender), var(--color-lavender-light))",
];

export default function PortfolioGrid({ data, which }: Props) {
  const [filter, setFilter] = useState("Todos");

  const filtered = filter === "Todos" ? data.works : data.works.filter(w => w.cat === filter);

  const counts = CATEGORIES.reduce((acc: Record<string, number>, cat) => {
    acc[cat] = cat === "Todos" ? data.works.length : data.works.filter(w => w.cat === cat).length;
    return acc;
  }, {});

  const totalGraded = data.works.filter(w => w.grade !== "—");
  const avg = totalGraded.length
    ? (totalGraded.reduce((a, w) => a + parseFloat(w.grade), 0) / totalGraded.length).toFixed(1)
    : "—";

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
            <div className="lbl">Promedio</div>
            <div className="val">{avg}</div>
          </div>
        </div>
      </Reveal>

      <div className="filter-tabs">
        {CATEGORIES.filter(c => counts[c] > 0).map(cat => (
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
              <div className="work-cover">
                <div className="placeholder-photo" style={{
                  width:'100%', height:'100%',
                  background: gradients[i % 3],
                  fontSize:13,
                }}>
                  {/* TODO: reemplazar con <Image> real */}
                  {w.cat}
                </div>
                <span className="work-type">{w.cat}</span>
              </div>
              <div className="work-body">
                <div className="work-meta">
                  <span>{w.subj}</span>
                  <span className="sep">·</span>
                  <span>{data.period.split("·")[0].trim()}</span>
                </div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
                <div className="work-foot">
                  <span className="work-link">Ver trabajo <Icon name="arrow-right" size={14}/></span>
                  {w.grade !== "—" && <span className="work-grade">{w.grade}</span>}
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
