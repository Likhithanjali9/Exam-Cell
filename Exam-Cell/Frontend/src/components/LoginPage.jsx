import React, { useState } from "react";

const LoginPage = () => {
  const [role, setRole] = useState("coe");

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#f9f9f9]">
      {/* Graduation cap, centered and floating above the card */}
      <div className="w-full flex justify-center mt-14">
        <div className="bg-[#991b1b] w-14 h-14 rounded-full flex items-center justify-center shadow-lg mb-[-1.75rem] z-10">
          <svg
            className="w-8 h-8 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.7}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Mortarboard */}
            <polygon
              fill="white"
              points="12,3 2,8.5 12,14 22,8.5"
            />
            {/* Headband */}
            <rect
              x="7"
              y="12.2"
              width="10"
              height="3"
              fill="white"
              rx="1"
            />
            {/* Tassel line */}
            <line
              x1="12"
              y1="14"
              x2="12"
              y2="19"
              stroke="white"
              strokeWidth={1.3}
            />
            {/* Tassel ball */}
            <circle
              cx="12"
              cy="20"
              r="1"
              fill="white"
            />
          </svg>
        </div>
      </div>
      {/* Login card */}
      <div className="bg-white w-full max-w-xl rounded-3xl shadow-lg border-4 border-gray-200 px-8 py-10 flex flex-col items-center mt-4">
        {/* Titles */}
        <div className="text-xl md:text-2xl font-extrabold text-center text-[#22235b] mb-1">
          College Examination Management System
        </div>
        <div className="text-base text-center mb-3 font-extrabold text-[#22235b] tracking-wide">
          RGUKT RK Valley
        </div>
        <div className="text-xl font-bold mb-1 text-center text-black">Login</div>
        <div className="text-xs text-gray-600 mb-2 text-center">
          Choose your login type to continue
        </div>
        {/* Role Selector */}
        <div className="flex justify-center mb-5 gap-2">
          <button
            type="button"
            className={`px-5 py-2 rounded-l-full font-bold text-sm border transition-all duration-200 ${
              role === "coe"
                ? "bg-[#ededed] text-[#991b1b] border-[#e4e4e7]"
                : "bg-white text-gray-600 border-[#e4e4e7] hover:bg-gray-100"
            }`}
            onClick={() => setRole("coe")}
          >
            <span className="mr-1.5 align-middle">
              <svg width="17" height="17" viewBox="0 0 24 24" className="inline">
                <circle cx="12" cy="12" r="8" fill={role === "coe" ? "#991b1b" : "#eee"} />
                {role === "coe" && <circle cx="12" cy="12" r="5" fill="#fff" />}
              </svg>
            </span>
            COE Admin
          </button>
          <button
            type="button"
            className={`px-5 py-2 rounded-r-full font-bold text-sm border transition-all duration-200 ${
              role === "faculty"
                ? "bg-[#ededed] text-[#991b1b] border-[#e4e4e7]"
                : "bg-white text-gray-600 border-[#e4e4e7] hover:bg-gray-100"
            }`}
            onClick={() => setRole("faculty")}
          >
            <span className="mr-1.5 align-middle">
              <svg width="17" height="17" viewBox="0 0 24 24" className="inline">
                <circle cx="12" cy="12" r="8" fill={role === "faculty" ? "#991b1b" : "#eee"} />
                {role === "faculty" && <circle cx="12" cy="12" r="5" fill="#fff" />}
              </svg>
            </span>
            Faculty/Staff
          </button>
        </div>
        {/* Login Form */}
        <form className="flex flex-col items-center w-full gap-0" autoComplete="off">
          <label
            className="mb-1 text-[14px] font-bold text-gray-700 w-full text-left"
            htmlFor="collegeEmail"
          >
            college Email
          </label>
          <input
            className="mb-3 w-full bg-[#f6f6f6] border border-gray-300 rounded-md px-3 py-2 text-sm font-semibold"
            id="collegeEmail"
            type="email"
            disabled={role === "coe"}
            value={role === "coe" ? "admin@rguktrkv.ac.in" : ""}
            placeholder="admin@rguktrkv.ac.in"
            autoComplete="username"
            style={role === "coe" ? { color: "#a3a3a3" } : {}}
          />
          {role === "faculty" && (
            <>
              <label
                className="mb-1 text-[14px] font-bold text-gray-700 w-full text-left"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="mb-3 w-full bg-[#f6f6f6] border border-gray-300 rounded-md px-3 py-2 text-sm font-semibold"
                id="password"
                type="password"
                placeholder="Enter your Password"
                autoComplete="current-password"
              />
            </>
          )}
          <button
            type="button"
            className="mt-2 w-full py-2 text-[16px] font-bold rounded-md bg-[#991b1b] text-white hover:bg-[#b91c1c] shadow-sm transition-all duration-200"
            onClick={() => window.alert("Google OAuth coming soon!")}
          >
            Login with Google OAuth
          </button>
          <div
            className="w-full text-xs text-gray-600 mt-2 text-center font-semibold"
            style={{ letterSpacing: "0.01em" }}
          >
            {role === "coe"
              ? "2 - step verification required"
              : "Email verification required"}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
