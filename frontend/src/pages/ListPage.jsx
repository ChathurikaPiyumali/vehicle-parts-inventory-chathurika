 import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deletePart, fetchParts } from "../api/parts";
import PartList from "../components/PartList";

export default function ListPage() {
  const navigate = useNavigate();
  const [parts, setParts] = useState([]);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const loadParts = () => {
    fetchParts({ search, type: typeFilter, status: statusFilter }).then((res) =>
      setParts(res.data)
    );
  };

  useEffect(() => {
    loadParts();
  }, [search, typeFilter, statusFilter]);

  const handleDelete = async (id) => {
    await deletePart(id);
    loadParts();
  };

  return (
    <div>
      <h1>Vehicle Parts Inventory</h1>
      <div>
        <input placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
        <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
          <option value="">All Types</option>
          <option value="Engine">Engine</option>
          <option value="Brake">Brake</option>
        </select>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="">All Status</option>
          <option value="In Stock">In Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>
        <button onClick={() => navigate("/add")}>+ Add New</button>
      </div>
      <PartList parts={parts} onEdit={(id) => navigate(`/edit/${id}`)} onDelete={handleDelete} />
    </div>
  );
}

