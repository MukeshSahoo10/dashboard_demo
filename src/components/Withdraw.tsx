const WithdrawPage = () => {
  return (
    <div className="flex">
      {/* Main Content */}
      <div className="flex-1 ml-64 p-8">
        <h2 className="text-3xl font-bold mb-6">Withdraw</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-2xl font-semibold">Working Withdrawal</h3>
            <form className="space-y-4 mt-4">
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter amount to withdraw"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-4 rounded-md hover:bg-blue-700"
              >
                Withdraw
              </button>
            </form>
          </div>

          <div className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-2xl font-semibold">Withdrawal History</h3>
            <ul>
              <li className="py-2">Withdrawal 1 - $50.00</li>
              <li className="py-2">Withdrawal 2 - $30.00</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawPage;
