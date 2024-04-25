// 1. Fix the mistake
const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

const Challenge_1 = () => {
  return (
    <div style={person.theme}>
      {/* before */}
      {/* <h1>{person}'s Todos</h1> */}

      {/* after */}
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
};

export default Challenge_1;
