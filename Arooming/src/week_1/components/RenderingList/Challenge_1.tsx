// 1. Splitting a list two
import { people } from "./data.ts";
import { getImageUrl } from "./utils.ts";

export default function Challenge_1() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const listItems = chemists.map((chemist) => (
    <li key={chemist.id}>
      <img src={getImageUrl(chemist)} alt={chemist.name} />
      <p>
        <b>{chemist.name}:</b>
        {" " + chemist.profession + " "}
        known for {chemist.accomplishment}
      </p>
    </li>
  ));
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}
