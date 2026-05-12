import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { ArchivoItem } from "../data/repositorio";

interface PreviewModalProps {
  archivos: ArchivoItem[];
  titulo: string;
  trigger?: ReactNode;
  children?: ReactNode;
}

function getVideoMime(ruta: string) {
  return ruta.toLowerCase().endsWith(".mov") ? "video/quicktime" : "video/mp4";
}

function ModalPortal({
  archivos,
  titulo,
  idx,
  setIdx,
  cerrar,
}: {
  archivos: ArchivoItem[];
  titulo: string;
  idx: number;
  setIdx: Dispatch<SetStateAction<number>>;
  cerrar: () => void;
}) {
  const actual = archivos[idx];
  const total = archivos.length;

  const prev = () => setIdx((current) => (current - 1 + total) % total);
  const next = () => setIdx((current) => (current + 1) % total);

  return createPortal(
    <div className="modal-overlay" onClick={cerrar}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-titulo">{titulo}</h3>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {total > 1 && <span className="modal-counter">{idx + 1} / {total}</span>}
            <button className="modal-close" onClick={cerrar} aria-label="Cerrar">
              ✕
            </button>
          </div>
        </div>

        <div className="modal-content" style={{ position: "relative" }}>
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

          {total > 1 && (
            <>
              <button
                className="modal-arrow modal-arrow-left"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Anterior"
              >
                ‹
              </button>
              <button
                className="modal-arrow modal-arrow-right"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Siguiente"
              >
                ›
              </button>
            </>
          )}
        </div>

        {total > 1 && (
          <div className="modal-dots">
            {archivos.map((archivo, i) => (
              <button
                key={`${archivo.ruta}-${i}`}
                className={`modal-dot-mini ${i === idx ? "active" : ""}`}
                onClick={() => setIdx(i)}
                aria-label={`Ir a imagen ${i + 1}`}
              />
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

export default function PreviewModal({ archivos, titulo, trigger, children }: PreviewModalProps) {
  const [abierto, setAbierto] = useState(false);
  const [idx, setIdx] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const validItems = archivos.filter((item) => !item.ruta.includes("PENDIENTE"));
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
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % validItems.length);
      if (e.key === "ArrowLeft") setIdx((i) => (i - 1 + validItems.length) % validItems.length);
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
      document.body.classList.remove("menu-open");
    };
  }, [abierto, cerrar, validItems.length]);

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
              {validItems.length > 1
                ? `Ver ${validItems.length} archivos`
                : `Ver ${validItems[0].tipo === "pdf"
                    ? "documento"
                    : validItems[0].tipo === "video"
                      ? "video"
                      : "imagen"}`}
            </span>
          </div>
        )}
      </div>

      {mounted && abierto && validItems.length > 0 && (
        <ModalPortal
          archivos={validItems}
          titulo={titulo}
          idx={idx}
          setIdx={setIdx}
          cerrar={cerrar}
        />
      )}
    </>
  );
}
