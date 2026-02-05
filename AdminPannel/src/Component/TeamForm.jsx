import React, { useState, useEffect } from "react";

const TeamForm = ({ addMember, editMember, updateMember }) => {

  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    instagram: "",
    linkedin: "",
    facebook: "",
    photo: ""
  });

  useEffect(() => {
    if (editMember) {
      setFormData(editMember);
    }
  }, [editMember]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, photo: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editMember) {
      updateMember(formData);
    } else {
      addMember(formData);
    }

    setFormData({
      name: "",
      designation: "",
      instagram: "",
      linkedin: "",
      facebook: "",
      photo: ""
    });
  };

  return (
    <div className="adm-blog-form-box">

      <h2 className="adm-blog-form-heading">
        {editMember ? "Update Team Member" : "Create Team Member"}
      </h2>

      <form onSubmit={handleSubmit}>

        <div className="adm-input-group">
          <label>Upload Photo</label>
          <input type="file" onChange={handleImage} />
          {formData.photo && (
            <img src={formData.photo} className="adm-image-preview" />
          )}
        </div>

        <div className="adm-input-group">
          <label>Team Member Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="adm-input-group">
          <label>Designation</label>
          <input
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="adm-input-group">
          <label>Instagram</label>
          <input
            name="instagram"
            value={formData.instagram}
            onChange={handleChange}
            placeholder="https://instagram.com/..."
          />
        </div>

        <div className="adm-input-group">
          <label>LinkedIn</label>
          <input
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            placeholder="https://linkedin.com/..."
          />
        </div>

        <div className="adm-input-group">
          <label>Facebook</label>
          <input
            name="facebook"
            value={formData.facebook}
            onChange={handleChange}
            placeholder="https://facebook.com/..."
          />
        </div>

        <button className="adm-submit-btn">
          {editMember ? "Update Member" : "Submit Member"}
        </button>

      </form>

    </div>
  );
};

export default TeamForm;
