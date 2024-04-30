import Calculator from "./components/calculator";
function App() {
  return (
    <div>
      <div className="flex-col-center">
        <Calculator />
        <p className="github">
          Designed by: &nbsp;
          <a href="https://github.com/Amith-AG">Amith A G</a>
        </p>
      </div>
    </div>
  );
}

export default App;
