import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

interface SignInProps {
  onLogin: (email: string) => void;
}

interface FormData {
  email: string;
  password: string;
}

const SignIn: React.FC<SignInProps> = ({ onLogin }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError(null);

    try {
      // Simulated API request (replace with actual API call)
      const isAuthenticated = await fakeAuthService(data.email, data.password);
      if (isAuthenticated) {
        onLogin(data.email);
        navigate("/dashboard");
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign In</h2>

        {error && <p className="text-red-600 text-center">{error}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 border rounded"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full p-2 border rounded"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-600 text-sm">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className={`w-full py-2 rounded text-white ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

// Simulated authentication function (replace with real API request)
const fakeAuthService = (email: string, password: string): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(email === "user@example.com" && password === "password");
    }, 1000);
  });
};

export default SignIn;
