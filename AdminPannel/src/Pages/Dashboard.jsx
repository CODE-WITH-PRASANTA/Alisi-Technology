const stats = [
  { title: "Sales", value: "6.5k", change: "+4.3%" },
  { title: "Customers", value: "12k", change: "+7.2%" },
  { title: "Products", value: "47k", change: "+8%" },
  { title: "Revenue", value: "$128k", change: "+3.69%" },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-[#0f141b] border border-slate-800 rounded-xl p-5"
          >
            <p className="text-sm text-slate-400">{item.title}</p>
            <h2 className="text-2xl font-bold mt-2">{item.value}</h2>
            <span className="text-green-400 text-sm">{item.change}</span>
          </div>
        ))}
      </div>

      {/* CHART PLACEHOLDER */}
      <div className="bg-[#0f141b] border border-slate-800 rounded-xl p-6 h-[320px] flex items-center justify-center text-slate-500">
        Sales Report Chart
      </div>
    </div>
  );
};

export default Dashboard;
