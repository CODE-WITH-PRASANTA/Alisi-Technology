import React, { useState } from "react";
import TeamForm from "../../Component/TeamForm";
import TeamTable from "../../Component/TeamTable";
import "./TeamMemberPosting.css";

const TeamManagerPage = () => {

  const [members, setMembers] = useState([]);
  const [editMember, setEditMember] = useState(null);

  const addMember = (member) => {
    setMembers([...members, { ...member, id: Date.now() }]);
  };

  const updateMember = (updated) => {
    setMembers(members.map(m => m.id === updated.id ? updated : m));
    setEditMember(null);
  };

  const deleteMember = (id) => {
    setMembers(members.filter(m => m.id !== id));
  };

  return (
    <div className="adm-blog-manager-container">

      <div className="adm-blog-left-panel">
        <TeamForm
          addMember={addMember}
          editMember={editMember}
          updateMember={updateMember}
        />
      </div>

      <div className="adm-blog-right-panel">
        <TeamTable
          members={members}
          onEdit={setEditMember}
          onDelete={deleteMember}
        />
      </div>

    </div>
  );
};

export default TeamManagerPage;
