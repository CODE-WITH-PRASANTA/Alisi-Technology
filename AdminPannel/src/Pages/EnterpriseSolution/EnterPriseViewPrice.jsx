import { useEffect, useState } from "react";
import API_URL from "../../Api/Api";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const EnterpriseViewPrice = ({ refreshKey, onEdit }) => {
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPrices = async () => {
    try {
      setLoading(true);
      const res = await API_URL.get("/enterprise-prices"); // ✅ FIXED
      setPrices(res.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrices();
  }, [refreshKey]);

  const deletePrice = async (id) => {
    if (!window.confirm("Delete this Enterprise plan?")) return;

    try {
      await API_URL.delete(`/enterprise-prices/${id}`); // ✅ FIXED
      fetchPrices();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-[#0f141b] border border-slate-800 rounded-2xl p-6">
      <h2 className="text-xl font-semibold mb-4">Enterprise Price Management</h2>

      {loading ? (
        <p className="text-slate-400">Loading...</p>
      ) : prices.length === 0 ? (
        <p className="text-slate-400">No prices found</p>
      ) : (
        <table className="w-full text-sm">
          <thead className="border-b border-slate-800 text-slate-400">
            <tr>
              <th className="text-left py-2">Plan</th>
              <th className="text-left">Price</th>
              <th className="text-left">Duration</th>
              <th className="text-left">Features</th>
              <th className="text-left">Status</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((p) => (
              <tr key={p._id} className="border-b border-slate-800">
                <td className="py-2">{p.title}</td>
                <td className="text-blue-400">{p.price}</td>
                <td>{p.duration}</td>

                <td>
                  {Array.isArray(p.features) && p.features.length > 0 ? (
                    <ul className="text-sm text-slate-400">
                      {p.features.map((f, i) => (
                        <li key={i}>• {f}</li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-slate-500 text-sm">No features</span>
                  )}
                </td>

                <td>{p.status}</td>

                <td className="text-right space-x-3">
                  <button onClick={() => onEdit?.(p)} className="text-blue-400">
                    <FiEdit />
                  </button>
                  <button onClick={() => deletePrice(p._id)} className="text-red-400">
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EnterpriseViewPrice;