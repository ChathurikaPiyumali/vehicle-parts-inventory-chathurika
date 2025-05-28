import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { deletePart, fetchParts } from "../api/parts";
import PartList from "../components/PartList";

export default function ListPage() {
  const navigate = useNavigate();
  const [parts, setParts] = useState([]);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  // Memoize loadParts to avoid eslint warning
  const loadParts = useCallback(() => {
    fetchParts({ search, type: typeFilter, status: statusFilter }).then((res) =>
      setParts(res.data)
    );
  }, [search, typeFilter, statusFilter]);

  useEffect(() => {
    loadParts();
  }, [loadParts]);

  const handleDelete = async (id) => {
    await deletePart(id);
    loadParts();
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ marginBottom: "20px" }}>Vehicle Parts Inventory</h1>
      <div style={{ display: "flex", gap: "10px", marginBottom: "15px", flexWrap: "wrap" }}>
        <input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "8px", width: "200px" }}
        />
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          style={{ padding: "8px" }}
        >
          <option value="">All Types</option>
          <option value="Engine">Engine</option>
          <option value="Brake">Brake</option>
          <option value="Ignition">Ignition</option>
          <option value="Filter">Filter</option>
          <option value="Lighting">Lighting</option>
        </select>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{ padding: "8px" }}
        >
          <option value="">All Status</option>
          <option value="In Stock">In Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>
        <button
          onClick={() => navigate("/add")}
          style={{
            backgroundColor: "#28a745",
            color: "white",
            padding: "8px 12px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          + Add New
        </button>
      </div>
      <PartList parts={parts} onEdit={(id) => navigate(`/edit/${id}`)} onDelete={handleDelete} />
    </div>
  );
}
