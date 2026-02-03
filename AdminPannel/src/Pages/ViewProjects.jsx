import { useEffect, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const ViewProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/projects");
      const data = await res.json();

      console.log("API RESPONSE:", data); // 🔥 DEBUG

      // SAFETY: handle all cases
      if (Array.isArray(data.projects)) {
        setProjects(data.projects);
      } else {
        setProjects([]);
      }
    } catch (err) {
      console.error("Failed to fetch projects", err);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-4rem)] bg-[#0f141b] border border-slate-800 rounded-2xl flex flex-col">

      {/* HEADER */}
      <h2 className="text-xl font-semibold p-6 border-b border-slate-800 sticky top-0 bg-[#0f141b] z-10">
        Projects
      </h2>

      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto overflow-x-auto px-6 pb-6">

        {loading && (
          <p className="text-center text-slate-400 py-10">
            Loading projects...
          </p>
        )}

        {!loading && projects.length > 0 && (
          <table className="min-w-[1100px] w-full text-sm">
            <thead className="sticky top-0 bg-[#0f141b] z-10">
              <tr className="text-left text-slate-400 border-b border-slate-800">
                <th className="py-3">Title</th>
                <th>Client</th>
                <th>Company</th>
                <th>Budget</th>
                <th>Location</th>
                <th>Sector</th>
                <th>Category</th>
                <th>Complete Date</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {projects.map((p) => (
                <tr
                  key={p._id}
                  className="border-b border-slate-800 hover:bg-[#161c25] transition"
                >
                  <td className="py-3 font-medium">{p.title}</td>
                  <td>{p.clientName}</td>
                  <td>{p.companyName}</td>
                  <td>{p.budget}</td>
                  <td>{p.location}</td>
                  <td>{p.sector}</td>
                  <td>{p.category}</td>
                  <td>{p.completeDate}</td>
                  <td className="text-right space-x-3">
                    <button className="text-blue-400 hover:text-blue-500">
                      <FiEdit />
                    </button>
                    <button className="text-red-400 hover:text-red-500">
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {!loading && projects.length === 0 && (
          <p className="text-center text-slate-400 py-10">
            No projects found
          </p>
        )}
      </div>
    </div>
  );
};

export default ViewProjects;
