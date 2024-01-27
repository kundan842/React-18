import { useState } from "react";
import produce from "immer";

const App = () => {
  const [bugs, setBugs] = useState([
    { title: "bugs1", id: 1, fixed: false },
    { title: "bugs2", id: 2, fixed: false },
  ]);

  const handleClick = () => {
    // draft is proxy or copied array of bugs
    // whenver the changes is made to proxy , immer will update original object too
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <div>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {" "}
          {bug.title} {!bug.fixed ? "NEW" : "OLD"}
        </p>
      ))}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;
