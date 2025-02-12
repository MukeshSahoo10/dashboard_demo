const IncomeReport = () => {
  return (
    <div className="flex">
      {/* Main Content */}
      <div className="flex-1 ml-64 p-8">
        <h2 className="text-3xl font-bold mb-6">Income Report</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-2xl font-semibold">Single Leg Level Income</h3>
            <p className="text-xl mt-4">$100.00</p>
          </div>

          <div className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-2xl font-semibold">Team Income (Bonus)</h3>
            <p className="text-xl mt-4">$50.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeReport;
