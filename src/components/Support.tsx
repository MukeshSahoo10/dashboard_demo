import React, { useState } from "react";

const Support = () => {
  // State variables for handling ticket form input
  const [ticketTitle, setTicketTitle] = useState<string>("");
  const [ticketDescription, setTicketDescription] = useState<string>("");
  const [ticketCategory, setTicketCategory] = useState<string>("");

  const [ticketSubmitted, setTicketSubmitted] = useState<boolean>(false);

  // Handle ticket form submission
  const handleTicketSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle ticket submission logic (e.g., send to backend)
    setTicketSubmitted(true);
  };

  return (
    <div className="flex justify-center mt-8 px-4">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-semibold mb-6">Support</h1>

        {/* Create Ticket Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">Raise Ticket</h2>
          {!ticketSubmitted ? (
            <form onSubmit={handleTicketSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 mb-2"
                  htmlFor="ticketTitle"
                >
                  Ticket Title
                </label>
                <input
                  type="text"
                  id="ticketTitle"
                  value={ticketTitle}
                  onChange={(e) => setTicketTitle(e.target.value)}
                  className="border border-gray-300 rounded-md p-2 w-full"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 mb-2"
                  htmlFor="ticketCategory"
                >
                  Category
                </label>
                <select
                  id="ticketCategory"
                  value={ticketCategory}
                  onChange={(e) => setTicketCategory(e.target.value)}
                  className="border border-gray-300 rounded-md p-2 w-full"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Technical">Technical</option>
                  <option value="Account">Account</option>
                  <option value="Billing">Billing</option>
                  <option value="General">General</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 mb-2"
                  htmlFor="ticketDescription"
                >
                  Description
                </label>
                <textarea
                  id="ticketDescription"
                  value={ticketDescription}
                  onChange={(e) => setTicketDescription(e.target.value)}
                  className="border border-gray-300 rounded-md p-2 w-full"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full"
              >
                Submit Ticket
              </button>
            </form>
          ) : (
            <div className="text-center text-green-600 mt-4">
              <p>Your support ticket has been submitted successfully!</p>
            </div>
          )}
        </div>

        {/* Email Support Section */}
        <div className="w-full mb-6">
          <h2 className="text-xl font-semibold mb-4">Email Support</h2>
          <p className="text-gray-700">
            If you need assistance, feel free to reach out to us via email:
          </p>
          <p className="font-semibold text-blue-600">support@example.com</p>
        </div>
      </div>
    </div>
  );
};
export default Support;
