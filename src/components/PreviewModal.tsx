import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import type { ReactNode } from "react";

export type TipoArchivo = "imagen" | "pdf" | "video";

export interface ArchivoItem {
  tipo: TipoArchivo;
  ruta: string;
  label?: string;
}

interface PreviewModalProps {
  items: ArchivoItem[];
  titulo: string;
  trigger?: ReactNode;
  children?: ReactNode;
}

function getVideoMime(ruta: string) {
  return ruta.toLowerCase().endsWith(".mov") ? "video/quicktime" : "video/mp4";
}

function ModalPortal({
  items,
  titulo,
  idx,
  setIdx,
  cerrar,
}: {
  items: ArchivoItem[];
  titulo: string;
  idx: number;
  setIdx: (i: number) => void;
  cerrar: () => void;
}) {
  const actual = items[idx];
  const tieneVarios = items.length > 1;

  return createPortal(
    <div className="modal-overlay" onClick={cerrar}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-titulo">{titulo}</h3>
          <button className="modal-close" onClick={cerrar} aria-label="Cerrar">
            ✕
          </button>
        </div>

        <div className="modal-content">
          {actual.tipo === "imagen" && (
            <img src={actual.ruta} alt={titulo} className="modal-img" loading="lazy" />
          )}
          {actual.tipo === "pdf" && (
            <iframe
              src={`${actual.ruta}#toolbar=0&navpanes=0`}
              className="modal-pdf"
              title={titulo}
            />
          )}
          {actual.tipo === "video" && (
            <video controls autoPlay className="modal-video" key={actual.ruta}>
              <source src={actual.ruta} type={getVideoMime(actual.ruta)} />
            </video>
          )}
        </div>

        {tieneVarios && (
          <div className="modal-nav">
            {items.map((it, i) => (
              <button
                key={`${it.ruta}-${i}`}
                className={`modal-dot ${i === idx ? "active" : ""}`}
                onClick={() => setIdx(i)}
              >
                <span className="modal-dot-icon">
                  {it.tipo === "pdf" ? "📄" : it.tipo === "video" ? "▶" : "🖼"}
                </span>
                <span>{it.label || (i === 0 ? "Principal" : "Adicional")}</span>
              </button>
            ))}
          </div>
        )}

        <div className="modal-footer">
          <a href={actual.ruta} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">
            Abrir en pestaña nueva →
          </a>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default function PreviewModal({ items, titulo, trigger, children }: PreviewModalProps) {
  const [abierto, setAbierto] = useState(false);
  const [idx, setIdx] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const validItems = items.filter((item) => !item.ruta.includes("PENDIENTE"));
  const triggerNode = trigger ?? children;

  const cerrar = useCallback(() => {
    setAbierto(false);
    setIdx(0);
    document.body.classList.remove("menu-open");
  }, []);

  useEffect(() => {
    if (!abierto) return;

    document.body.classList.add("menu-open");

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") cerrar();
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
      document.body.classList.remove("menu-open");
    };
  }, [abierto, cerrar]);

  return (
    <>
      <div
        className={`work-cover modal-trigger ${validItems.length > 0 ? "has-preview" : ""}`}
        onClick={() => validItems.length > 0 && setAbierto(true)}
        role={validItems.length > 0 ? "button" : undefined}
        tabIndex={validItems.length > 0 ? 0 : undefined}
        onKeyDown={(e) => {
          if ((e.key === "Enter" || e.key === " ") && validItems.length > 0) {
            e.preventDefault();
            setAbierto(true);
          }
        }}
      >
        {triggerNode}
        {validItems.length > 0 && (
          <div className="work-cover-hint">
            <span className="cover-hint-icon">
              {validItems[0].tipo === "pdf"
                ? "📄"
                : validItems[0].tipo === "video"
                  ? "▶"
                  : "🔍"}
            </span>
            <span className="cover-hint-text">
              Ver{" "}
              {validItems[0].tipo === "pdf"
                ? "documento"
                : validItems[0].tipo === "video"
                  ? "video"
                  : "imagen"}
            </span>
          </div>
        )}
      </div>

      {mounted && abierto && validItems.length > 0 && (
        <ModalPortal
          items={validItems}
          titulo={titulo}
          idx={idx}
          setIdx={setIdx}
          cerrar={cerrar}
        />
      )}
    </>
  );
}
