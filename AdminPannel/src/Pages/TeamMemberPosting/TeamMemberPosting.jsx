import React, { useEffect, useState } from "react";
import API_URL from "../../Api/Api";
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
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  /* ================= PREFILL EDIT ================= */
  useEffect(() => {
    if (editMember) {
      setName(editMember.name);
      setDesignation(editMember.designation);
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
      console.error(err);
    }
  };

  /* ================= DELETE ================= */
  const deleteMember = async (id) => {
    try {
      await API_URL.delete(`/team/${id}`);
      fetchMembers();
      resetForm();
    } catch (err) {
      console.error(err);
    }
  };

  /* ================= RESET ================= */
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
    <div className="adm-blog-manager-container">
      {/* ================= VIEW / FORM BOX ================= */}
      <div className="adm-blog-left-panel">
        <div className="adm-blog-form-box">
          <h2 className="adm-blog-form-heading">
            {editMember ? "Update Team Member" : "Create Team Member"}
          </h2>

          <form onSubmit={handleSubmit}>
            {/* IMAGE */}
            <div className="adm-input-group">
              <label>Upload Photo</label>
              <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />

              {editMember?.photo && !photo && (
                <img
                  src={`http://localhost:5000/${editMember.photo}`}
                  className="adm-image-preview"
                  alt="preview"
                />
              )}

              {photo && (
                <img
                  src={URL.createObjectURL(photo)}
                  className="adm-image-preview"
                  alt="preview"
                />
              )}
            </div>

            {/* INPUTS */}
            <div className="adm-input-group">
              <label>Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="adm-input-group">
              <label>Designation</label>
              <input
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              />
            </div>

            <div className="adm-input-group">
              <label>Instagram</label>
              <input
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
              />
            </div>

            <div className="adm-input-group">
              <label>LinkedIn</label>
              <input
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
              />
            </div>

            <div className="adm-input-group">
              <label>Facebook</label>
              <input
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
              />
            </div>

            {/* ================= ACTION BUTTONS ================= */}
            <div className="adm-form-actions">
              <button className="adm-submit-btn">
                {editMember ? "Update Member" : "Submit Member"}
              </button>

              {editMember && (
                <>
                  <button
                    type="button"
                    className="adm-view-delete-btn"
                    onClick={() => {
                      if (window.confirm("Delete this team member?")) {
                        deleteMember(editMember._id);
                      }
                    }}
                  >
                    Delete Member
                  </button>

                  <button
                    type="button"
                    className="adm-cancel-btn"
                    onClick={resetForm}
                  >
                    Cancel
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* ================= TABLE ================= */}
      <div className="adm-blog-right-panel">
        <div className="adm-blog-table-box">
          <h2 className="adm-table-heading">Manage Team Members</h2>

          <div className="adm-table-scroll-area">
            <table className="adm-blog-table">
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Instagram</th>
                  <th>LinkedIn</th>
                  <th>Facebook</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {members.length === 0 && (
                  <tr>
                    <td colSpan="7" className="adm-empty-row">
                      No team members found
                    </td>
                  </tr>
                )}

                {members.map((m) => (
                  <tr key={m._id}>
                    <td>
                      <img
                        src={`http://localhost:5000/${m.photo}`}
                        className="adm-table-img"
                        alt={m.name}
                      />
                    </td>
                    <td>{m.name}</td>
                    <td>{m.designation}</td>
                    <td>{m.instagram}</td>
                    <td>{m.linkedin}</td>
                    <td>{m.facebook}</td>
                    <td>
                      <button
                        className="adm-edit-btn"
                        onClick={() => setEditMember(m)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberPosting;