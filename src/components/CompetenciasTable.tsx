interface Competencia {
  texto: string;
  porcentaje: number;
}

interface CompetenciasTableProps {
  titulo: string;
  competencias: Competencia[];
}

export default function CompetenciasTable({ titulo, competencias }: CompetenciasTableProps) {
  return (
    <div className="comp-table-wrap" aria-label={titulo}>
      <table className="comp-table">
        <thead>
          <tr>
            <th className="comp-th-competencia">Competencias</th>
            <th className="comp-th-porcentaje">Porcentaje</th>
          </tr>
        </thead>
        <tbody>
          {competencias.map((c, i) => (
            <tr key={i} className="comp-row">
              <td className="comp-td-texto">
                <span className="comp-bullet">•</span>
                {c.texto}
              </td>
              <td className="comp-td-pct">
                <div className="comp-pct-wrap">
                  <div className="comp-bar-track">
                    <div
                      className="comp-bar-fill"
                      style={{ width: `${c.porcentaje}%` }}
                    />
                  </div>
                  <span className="comp-pct-num">{c.porcentaje}%</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
