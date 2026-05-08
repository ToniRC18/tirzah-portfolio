interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  decor?: string;
}

export default function PageHeader({ eyebrow, title, lead, decor }: PageHeaderProps) {
  return (
    <header className="page-header container">
      {decor && <div className="page-header-decor">{decor}</div>}
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h1>{title}</h1>
      {lead && <p className="lead">{lead}</p>}
    </header>
  );
}
