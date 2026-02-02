import { FiEdit, FiTrash2 } from "react-icons/fi";

const prices = [
  {
    id: 1,
    title: "Basic Plan",
    category: "Website",
    price: "₹5,000",
    duration: "Monthly",
    features: ["5 Pages", "Basic SEO", "Email Support"],
    status: "Active",
  },
  {
    id: 2,
    title: "Pro Plan",
    category: "Website",
    price: "₹15,000",
    duration: "Yearly",
    features: ["Unlimited Pages", "Advanced SEO", "Priority Support"],
    status: "Inactive",
  },
];

const ViewPrices = () => {
  return (
    <div className="h-[calc(100vh-4rem)] bg-[#0f141b] border border-slate-800 rounded-2xl flex flex-col">
      
      {/* HEADER */}
      <h2 className="text-xl font-semibold p-6 border-b border-slate-800 sticky top-0 bg-[#0f141b] z-10">
        Price Management
      </h2>

      {/* SCROLL AREA */}
      <div className="flex-1 overflow-y-auto overflow-x-auto px-6 pb-6">
        <table className="min-w-[900px] w-full text-sm">
          <thead className="sticky top-0 bg-[#0f141b] z-10">
            <tr className="text-left text-slate-400 border-b border-slate-800">
              <th className="py-3">Plan</th>
              <th>Category</th>
              <th>Price</th>
              <th>Duration</th>
              <th>Features</th>
              <th>Status</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {prices.map((p) => (
              <tr
                key={p.id}
                className="border-b border-slate-800 hover:bg-[#161c25] transition"
              >
                <td className="py-3 font-medium">{p.title}</td>
                <td>{p.category}</td>
                <td className="text-blue-400 font-semibold">{p.price}</td>
                <td>{p.duration}</td>

                <td>
                  <ul className="space-y-1 text-slate-400">
                    {p.features.map((f, i) => (
                      <li key={i}>• {f}</li>
                    ))}
                  </ul>
                </td>

                <td>
                  <span
                    className={`px-3 py-1 text-xs rounded-full
                    ${
                      p.status === "Active"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>

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

        {prices.length === 0 && (
          <p className="text-center text-slate-400 py-10">
            No prices found
          </p>
        )}
      </div>
    </div>
  );
};

export default ViewPrices;
