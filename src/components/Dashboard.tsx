import React from "react";
import {
  Users,
  Wallet,
  DollarSign,
  Lock,
  Unlock,
  PieChart,
  ArrowRightLeft,
  Link,
} from "lucide-react";

const Dashboard: React.FC = () => {
  return (
    <div className="flex">
      {/* Main Content */}
      <div className="flex-1 ml-64 p-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Global Community</p>
                <h4 className="text-2xl font-semibold">195973</h4>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <Users size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Total Bonus</p>
                <h4 className="text-2xl font-semibold">$0.0000</h4>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <Wallet size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Total Earning</p>
                <h4 className="text-2xl font-semibold">$0.0000</h4>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                <DollarSign size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Your Deposit</p>
                <h4 className="text-2xl font-semibold">$0.0000</h4>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                <Wallet size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Rewards Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Locked Rewards</p>
                <h4 className="text-2xl font-semibold">$0.0000</h4>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                <Lock size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Unlocked Rewards</p>
                <h4 className="text-2xl font-semibold">$0.0000</h4>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <Unlock size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Direct Referral</p>
                <h4 className="text-2xl font-semibold">0</h4>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <Users size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Team Business</p>
                <h4 className="text-2xl font-semibold">$0.0000</h4>
              </div>
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                <PieChart size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-6 mt-8">
          <button className="bg-blue-600 text-white p-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors">
            <Wallet size={20} />
            <span>Pay TRX</span>
          </button>
          <button className="bg-blue-600 text-white p-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors">
            <ArrowRightLeft size={20} />
            <span>Voucher Transfer</span>
          </button>
          <button className="bg-blue-600 text-white p-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors">
            <ArrowRightLeft size={20} />
            <span>Web Transfer</span>
          </button>
        </div>

        {/* Referral Link */}
        <button className="w-full mt-6 bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-colors">
          <Link size={20} className="inline-block mr-2" />
          Copy Referral Link
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
