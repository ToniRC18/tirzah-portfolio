import { useCallback } from "react";

export default function TarjetaDownload() {
  const descargar = useCallback(async () => {
    const { default: html2canvas } = await import("html2canvas");
    const el = document.querySelector(".bizcard") as HTMLElement | null;

    if (!el) return;

    const prevTransform = el.style.transform;
    el.style.transform = "none";

    try {
      const canvas = await html2canvas(el, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
      });

      const link = document.createElement("a");
      link.download = "Tarjeta-Tirzah-Kook.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    } finally {
      el.style.transform = prevTransform;
    }
  }, []);

  return (
    <button className="btn btn-secondary btn-sm" onClick={descargar} type="button">
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      Descargar PNG
    </button>
  );
}
