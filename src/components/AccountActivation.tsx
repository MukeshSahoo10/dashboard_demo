const ActivateAccount = () => {
  return (
    <div className="flex">
      {/* Main Content */}
      <div className="flex-1 ml-64 p-8">
        <h2 className="text-3xl font-bold mb-6">Activate Your Account</h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="activationCode" className="block text-gray-700">
              Activation Code
            </label>
            <input
              type="text"
              id="activationCode"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter activation code"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-4 rounded-md hover:bg-blue-700"
          >
            Activate Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default ActivateAccount;
