import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
function App() {
  let items = ["Delhi", "Pune", "New York", "San Franchisco", "London"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      {" "}
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
      <Alert>
        Checking <span>children props</span>
      </Alert>
    </>
  );
}

export default App;
