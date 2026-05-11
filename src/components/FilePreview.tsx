import { useState } from "react";

interface FilePreviewProps {
  nombre: string;
  tipo: "imagen" | "pdf";
  ruta: string;
}

export default function FilePreview({ nombre, tipo, ruta }: FilePreviewProps) {
  const [abierto, setAbierto] = useState(false);
  const existe = !ruta.includes("PENDIENTE");

  if (!existe) {
    return (
      <div className="file-preview-placeholder">
        <span className="file-placeholder-icon">📎</span>
        <div>
          <div className="file-placeholder-nombre">{nombre}</div>
          <div className="file-placeholder-hint">Archivo pendiente de subir</div>
        </div>
      </div>
    );
  }

  return (
    <div className="file-preview-wrap">
      <button
        type="button"
        className={`file-preview-toggle ${abierto ? "open" : ""}`}
        onClick={() => setAbierto(!abierto)}
      >
        <span className="file-toggle-icon">{tipo === "pdf" ? "📄" : "🖼️"}</span>
        <span className="file-toggle-nombre">{nombre}</span>
        <span className="file-toggle-arrow">{abierto ? "▲" : "▼"}</span>
      </button>

      {abierto && (
        <div className="file-preview-content">
          {tipo === "imagen" ? (
            <img
              src={ruta}
              alt={nombre}
              className="file-preview-img"
              loading="lazy"
            />
          ) : (
            <iframe
              src={`${ruta}#toolbar=0&navpanes=0`}
              className="file-preview-pdf"
              title={nombre}
            />
          )}
          <a
            href={ruta}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost btn-sm file-preview-link"
          >
            Abrir en pestaña nueva →
          </a>
        </div>
      )}
    </div>
  );
}
