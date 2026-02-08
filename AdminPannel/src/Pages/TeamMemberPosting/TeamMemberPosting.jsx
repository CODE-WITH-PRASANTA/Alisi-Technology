import React, { useEffect, useState } from "react";
import API_URL, { IMAGE_BASE_URL } from "../../Api/Api";
import "./TeamMemberPosting.css";

const TeamMemberPosting = () => {
  const [members, setMembers] = useState([]);
  const [editMember, setEditMember] = useState(null);

  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [facebook, setFacebook] = useState("");
  const [photo, setPhoto] = useState(null);

  /* ================= FETCH ================= */
  const fetchMembers = async () => {
    try {
      const res = await API_URL.get("/team");
      setMembers(res.data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  /* ================= PREFILL ================= */
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

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("designation", designation);
    formData.append("instagram", instagram);
    formData.append("linkedin", linkedin);
    formData.append("facebook", facebook);
    if (photo) formData.append("photo", photo);

    try {
      if (editMember) {
        await API_URL.put(`/team/${editMember._id}`, formData);
      } else {
        await API_URL.post("/team", formData);
      }
      fetchMembers();
      resetForm();
    } catch (err) {
      console.error("Submit error:", err);
    }
  };

  /* ================= DELETE ================= */
  const deleteMember = async (id) => {
    if (!window.confirm("Are you sure you want to delete this member?")) return;

    try {
      await API_URL.delete(`/team/${id}`);
      fetchMembers();
      resetForm();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const resetForm = () => {
    setName("");
    setDesignation("");
    setInstagram("");
    setLinkedin("");
    setFacebook("");
    setPhoto(null);
    setEditMember(null);
  };

  return (
    <div className="team-admin-wrapper">
      {/* ================= FORM ================= */}
      <div className="team-form-panel">
        <h2 className="panel-title">
          {editMember ? "Update Team Member" : "Add Team Member"}
        </h2>

        <form onSubmit={handleSubmit} className="team-form">
          <div className="form-group">
            <label>Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
            />

            {(photo || editMember?.photo) && (
              <img
                src={
                  photo
                    ? URL.createObjectURL(photo)
                    : `${IMAGE_BASE_URL}/${editMember.photo}`
                }
                className="preview-img"
                alt="preview"
              />
            )}
          </div>

          <div className="form-group">
            <label>Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="form-group">
            <label>Designation</label>
            <input
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Instagram</label>
            <input
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>LinkedIn</label>
            <input
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Facebook</label>
            <input
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
            />
          </div>

          <div className="form-actions">
            <button className="btn-primary" type="submit">
              {editMember ? "Update Member" : "Create Member"}
            </button>

            {editMember && (
              <button
                type="button"
                className="btn-secondary"
                onClick={resetForm}
              >
                Cancel Edit
              </button>
            )}
          </div>
        </form>
      </div>

      {/* ================= TABLE ================= */}
      <div className="team-table-panel">
        <h2 className="panel-title">Team Members</h2>

        <div className="table-scroll">
          <table className="team-table">
            <thead>
              <tr>
                <th>Photo</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Instagram</th>
                <th>LinkedIn</th>
                <th>Facebook</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {members.length === 0 && (
                <tr>
                  <td colSpan="7" className="empty-row">
                    No team members found
                  </td>
                </tr>
              )}

              {members.map((m) => (
                <tr key={m._id}>
                  <td>
                    <img
                      src={`${IMAGE_BASE_URL}/${m.photo}`}
                      className="table-img"
                      alt={m.name}
                      onError={(e) =>
                        (e.target.src =
                          "https://via.placeholder.com/60")
                      }
                    />
                  </td>
                  <td>{m.name}</td>
                  <td>{m.designation}</td>
                  <td>{m.instagram}</td>
                  <td>{m.linkedin}</td>
                  <td>{m.facebook}</td>
                  <td className="action-cell">
                    <button
                      className="btn-edit"
                      onClick={() => setEditMember(m)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => deleteMember(m._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberPosting;
