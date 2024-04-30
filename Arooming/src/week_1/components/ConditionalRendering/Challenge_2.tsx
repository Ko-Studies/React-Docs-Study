function Item({ name, importance }: { name: string; importance: number }) {
  return (
    <li className="item">
      {name}
      {/* 2. each Item receives a numerical importance prop. Use the && operator to render “(Importance: X)” in italics, but only for items that have non-zero importance.  */}
      {importance !== 0 && <i>(Importance: {importance})</i>}
    </li>
  );
}

export default function Challenge_2() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item importance={9} name="Space suit" />
        <Item importance={0} name="Helmet with a golden leaf" />
        <Item importance={6} name="Photo of Tam" />
      </ul>
    </section>
  );
}
