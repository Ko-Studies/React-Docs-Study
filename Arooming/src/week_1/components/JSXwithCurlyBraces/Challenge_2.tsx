// 2. Extract information into an object
//  Extract the image URL into the person object.

const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
  // add
  imgSrc: "https://i.imgur.com/7vQD0fPs.jpg",
};

const Challenge_2 = () => {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        //   before
        //   src="https://i.imgur.com/7vQD0fPs.jpg"

        // after
        src={person.imgSrc}
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

export default Challenge_2;
