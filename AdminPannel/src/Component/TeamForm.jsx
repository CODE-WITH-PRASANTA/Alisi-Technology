import React, { useEffect, useState } from "react";

const TeamForm = ({ addMember, editMember, updateMember, loading }) => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [facebook, setFacebook] = useState("");
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    if (editMember) {
      setName(editMember.name || "");
      setDesignation(editMember.designation || "");
      setInstagram(editMember.instagram || "");
      setLinkedin(editMember.linkedin || "");
      setFacebook(editMember.facebook || "");
      setPhoto(null);
    }
  }, [editMember]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !designation.trim()) {
      alert("Name and designation are required");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("designation", designation);
    formData.append("instagram", instagram);
    formData.append("linkedin", linkedin);
    formData.append("facebook", facebook);

    if (photo) {
      formData.append("photo", photo); // 🔥 file upload
    }

    editMember ? updateMember(formData) : addMember(formData);

    setName("");
    setDesignation("");
    setInstagram("");
    setLinkedin("");
    setFacebook("");
    setPhoto(null);
  };

  return (
    <div className="adm-blog-form-box">
      <h2 className="adm-blog-form-heading">
        {editMember ? "Update Team Member" : "Create Team Member"}
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="adm-input-group">
          <label>Upload Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
          />
        </div>

        <div className="adm-input-group">
          <label>Team Member Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        <div className="adm-input-group">
          <label>Designation</label>
          <input
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            required
          />
        </div>

        <div className="adm-input-group">
          <label>Instagram</label>
          <input value={instagram} onChange={(e) => setInstagram(e.target.value)} />
        </div>

        <div className="adm-input-group">
          <label>LinkedIn</label>
          <input value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
        </div>

        <div className="adm-input-group">
          <label>Facebook</label>
          <input value={facebook} onChange={(e) => setFacebook(e.target.value)} />
        </div>

        <button className="adm-submit-btn" disabled={loading}>
          {loading ? "Saving..." : editMember ? "Update Member" : "Submit Member"}
        </button>
      </form>
    </div>
  );
};

export default TeamForm;