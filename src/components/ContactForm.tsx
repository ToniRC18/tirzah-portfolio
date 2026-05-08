import { useState } from 'react';
import Icon from './Icon';

export default function ContactForm() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.nombre.trim()) e.nombre = 'Ingresa tu nombre';
    if (!form.email.trim()) e.email = 'Ingresa tu correo';
    else if (!/.+@.+\..+/.test(form.email)) e.email = 'Correo no válido';
    if (!form.mensaje.trim()) e.mensaje = 'Escribe un mensaje';
    return e;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSent(true);
    }
  };

  if (sent) {
    return (
      <div className="form-success">
        <div className="check"><Icon name="check" size={28} stroke={2}/></div>
        <h3 style={{fontSize:24, marginBottom:8}}>¡Mensaje recibido!</h3>
        <p style={{color:'var(--color-charcoal)', fontSize:15}}>
          Gracias por escribirme, <strong>{form.nombre.split(' ')[0]}</strong>. Te
          responderé pronto al correo <em className="serif">{form.email}</em>.
        </p>
        <button className="btn btn-secondary btn-sm" style={{marginTop:20}}
                onClick={() => { setSent(false); setForm({nombre:'', email:'', mensaje:''}); }}>
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    // TODO: reemplazar con ID real de Formspree
    <form className="card contact-form" style={{padding:36}}
          action={`https://formspree.io/f/${import.meta.env.PUBLIC_FORMSPREE_ID || 'REPLACE_WITH_ID'}`}
          method="POST"
          onSubmit={submit}>
      <span className="eyebrow">Formulario</span>
      <h3 style={{marginTop:8, marginBottom:4, fontSize:22}}>Escríbeme</h3>
      <p className="text-muted" style={{fontSize:14, marginBottom:24}}>
        Te respondo en un máximo de 48 horas.
      </p>

      <div className="field">
        <label>Nombre</label>
        <input type="text" name="nombre" placeholder="Tu nombre"
               value={form.nombre}
               onChange={ev => setForm({...form, nombre: ev.target.value})}/>
        {errors.nombre && <span style={{color:'#b1474b', fontSize:12, marginTop:2}}>{errors.nombre}</span>}
      </div>

      <div className="field" style={{marginTop:18}}>
        <label>Correo electrónico</label>
        <input type="email" name="email" placeholder="tu@correo.com"
               value={form.email}
               onChange={ev => setForm({...form, email: ev.target.value})}/>
        {errors.email && <span style={{color:'#b1474b', fontSize:12, marginTop:2}}>{errors.email}</span>}
      </div>

      <div className="field" style={{marginTop:18}}>
        <label>Mensaje</label>
        <textarea rows={5} name="mensaje" placeholder="¿En qué te puedo ayudar?"
                  value={form.mensaje}
                  onChange={ev => setForm({...form, mensaje: ev.target.value})}/>
        {errors.mensaje && <span style={{color:'#b1474b', fontSize:12, marginTop:2}}>{errors.mensaje}</span>}
      </div>

      <button className="btn btn-primary" type="submit" style={{marginTop:24}}>
        Enviar mensaje <Icon name="send" size={14}/>
      </button>

      <p className="text-muted" style={{fontSize:12, marginTop:16, fontStyle:'italic', fontFamily:'var(--font-serif)'}}>
        Tu información se trata de forma confidencial — no se comparte con terceros.
      </p>
    </form>
  );
}
