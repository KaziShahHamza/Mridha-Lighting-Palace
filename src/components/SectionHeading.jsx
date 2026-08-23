import "./../styles/components/section.css";


function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}) {
  return (
    <div className={`section-heading ${light ? "section-heading-light" : ""}`}>
      {eyebrow && (
        <div className="section-eyebrow">
          <span></span>
          {eyebrow}
        </div>
      )}

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </div>
  );
}

export default SectionHeading;