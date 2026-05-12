import { useState } from "react";

type TipoArchivo = "imagen" | "pdf" | "video";

interface ArchivoProps {
  nombre: string;
  tipo: TipoArchivo;
  ruta: string;
}

interface FilePreviewProps {
  nombre: string;
  archivo: ArchivoProps;
  archivo2?: ArchivoProps;
}

function getVideoMime(ruta: string) {
  return ruta.toLowerCase().endsWith(".mov") ? "video/quicktime" : "video/mp4";
}

function getArchivoLabel(archivo: ArchivoProps, fallbackNombre: string) {
  return archivo.nombre || fallbackNombre;
}

function getArchivoIcon(tipo: TipoArchivo) {
  if (tipo === "pdf") return "📄";
  if (tipo === "video") return "🎬";
  return "🖼️";
}

function PreviewBody({
  nombre,
  archivo,
}: {
  nombre: string;
  archivo: ArchivoProps;
}) {
  if (archivo.tipo === "imagen") {
    return (
      <img
        src={archivo.ruta}
        alt={nombre}
        className="file-preview-img"
        loading="lazy"
      />
    );
  }

  if (archivo.tipo === "video") {
    return (
      <video controls preload="metadata" className="file-preview-video">
        <source src={archivo.ruta} type={getVideoMime(archivo.ruta)} />
        Tu navegador no soporta video.
      </video>
    );
  }

  return (
    <iframe
      src={`${archivo.ruta}#toolbar=0&navpanes=0`}
      className="file-preview-pdf"
      title={nombre}
    />
  );
}

export default function FilePreview({ nombre, archivo, archivo2 }: FilePreviewProps) {
  const [abierto, setAbierto] = useState(false);
  const existe = !archivo.ruta.includes("PENDIENTE");

  if (!existe) {
    return (
      <div className="file-preview-placeholder">
        <span className="file-placeholder-icon">📎</span>
        <div>
          <div className="file-placeholder-nombre">{getArchivoLabel(archivo, nombre)}</div>
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
        <span className="file-toggle-icon">{getArchivoIcon(archivo.tipo)}</span>
        <span className="file-toggle-nombre">{getArchivoLabel(archivo, nombre)}</span>
        <span className="file-toggle-arrow">{abierto ? "▲" : "▼"}</span>
      </button>

      {abierto && (
        <div className="file-preview-content">
          <PreviewBody nombre={nombre} archivo={archivo} />
          <a
            href={archivo.ruta}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost btn-sm file-preview-link"
          >
            Abrir en pestaña nueva →
          </a>

          {archivo2 && (
            <div className="file-preview-secondary">
              <div className="file-preview-divider">
                {archivo2.tipo === "imagen" ? "Segunda imagen" : "Documento adicional"}
              </div>
              {!archivo2.ruta.includes("PENDIENTE") ? (
                <>
                  <PreviewBody
                    nombre={getArchivoLabel(archivo2, `${nombre} — adicional`)}
                    archivo={archivo2}
                  />
                  <a
                    href={archivo2.ruta}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ghost btn-sm file-preview-link"
                  >
                    Abrir adicional en pestaña nueva →
                  </a>
                </>
              ) : (
                <div className="file-preview-placeholder file-preview-placeholder-inline">
                  <span className="file-placeholder-icon">📎</span>
                  <div>
                    <div className="file-placeholder-nombre">
                      {getArchivoLabel(archivo2, `${nombre} — adicional`)}
                    </div>
                    <div className="file-placeholder-hint">Archivo pendiente de subir</div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
