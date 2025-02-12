import React, { useState } from "react";

const Profile = () => {
  // Track if email is being edited and validate the edit process
  const [isEmailEditable, setIsEmailEditable] = useState(false);
  const [email, setEmail] = useState("om.keshari@example.com");
  const [newEmail, setNewEmail] = useState("");
  const [emailEdited, setEmailEdited] = useState(false); // Prevent further email edits

  // Handler for Email Change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewEmail(e.target.value);
  };

  const handleSaveEmail = () => {
    if (newEmail && !emailEdited) {
      setEmail(newEmail);
      setEmailEdited(true); // Lock further email edits
      setIsEmailEditable(false); // Stop editing mode
    }
  };

  // Handler for Password Reset Request
  const handlePasswordResetRequest = () => {
    // Here you can implement the logic to handle password reset
    alert("Password reset request sent.");
  };

  return (
    <div className="flex justify-center mt-8 px-4">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-semibold mb-6">Profile</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <strong>Name:</strong> Om Keshari Panda
          </div>
          <div className="mb-4">
            <strong>Phone Number:</strong> 9980137757
          </div>
          <div className="mb-4">
            <strong>Country:</strong> India
          </div>
          <div className="mb-4">
            <strong>Address:</strong> 123 Street, City, Country
          </div>
          <div className="mb-4">
            <strong>Status:</strong> Package Name
          </div>
          <div className="mb-4">
            <strong>Crypto Withdrawal Address:</strong> 0x1234abcd5678efgh
          </div>

          {/* Editable Email Field */}
          <div className="mb-4">
            <strong>Email:</strong>
            {!isEmailEditable || emailEdited ? (
              <span>{email}</span>
            ) : (
              <input
                type="email"
                value={newEmail || email}
                onChange={handleEmailChange}
                className="border border-gray-300 rounded-md p-2 w-full mt-2"
              />
            )}
          </div>

          {/* Email edit/save button */}
          {!isEmailEditable ? (
            !emailEdited ? (
              <button
                onClick={() => setIsEmailEditable(true)}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg mt-2"
              >
                Edit Email
              </button>
            ) : (
              <span className="text-green-600 mt-2 block">
                Email updated successfully
              </span>
            )
          ) : (
            <div className="flex space-x-4">
              <button
                onClick={handleSaveEmail}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Save Email
              </button>
              <button
                onClick={() => setIsEmailEditable(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          )}

          <div className="mt-6">
            <button
              onClick={handlePasswordResetRequest}
              className="bg-red-600 text-white px-6 py-3 rounded-lg w-full"
            >
              Request Password Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
