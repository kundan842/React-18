import { useState } from "react";
import ExpanseTracker from "./components/ExpanseTracker";
import ExpanseFileter from "./components/ExpanseFilter";
import ExpanseForm from "./components/ExpanseForm";

function App() {
  const [expanses, setExpanses] = useState([
    { id: 1, amount: 234, description: "dfsa", category: "utilities" },
    { id: 2, amount: 34, description: "ertwr", category: "utilities" },
    { id: 3, amount: 56, description: "hgf", category: "grocery" },
    { id: 4, amount: 89, description: "ghs", category: "utilities" },
    { id: 5, amount: 90, description: "rtsfg", category: "stationary" },
  ]);
  // need to maintain a state varaibe for slecetd fileter category
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleDelete = (id: number) => {
    setExpanses(expanses.filter((expanse) => expanse.id != id));
  };
  const visibleExapanses = selectedCategory
    ? expanses.filter((e) => e.category == selectedCategory)
    : expanses;

  if (expanses.length === 0) return null;
  return (
    <div>
      <div className="mb-5">
        <ExpanseForm
          onSubmit={(data) =>
            setExpanses([...expanses, { ...data, id: expanses.length + 1 }])
          }
        ></ExpanseForm>
      </div>
      <div className="mb-3">
        <ExpanseFileter
          onSelectChange={(catgory) => setSelectedCategory(catgory)}
        ></ExpanseFileter>
      </div>
      <ExpanseTracker
        expanse={visibleExapanses}
        onDelete={handleDelete}
      ></ExpanseTracker>
    </div>
  );
}

export default App;
