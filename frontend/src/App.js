import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPage from "./pages/ListPage";
import AddEditPage from "./pages/AddEditPage";
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/add" element={<AddEditPage />} />
        <Route path="/edit/:id" element={<AddEditPage />} />
      </Routes>
    </BrowserRouter>
  );
}
