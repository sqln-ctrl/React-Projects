import { useState } from "react";
import { useNavigate } from "react-router-dom";

const validate = (fields) => {
  const errors = {};

  if (!fields.fullName.trim()) {
    errors.fullName = "Full name is required.";
  } else if (fields.fullName.trim().length < 2) {
    errors.fullName = "Name must be at least 2 characters.";
  }

  if (!fields.email) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!fields.password) {
    errors.password = "Password is required.";
  } else if (fields.password.length < 8) {
    errors.password = "Password must be at least 8 characters.";
  } else if (!/[A-Z]/.test(fields.password)) {
    errors.password = "Include at least one uppercase letter.";
  } else if (!/[0-9]/.test(fields.password)) {
    errors.password = "Include at least one number.";
  }

  if (!fields.confirmPassword) {
    errors.confirmPassword = "Please confirm your password.";
  } else if (fields.password !== fields.confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
  }

  if (!fields.agree) {
    errors.agree = "You must accept the terms to continue.";
  }

  return errors;
};

const getPasswordStrength = (password) => {
  if (!password) return { score: 0, label: "", color: "" };
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 1) return { score, label: "Weak", color: "bg-rose-400" };
  if (score <= 2) return { score, label: "Fair", color: "bg-amber-400" };
  if (score <= 3) return { score, label: "Good", color: "bg-yellow-400" };
  if (score <= 4) return { score, label: "Strong", color: "bg-emerald-400" };
  return { score, label: "Very strong", color: "bg-emerald-500" };
};

function ErrorMsg({ message }) {
  if (!message) return null;
  return (
    <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
      <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
      {message}
    </p>
  );
}

