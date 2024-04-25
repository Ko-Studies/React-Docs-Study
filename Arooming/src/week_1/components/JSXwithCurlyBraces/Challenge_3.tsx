// 3. Write an expression inside JSX curly braces
// In the object below, the full image URL is split into four parts: base URL, imageId, imageSize, and file extension.

const baseUrl = "https://i.imgur.com/";
const person = {
  name: "Gregorio Y. Zara",
  imageId: "7vQD0fP",
  imageSize: "s",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

export default function Challenge_3() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        // before
        // src="{baseUrl}{person.imageId}{person.imageSize}.jpg"

        // after
        src={`${baseUrl}${person.imageId}${person.imageSize}.jpg`}
        alt={person.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
