import { useEffect, useState } from "react";
import API_URL from "../../Api/Api";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const CognitiveViewPrice = ({ refreshKey, onEdit }) => {
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPrices = async () => {
    try {
      setLoading(true);
      const res = await API_URL.get("/cognitive-prices");
      setPrices(res.data || []);
    } catch (err) {
      console.error("FETCH ERROR:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrices();
  }, [refreshKey]);

  const deletePrice = async (id) => {
    if (!window.confirm("Delete this Cognitive plan?")) return;

    try {
      await API_URL.delete(`/cognitive-prices/${id}`);
      fetchPrices();
    } catch (err) {
      console.error("DELETE ERROR:", err);
    }
  };

  return (
    <div className="bg-[#0f141b] border border-slate-800 rounded-2xl flex flex-col h-[500px]">

      {/* HEADER */}
      <div className="p-6 border-b border-slate-800">
        <h2 className="text-xl font-semibold">Cognitive Price Management</h2>
      </div>

      {/* BODY */}
      <div className="flex-1 overflow-auto">
        {loading ? (
          <p className="p-6 text-slate-400">Loading prices...</p>
        ) : prices.length === 0 ? (
          <p className="p-6 text-slate-400">No prices found</p>
        ) : (
          <div className="min-w-[1200px]">
            <table className="w-full text-sm border-collapse">

              <thead className="sticky top-0 bg-[#0f141b] z-10">
                <tr className="text-slate-400 border-b border-slate-800">
                  <th className="py-3 px-4 text-left">Plan</th>
                  <th className="px-4 text-left">Category</th>
                  <th className="px-4 text-left">Price</th>
                  <th className="px-4 text-left">Duration</th>
                  <th className="px-4 text-left">Features</th>
                  <th className="px-4 text-left">Status</th>
                  <th className="px-4 text-right">Actions</th>
                </tr>
              </thead>

              <tbody>
                {prices.map((p) => (
                  <tr
                    key={p._id}
                    className="border-b border-slate-800 hover:bg-[#161c25] transition"
                  >
                    <td className="py-3 px-4 font-medium">
                      {p.title}
                    </td>

                    <td className="px-4">
                      {p.category || "COGNITIVE"}
                    </td>

                    <td className="px-4 text-blue-400 font-semibold">
                      {p.price}
                    </td>

                    <td className="px-4">
                      {p.duration}
                    </td>

                    {/* ✅ FEATURES COLUMN */}
                    <td className="px-4">
                      {p.features && p.features.length > 0 ? (
                        <ul className="space-y-1 text-slate-400 text-sm">
                          {p.features.map((f, i) => (
                            <li key={i}>• {f}</li>
                          ))}
                        </ul>
                      ) : (
                        <span className="text-slate-500 text-sm">
                          No features
                        </span>
                      )}
                    </td>

                    <td className="px-4">
                      <span
                        className={`px-3 py-1 text-xs rounded-full ${
                          p.status === "Active"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {p.status}
                      </span>
                    </td>

                    <td className="px-4 text-right space-x-3">
                      <button
                        onClick={() => onEdit?.(p)}
                        className="text-blue-400 hover:text-blue-500"
                      >
                        <FiEdit />
                      </button>

                      <button
                        onClick={() => deletePrice(p._id)}
                        className="text-red-400 hover:text-red-500"
                      >
                        <FiTrash2 />
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default CognitiveViewPrice;