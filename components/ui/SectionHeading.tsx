interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`section-heading ${alignment}`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}

      <h2 className="section-title">{title}</h2>

      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
