const Section = ({ children, text }) => {
  return (
    <section>
      <h2>{text}</h2>
      <p>{children}</p>
    </section>
  );
};

export default Section;