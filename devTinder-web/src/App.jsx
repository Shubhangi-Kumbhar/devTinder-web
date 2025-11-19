import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Body from './Body';

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<div>Login page</div>}></Route>
            <Route path="/profile" element={<div>Profile page</div>}></Route>
            <Route path="/feed" element={<div>Feed page</div>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Body /> */}
    </>
  );
}

export default App;
