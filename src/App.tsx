import UpperInterface from "./components/molecules/upperInterface/UpperInterface";
import Sidebar from "./components/molecules/sidebar/Sidebar";

function App() {
  return (
    <section className="grid">
      <article>
        <Sidebar />
      </article>
      <article>
        <UpperInterface />
      </article>
    </section>
  );
}

export default App;
