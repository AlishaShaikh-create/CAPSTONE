import React from "react";

function Registration() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4">
      <div className="relative w-full max-w-lg">
        <div className="absolute inset-0 -z-10 blur-2xl opacity-40 bg-[radial-gradient(circle_at_20%_20%,#93c5fd,transparent_35%),radial-gradient(circle_at_80%_0%,#c7d2fe,transparent_35%)]" />
        <form className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl rounded-2xl p-8 space-y-6">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 rounded-xl bg-blue-600/10 text-blue-700 flex items-center justify-center shadow-sm">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5 12.083 12.083 0 015.84 10.578L12 14z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3">Create your  account</h2>
            <p className="text-gray-600 text-sm mt-1">Join and start swapping knowledge.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="first" className="block text-sm font-medium text-gray-700">First Name</label>
              <div className="relative mt-1">
                <input
                  type="text"
                  id="first"
                  placeholder="Jane"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500 outline-none transition"
                />
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 20.25a8.25 8.25 0 0115 0" />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="last" className="block text-sm font-medium text-gray-700">Last Name</label>
              <div className="relative mt-1">
                <input
                  type="text"
                  id="last"
                  placeholder="Doe"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500 outline-none transition"
                />
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 20.25a8.25 8.25 0 0115 0" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <div className="relative mt-1">
              <input
                type="text"
                id="phone"
                placeholder="+1 555 123 4567"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500 outline-none transition"
              />
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-1.267a1.125 1.125 0 00-.852-1.09l-3.478-.87a1.125 1.125 0 00-1.173.417l-.97 1.293a1.125 1.125 0 01-1.21.39 12.035 12.035 0 01-7.143-7.143 1.125 1.125 0 01.39-1.21l1.293-.97a1.125 1.125 0 00.417-1.173l-.87-3.478A1.125 1.125 0 006.017 2.25H4.75A2.25 2.25 0 002.5 4.5v2.25z" />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <div className="relative mt-1">
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500 outline-none transition"
              />
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative mt-1">
              <input
                type="password"
                id="password"
                placeholder="Create a strong password"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500 outline-none transition"
              />
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0V10.5m-.75 9.75h10.5a2.25 2.25 0 002.25-2.25V12a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 12v6a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </span>
            </div>
            <p className="mt-1.5 text-xs text-gray-500">Use at least 8 characters, including a number and a symbol.</p>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-gray-600 select-none">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              I agree to the Terms & Privacy
            </label>
            <a href="/signin" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
              Already have an account?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-lg font-semibold text-white shadow-md bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-500/30 transition"
          >
            Create account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;