import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <header></header>
      <body>
        <section>
          <div className="min-h-screen items-center w-full flex justify-center bg-white text-3xl px-5 py-5">
            <Card />
          </div>
        </section>
      </body>
      <footer></footer>
    </>
  );
}

export default App;
