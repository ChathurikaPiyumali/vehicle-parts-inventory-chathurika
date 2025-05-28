import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createPart, fetchPart, updatePart } from "../api/parts";
import PartForm from "../components/PartForm";

export default function AddEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [part, setPart] = useState(null);

  useEffect(() => {
    if (id) {
      fetchPart(id).then((res) => setPart(res.data));
    }
  }, [id]);

  const handleSubmit = async (data) => {
    if (id) {
      await updatePart(id, data);
    } else {
      await createPart(data);
    }
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>{id ? "Edit Part" : "Add New Part"}</h2>
      <PartForm initialData={part} onSubmit={handleSubmit} />
    </div>
  );
}
