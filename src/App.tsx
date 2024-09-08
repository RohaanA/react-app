import ListGroup from "./components/ListGroup";

function handleSelectItem(item: string) {
  console.log(item);
}
function App() {
  let items = ["New York", "London", "Paris", "Berlin", "Tokyo"];
  return (
    <>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;
