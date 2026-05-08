import { useRef, useState, useEffect } from 'react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
}

export default function Reveal({ children, delay = 0, as: As = 'div', ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const Tag = As as any;
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${rest.className || ''}`}
      style={{ transitionDelay: `${delay}ms`, ...(rest.style || {}) }}
    >
      {children}
    </Tag>
  );
}
