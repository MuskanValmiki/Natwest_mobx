import PetOwnerStore from "./PetOwnerStore";
import PetList from "./components/PetList";
import OwnerList from "./components/OwnerList";
import "./App.css";

function App() {
  const store = new PetOwnerStore();
  return (
    <div className="App">
      <h3 class="heading">Pet List</h3>
      <PetList store={store} />
      <hr />
      <hr />
      <h3 class="heading">Owner List</h3>

      <OwnerList store={store} />
    </div>
  );
}

export default App;