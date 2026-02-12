import { useEffect, useState } from "react";
import API_URL from "../Api/Api";
import { FiTrash2 } from "react-icons/fi";

export default function ContactAdminPage() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  const fetchContacts = async () => {
    try {
      const res = await API_URL.get("/contacts");
      setContacts(res.data.data);
    } catch (err) {
      console.error("Error fetching contacts:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this contact?"
    );
    if (!confirmDelete) return;

    try {
      setDeletingId(id);
      await API_URL.delete(`/contacts/${id}`);
      setContacts((prev) =>
        prev.filter((item) => item._id !== id)
      );
    } catch (err) {
      console.error("Delete failed:", err);
    } finally {
      setDeletingId(null);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-white">
        Contact Records
      </h1>

      {loading ? (
        <p className="text-slate-400">Loading contacts...</p>
      ) : contacts.length === 0 ? (
        <p className="text-slate-400">No contact submissions yet.</p>
      ) : (
        <div className="rounded-xl border border-slate-700 overflow-hidden">
          {/* Scroll Container */}
          <div className="max-h-[500px] overflow-auto custom-scrollbar">
            <table className="w-full min-w-[900px] text-sm text-left text-slate-300">
              <thead className="bg-[#1b2230] text-white sticky top-0 z-10">
                <tr>
                  <th className="px-4 py-3">Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Service</th>
                  <th>Message</th>
                  <th>Date</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {contacts.map((item) => (
                  <tr
                    key={item._id}
                    className="border-t border-slate-700 hover:bg-[#161c25] transition"
                  >
                    <td className="px-4 py-3 font-medium">
                      {item.name}
                    </td>

                    <td>{item.email}</td>

                    <td>{item.phone}</td>

                    <td>{item.service}</td>

                    <td className="max-w-xs truncate">
                      {item.message}
                    </td>

                    <td>
                      {new Date(item.createdAt).toLocaleDateString()}
                    </td>

                    <td className="text-center">
                      <button
                        onClick={() => handleDelete(item._id)}
                        disabled={deletingId === item._id}
                        className="text-red-400 hover:text-red-600 transition"
                      >
                        {deletingId === item._id ? (
                          "Deleting..."
                        ) : (
                          <FiTrash2 />
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}