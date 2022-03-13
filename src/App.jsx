import CatList from "./CatList";

function App() {



  return (
    <>
      <div className="container my-5">
        <h1 className="text-center">Cat List</h1>
        <div className="container my-5">
          <div id="daftar-kucing" className="row">
            <CatList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;