import Icon from './Icon';

export default function BizCard() {
  return (
    <div className="bizcard-stage">
      <div className="bizcard">
        <div style={{position:'relative', zIndex:1, display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
          <div className="bizcard-mark">T</div>
          <div style={{textAlign:'right'}}>
            <div className="bizcard-role">Psicóloga Clínica en formación</div>
            <div className="bizcard-uni">Universidad de Montemorelos</div>
          </div>
        </div>
        <div style={{position:'relative', zIndex:1}}>
          <h3 className="bizcard-name" style={{fontSize:32, margin:0}}>TIRZAH KOOK</h3>
          <div style={{fontSize:13, color:'var(--color-taupe)', marginTop:4, letterSpacing:'0.1em', textTransform:'uppercase'}}>
            Universidad de Montemorelos, Montemorelos, Nuevo León
          </div>
        </div>
        <div style={{position:'relative', zIndex:1, display:'flex', justifyContent:'space-between', alignItems:'flex-end'}}>
          <span className="bizcard-handle"><Icon name="instagram" size={14}/> @__txr.zxh__</span>
          <span className="bizcard-handle"><Icon name="mail" size={14}/> +52 81 2632 1572 · tirzahkook0126@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
