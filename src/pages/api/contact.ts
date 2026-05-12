import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const json = (body: Record<string, unknown>, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const nombre = typeof body?.nombre === "string" ? body.nombre.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const mensaje = typeof body?.mensaje === "string" ? body.mensaje.trim() : "";

    if (!nombre || !email || !mensaje) {
      return json({ error: "Todos los campos son requeridos." }, 400);
    }

    if (!/.+@.+\..+/.test(email)) {
      return json({ error: "Correo no válido." }, 400);
    }

    const safeNombre = escapeHtml(nombre);
    const safeEmail = escapeHtml(email);
    const safeMensaje = escapeHtml(mensaje).replace(/\n/g, "<br/>");

    await resend.emails.send({
      from: "Portafolio Tirzah <onboarding@resend.dev>",
      to: "tirzahkook0126@gmail.com",
      subject: `Nuevo mensaje de ${nombre} — Portafolio`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
          <h2 style="color: #3D3838; margin-bottom: 4px;">Nuevo mensaje desde tu portafolio</h2>
          <hr style="border: none; border-top: 1px solid #E3C49B; margin-bottom: 24px;" />
          <p><strong>Nombre:</strong> ${safeNombre}</p>
          <p><strong>Correo:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
          <p><strong>Mensaje:</strong></p>
          <div style="background: #F5F3F0; border-left: 3px solid #AF9AC9; padding: 16px; border-radius: 4px; color: #666161;">
            ${safeMensaje}
          </div>
          <hr style="border: none; border-top: 1px solid #E3C49B; margin-top: 32px;" />
          <p style="font-size: 12px; color: #A5937B;">Enviado desde tirzah-portfolio.vercel.app</p>
        </div>
      `,
      replyTo: email,
    });

    return json({ ok: true }, 200);
  } catch (err) {
    console.error("Resend error:", err);
    return json({ error: "Error al enviar el mensaje." }, 500);
  }
};
