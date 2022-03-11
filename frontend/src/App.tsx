import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from 'pages/listing';
import Quiz from 'pages/quiz';
import Form from 'pages/form';
import Navbar from "components/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/quiz">
          <Route path=":characterId" element={<Quiz />} />
        </Route>
        <Route path="/form">
          <Route path=":characterId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
