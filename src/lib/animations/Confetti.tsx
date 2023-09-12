type ElementType = 'diagonal' | 'spike' | 'wavy';

const BlockElement = ({ type }: { type: ElementType }) => {
  return (
    <section className={type}>
      <h2 className="section-title">{type}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        eius architecto hic tempora, ratione cumque accusamus deleniti!
        Praesentium, at. Quasi quidem dolorum esse. Earum inventore velit
      </p>
    </section>
  );
};
export const Confetti = () => {
  return (
    <div className="relative">
      <main id="confetti">
        <button>
          <h1 className="font-montserrat">PARTY</h1>
        </button>
        <BlockElement type="diagonal" />
        <BlockElement type="spike" />
        <BlockElement type="wavy" />
      </main>
    </div>
  );
};
