import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<div>hello</div>}></Route>
        <Route path="join" element={<div>hello</div>}></Route>
        <Route path="cart" element={<div>hello</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
