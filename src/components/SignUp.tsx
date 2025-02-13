import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    country: "",
    referralId: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  // Form Validation
  const validate = () => {
    let tempErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim())
      tempErrors.fullName = "Full Name is required";
    if (!formData.email.match(/^\S+@\S+\.\S+$/))
      tempErrors.email = "Enter a valid email";
    if (!formData.mobile.match(/^\d{10}$/))
      tempErrors.mobile = "Enter a valid 10-digit mobile number";
    if (!formData.country) tempErrors.country = "Select a country";
    if (formData.password.length < 6)
      tempErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword)
      tempErrors.confirmPassword = "Passwords do not match";
    if (!formData.termsAccepted)
      tempErrors.termsAccepted = "You must accept the Terms and Conditions";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      alert("Account created successfully!");
      navigate("/signin");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md md:max-w-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
          />
          <InputField
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <InputField
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            error={errors.mobile}
          />
          <SelectField
            name="country"
            value={formData.country}
            onChange={handleChange}
            error={errors.country}
          />
          <InputField
            type="text"
            name="referralId"
            placeholder="Referral ID *"
            value={formData.referralId}
            onChange={handleChange}
          />
          <InputField
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />
          <InputField
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
          />
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="terms" className="text-sm">
              I agree to the{" "}
              <span className="text-blue-600 cursor-pointer">
                Terms and Conditions
              </span>
              .
            </label>
          </div>
          {errors.termsAccepted && (
            <p className="text-red-500 text-sm">{errors.termsAccepted}</p>
          )}
          <button
            type="submit"
            className={`w-full py-2 text-white rounded ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-600">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

// Reusable Input Component
const InputField = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  error,
}: {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}) => (
  <div>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      aria-label={name}
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

// Reusable Select Component
const SelectField = ({
  name,
  value,
  onChange,
  error,
}: {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}) => (
  <div>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      <option value="">Select Country</option>
      <option value="India">India</option>
      <option value="USA">USA</option>
      <option value="UK">UK</option>
    </select>
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

export default SignUp;
