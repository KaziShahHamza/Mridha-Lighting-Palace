import "./../styles/components/why-choose.css";


function WhyChooseMLP() {
  const features = [
    {
      number: "01",
      title: "Thoughtful Design",
      text: "Lighting solutions selected to complement modern architecture, interiors and everyday spaces.",
    },
    {
      number: "02",
      title: "Wide Collection",
      text: "From indoor and decorative lighting to commercial, outdoor and industrial solutions.",
    },
    {
      number: "03",
      title: "Professional Service",
      text: "A customer-focused approach from product selection through project requirements.",
    },
    {
      number: "04",
      title: "Lighting Expertise",
      text: "Practical lighting solutions for residential, commercial and architectural applications.",
    },
  ];

  return (
    <section className="why-section">
      <div className="why-container">

        <div className="why-intro">
          <div className="section-eyebrow">
            <span></span>
            Why Choose MLP
          </div>

          <h2>
            More than
            <br />
            <em>just light.</em>
          </h2>

          <p>
            We believe good lighting changes how a space feels.
            MLP brings together design, functionality and practical
            lighting solutions to help create environments people
            enjoy being in.
          </p>
        </div>

        <div className="why-grid">
          {features.map((feature) => (
            <div className="why-item" key={feature.number}>
              <span className="why-number">
                {feature.number}
              </span>

              <div>
                <h3>{feature.title}</h3>

                <p>{feature.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseMLP;