 export default function PartList({ parts, onEdit, onDelete }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Brand</th>
          <th>Qty</th>
          <th>Price</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {parts.map((p) => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.partType}</td>
            <td>{p.brand}</td>
            <td>{p.quantity}</td>
            <td>{p.price}</td>
            <td>{p.status}</td>
            <td>
              <button onClick={() => onEdit(p.id)}>Edit</button>
              <button onClick={() => onDelete(p.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