function InputField({ label, id, type = "text", value, onChange, onBlur, error, placeholder, rightSlot }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold tracking-wide text-slate-500 uppercase mb-1.5">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={`w-full h-11 px-3.5 ${rightSlot ? "pr-11" : ""} text-sm rounded-xl border transition-all duration-150 outline-none bg-white text-slate-800 placeholder-slate-300
            ${error
              ? "border-rose-400 ring-2 ring-rose-100 focus:ring-rose-200"
              : "border-slate-200 hover:border-slate-300 focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
            }`}
        />
        {rightSlot && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">{rightSlot}</div>
        )}
      </div>
      <ErrorMsg message={error} />
    </div>
  );
}

function EyeIcon({ open }) {
  return open ? (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
    </svg>
  ) : (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

export default function Signup() {
  const navigate = useNavigate();

  const [fields, setFields] = useState({
    fullName: "", email: "", password: "", confirmPassword: "", agree: false,
  });
  const [touched, setTouched] = useState({
    fullName: false, email: false, password: false, confirmPassword: false, agree: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | loading | success

  const errors = validate(fields);
  const strength = getPasswordStrength(fields.password);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFields((f) => ({ ...f, [id]: type === "checkbox" ? checked : value }));
  };

  const handleBlur = (e) => {
    setTouched((t) => ({ ...t, [e.target.id]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ fullName: true, email: true, password: true, confirmPassword: true, agree: true });
    if (Object.keys(errors).length > 0) return;

    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-violet-50 px-4">
        <div className="w-full max-w-md bg-white border border-slate-100 rounded-2xl shadow-sm p-10 text-center">
          <div className="w-16 h-16 bg-violet-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-violet-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-1 tracking-tight">Account created!</h2>
          <p className="text-sm text-slate-500 mb-6">Welcome aboard, {fields.fullName.split(" ")[0]}. You're all set.</p>
          <button
            onClick={() => navigate("/login")}
            className="w-full h-11 bg-violet-500 hover:bg-violet-600 text-white text-sm font-semibold rounded-xl transition active:scale-[0.98]"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-violet-50 px-4 py-10">
      <div className="w-full max-w-md">

        {/* Card */}
        <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
          {/* Top accent */}
          <div className="h-1 w-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400" />

          <div className="px-8 py-9">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-7 h-7 rounded-lg bg-violet-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-violet-600 tracking-tight">Acme Inc.</span>
              </div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight mb-1">Create an account</h1>
              <p className="text-sm text-slate-500">Fill in the details below to get started.</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate className="space-y-4">

              {/* Full Name */}
              <InputField
                label="Full name"
                id="fullName"
                value={fields.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Jane Doe"
                error={touched.fullName ? errors.fullName : ""}
              />

              {/* Email */}
              <InputField
                label="Email address"
                id="email"
                type="email"
                value={fields.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="you@example.com"
                error={touched.email ? errors.email : ""}
              />

              {/* Password */}
              <div>
                <InputField
                  label="Password"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={fields.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Min. 8 characters"
                  error={touched.password ? errors.password : ""}
                  rightSlot={
                    <button type="button" onClick={() => setShowPassword((v) => !v)}
                      className="text-slate-400 hover:text-slate-600 transition-colors" tabIndex={-1}>
                      <EyeIcon open={showPassword} />
                    </button>
                  }
                />
                {/* Password strength bar */}
                {fields.password && (
                  <div className="mt-2">
                    <div className="flex gap-1 mb-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i}
                          className={`h-1 flex-1 rounded-full transition-all duration-300 ${i <= strength.score ? strength.color : "bg-slate-100"}`}
                        />
                      ))}
                    </div>
                    <p className={`text-xs font-medium ${
                      strength.score <= 1 ? "text-rose-400" :
                      strength.score <= 2 ? "text-amber-400" :
                      strength.score <= 3 ? "text-yellow-500" : "text-emerald-500"
                    }`}>{strength.label}</p>
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <InputField
                label="Confirm password"
                id="confirmPassword"
                type={showConfirm ? "text" : "password"}
                value={fields.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Re-enter your password"
                error={touched.confirmPassword ? errors.confirmPassword : ""}
                rightSlot={
                  <button type="button" onClick={() => setShowConfirm((v) => !v)}
                    className="text-slate-400 hover:text-slate-600 transition-colors" tabIndex={-1}>
                    <EyeIcon open={showConfirm} />
                  </button>
                }
              />

              {/* Terms checkbox */}
              <div>
                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    id="agree"
                    checked={fields.agree}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="mt-0.5 w-4 h-4 rounded accent-violet-500 cursor-pointer flex-shrink-0"
                  />
                  <span className="text-sm text-slate-500 leading-snug">
                    I agree to the{" "}
                    <a href="#" className="text-violet-500 font-medium hover:underline">Terms of Service</a>
                    {" "}and{" "}
                    <a href="#" className="text-violet-500 font-medium hover:underline">Privacy Policy</a>
                  </span>
                </label>
                <ErrorMsg message={touched.agree ? errors.agree : ""} />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full h-11 rounded-xl text-sm font-semibold tracking-wide transition-all duration-150 mt-1
                  ${status === "loading"
                    ? "bg-violet-300 text-white cursor-not-allowed"
                    : "bg-violet-500 hover:bg-violet-600 active:scale-[0.98] text-white shadow-sm shadow-violet-200"
                  }`}
              >
                {status === "loading" ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Creating account…
                  </span>
                ) : "Create account"}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-5">
              <div className="flex-1 h-px bg-slate-100" />
              <span className="text-xs text-slate-400 uppercase tracking-widest">or</span>
              <div className="flex-1 h-px bg-slate-100" />
            </div>

            {/* Google */}
            <button className="w-full h-11 flex items-center justify-center gap-2.5 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98] rounded-xl text-sm text-slate-700 font-medium transition-all duration-150">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign up with Google
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-slate-500 mt-6">
          Already have an account?{" "}
          <a
            href="/login"
            onClick={(e) => { e.preventDefault(); navigate("/login"); }}
            className="text-violet-500 font-semibold hover:text-violet-700 transition-colors"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}

