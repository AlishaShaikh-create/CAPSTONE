// import React from "react";
// import {Link} from 'react-router-dom'
// function SignIn() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4 ">
//       <div className="relative w-full max-w-md">
//         <div className="absolute inset-0 -z-10 blur-2xl opacity-40 bg-[radial-gradient(circle_at_20%_20%,#93c5fd,transparent_35%),radial-gradient(circle_at_80%_0%,#c7d2fe,transparent_35%)]" />
//         <div className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl rounded-2xl p-8">
//           <div className="text-center mb-8">
//             <div className="mx-auto h-12 w-12 rounded-xl bg-blue-600/10 text-blue-700 flex items-center justify-center shadow-sm">
//               <svg
//                 className="h-6 w-6"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M12 14l9-5-9-5-9 5 9 5z"
//                 />
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5 12.083 12.083 0 015.84 10.578L12 14z"
//                 />
//               </svg>
//             </div>
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3">
//               Sign in 
//             </h2>
//             <p className="text-gray-600 text-sm mt-1">
//               Welcome back! Let's keep learning together.
//             </p>
//           </div>

//           <form action="/" className="space-y-5">
//             <div className="space-y-1.5">
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Email
//               </label>
//               <div className="relative">
//                 <input
//                   type="email"
//                   id="email"
//                   placeholder="you@example.com"
//                   className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 bg-white focus:bg-white focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500 outline-none transition"
//                 />
//                 <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
//                   <svg
//                     className="h-5 w-5"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="1.5"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                     />
//                   </svg>
//                 </span>
//               </div>
//             </div>

//             <div className="space-y-1.5">
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   type="password"
//                   id="password"
//                   placeholder="Enter your password"
//                   className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 bg-white focus:bg-white focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500 outline-none transition"
//                 />
//                 <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
//                   <svg
//                     className="h-5 w-5"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="1.5"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0V10.5m-.75 9.75h10.5a2.25 2.25 0 002.25-2.25V12a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 12v6a2.25 2.25 0 002.25 2.25z"
//                     />
//                   </svg>
//                 </span>
//               </div>
//               <div className="flex items-center justify-between pt-1">
//                 <label className="flex items-center gap-2 text-sm text-gray-600 select-none">
//                 <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
//                   Remember me
//                 </label>
//                 <a href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
//                   Forgot password?
//                 </a>
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full py-2.5 rounded-lg font-semibold text-white shadow-md bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-500/30 transition"
//             >
//               Sign In
//             </button>

//             <div className="relative">
//               <div className="absolute inset-0 flex items-center" >
//                 <span className="w-full border-t border-gray-200"></span>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white/70 backdrop-blur-xl text-gray-500">
//                   or
//                 </span>
//               </div>
//             </div>

//             <p className="text-sm text-gray-600 text-center">
//               Don’t have an account?{" "}

//               {/* <a href="/register" className="text-blue-600 hover:text-blue-700 hover:underline font-medium">
//                 Register
//               </a> */} 

//               <Link to="/register" className="text-blue-600 hover:text-blue-700 hover:underline font-medium">Register</Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignIn;