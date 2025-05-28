import { useState, useEffect } from "react";

export default function PartForm({ initialData, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    partType: "",
    brand: "",
    quantity: 0,
    price: "",
    status: "In Stock",
  });

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "auto" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          name="partType"
          value={formData.partType}
          onChange={handleChange}
          placeholder="Type"
          required
        />
        <input
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          placeholder="Brand"
        />
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          placeholder="Quantity"
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <select name="status" value={formData.status} onChange={handleChange}>
          <option>In Stock</option>
          <option>Out of Stock</option>
        </select>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
