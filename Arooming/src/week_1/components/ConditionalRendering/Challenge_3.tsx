// 3.  Refactor this code to use a single if statement instead of three ? : conditions.

function Drink({ name }: { name: string }) {
  const DATA = [];
  if (name === "tea") {
    DATA.push("leaf");
    DATA.push("15–70 mg/cup");
    DATA.push("4,000+ years");
  } else {
    DATA.push("bean");
    DATA.push("80–185 mg/cup");
    DATA.push("1,000+ years");
  }
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{DATA[0]}</dd>
        <dt>Caffeine content</dt>
        <dd>{DATA[1]}</dd>
        <dt>Age</dt>
        <dd>{DATA[2]}</dd>
      </dl>
    </section>
  );
}

export default function Challenge_3() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}

// before
/* function Drink({ name }) {
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{name === 'tea' ? 'leaf' : 'bean'}</dd>
        <dt>Caffeine content</dt>
        <dd>{name === 'tea' ? '15–70 mg/cup' : '80–185 mg/cup'}</dd>
        <dt>Age</dt>
        <dd>{name === 'tea' ? '4,000+ years' : '1,000+ years'}</dd>
      </dl>
    </section>
  );
} */
