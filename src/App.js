import "./App.css";
import CharacterScreen from "./components/CharacterScreen";
import { GlobalProvider } from "./GlobalContext";
function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <CharacterScreen />
      </GlobalProvider>
    </div>
  );
}

export default App;
