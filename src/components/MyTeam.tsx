const MyTeam = () => {
  return (
    <div className="flex">
      {/* Main Content */}
      <div className="flex-1 ml-64 p-8">
        <h2 className="text-3xl font-bold mb-6">My Directs</h2>

        <div className="bg-white p-6 rounded-md shadow-md">
          <ul>
            <li className="py-2">User 1</li>
            <li className="py-2">User 2</li>
            <li className="py-2">User 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyTeam;
