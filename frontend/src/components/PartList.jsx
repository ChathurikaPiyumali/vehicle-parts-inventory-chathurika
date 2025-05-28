export default function PartList({ parts, onEdit, onDelete }) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
      <thead>
        <tr>
          <th style={thStyle}>Name</th>
          <th style={thStyle}>Type</th>
          <th style={thStyle}>Brand</th>
          <th style={thStyle}>Qty</th>
          <th style={thStyle}>Price</th>
          <th style={thStyle}>Status</th>
          <th style={thStyle}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {parts.map((p) => (
          <tr key={p.id}>
            <td style={tdStyle}>{p.name}</td>
            <td style={tdStyle}>{p.partType}</td>
            <td style={tdStyle}>{p.brand}</td>
            <td style={tdStyle}>{p.quantity}</td>
            <td style={tdStyle}>{p.price}</td>
            <td style={tdStyle}>{p.status}</td>
            <td style={tdStyle}>
              <button style={editButton} onClick={() => onEdit(p.id)}>Edit</button>{" "}
              <button style={deleteButton} onClick={() => onDelete(p.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const thStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  backgroundColor: "#f4f4f4",
  textAlign: "left"
};

const tdStyle = {
  border: "1px solid #ccc",
  padding: "10px"
};

const editButton = {
  backgroundColor: "#007bff",
  color: "white",
  padding: "5px 10px",
  border: "none",
  cursor: "pointer",
  borderRadius: "4px",
  marginRight: "5px"
};

const deleteButton = {
  backgroundColor: "#dc3545",
  color: "white",
  padding: "5px 10px",
  border: "none",
  cursor: "pointer",
  borderRadius: "4px"
};
