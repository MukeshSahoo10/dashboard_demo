import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code"; // Import QRCode component from react-qr-code

const DepositPage = () => {
  const [amount, setAmount] = useState<string>("");
  const [depositMethod, setDepositMethod] = useState<string>("usdt");
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(900); // 15 minutes in seconds

  const handleDeposit = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount && depositMethod) {
      setShowPopup(true);
    }
  };

  useEffect(() => {
    if (showPopup && timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(countdown);
    } else if (timer === 0) {
      setShowPopup(false);
    }
  }, [showPopup, timer]);

  const handleClosePopup = () => {
    setShowPopup(false);
    setTimer(900);
  };

  return (
    <div className="flex">
      <div className="flex-1 ml-64 p-8">
        <h2 className="text-3xl font-bold mb-6">Deposit USDT</h2>

        <form onSubmit={handleDeposit} className="space-y-4">
          <div>
            <label htmlFor="depositAmount" className="block text-gray-700">
              Amount (USDT)
            </label>
            <input
              type="text"
              id="depositAmount"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter deposit amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="depositMethod" className="block text-gray-700">
              Deposit Method
            </label>
            <select
              id="depositMethod"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={depositMethod}
              onChange={(e) => setDepositMethod(e.target.value)}
            >
              <option value="usdt">USDT</option>
              <option value="bitcoin">Bitcoin</option>
              <option value="ethereum">Ethereum</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-4 rounded-md hover:bg-blue-700"
          >
            Deposit
          </button>
        </form>

        {showPopup && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg relative">
              <button
                onClick={handleClosePopup}
                className="absolute top-2 right-2 text-xl text-gray-600"
              >
                ×
              </button>
              <h3 className="text-xl font-bold mb-4">Scan to Deposit</h3>
              <QRCode
                value={`Amount: ${amount} ${depositMethod}`} // QR code value
                size={200} // QR code size
              />
              <p className="mt-4 text-gray-700">
                Time Left: {Math.floor(timer / 60)}:
                {String(timer % 60).padStart(2, "0")}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DepositPage;
