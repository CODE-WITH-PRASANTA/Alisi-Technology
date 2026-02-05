import React from "react";

const TeamTable = ({ members, onEdit, onDelete }) => {
  return (
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
                  No team members available
                </td>
              </tr>
            )}

            {members.map((member) => (
              <tr key={member._id}>
                <td>
                  {member.photo && (
                    <img
                      src={`http://localhost:5000/${member.photo}`}
                      className="adm-table-img"
                      alt={member.name}
                    />
                  )}
                </td>

                <td>{member.name}</td>
                <td>{member.designation}</td>
                <td className="adm-desc-cell">{member.instagram}</td>
                <td className="adm-desc-cell">{member.linkedin}</td>
                <td className="adm-desc-cell">{member.facebook}</td>

                <td>
                  <button
                    className="adm-edit-btn"
                    onClick={() => onEdit(member)}
                  >
                    Edit
                  </button>
                  <button
                    className="adm-delete-btn"
                    onClick={() => onDelete(member._id)}
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
  );
};

export default TeamTable;