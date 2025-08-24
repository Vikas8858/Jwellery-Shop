// import { useState } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";

// export default function Dropdown() {
//   const [isOpen, setIsOpen] = useState(false);

//   const items = [
//     { label: "Anklets", count: 78 },
//     { label: "Bracelet", count: 263 },
//     { label: "Brooch", count: 15 },
//     { label: "Chains", count: 31 },
//     { label: "Charms", count: 6 },
//     { label: "Combo box", count: 8 },
//     { label: "Earrings", count: 386 },
//   ];

//   return (


//     <>
//     <div className="flex flex-wrap items-center justify-center gap-6 px-1 my-10 mt-0 mb-0">

//     {/* first */}
//     <div className="w-64 bg-white border shadow rounded-2xl">
//       {/* Header */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center justify-between w-full p-3 font-semibold text-gray-700 hover:bg-gray-100 rounded-2xl"
//       >
//         Product type
//         {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
//       </button>

//       {/* Dropdown list */}
//       {isOpen && (
//         <div className="p-3 space-y-2 border-t">
//           {items.map((item, idx) => (
//             <label
//               key={idx}
//               className="flex items-center justify-between cursor-pointer hover:text-blue-600"
//             >
//               <div className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   className="w-4 h-4 cursor-pointer accent-blue-500"
//                 />
//                 <span>{item.label}</span>
//               </div>
//               <span className="text-sm text-gray-500">({item.count})</span>
//             </label>
//           ))}
//         </div>
//       )}
// </div>
//       {/* third */}

//   <div className="w-64 bg-white border shadow rounded-2xl">
//       {/* Header */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center justify-between w-full p-3 font-semibold text-gray-700 hover:bg-gray-100 rounded-2xl"
//       >
//         Product type
//         {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
//       </button>

//       {/* Dropdown list */}
//       {isOpen && (
//         <div className="p-3 space-y-2 border-t">
//           {items.map((item, idx) => (
//             <label
//               key={idx}
//               className="flex items-center justify-between cursor-pointer hover:text-blue-600"
//             >
//               <div className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   className="w-4 h-4 cursor-pointer accent-blue-500"
//                 />
//                 <span>{item.label}</span>
//               </div>
//               <span className="text-sm text-gray-500">({item.count})</span>
//             </label>
//           ))}
//         </div>
//       )}
// </div>

// <div className="w-64 bg-white border shadow rounded-2xl">
//       {/* Header */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center justify-between w-full p-3 font-semibold text-gray-700 hover:bg-gray-100 rounded-2xl"
//       >
//         Product type
//         {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
//       </button>

//       {/* Dropdown list */}
//       {isOpen && (
//         <div className="p-3 space-y-2 border-t">
//           {items.map((item, idx) => (
//             <label
//               key={idx}
//               className="flex items-center justify-between cursor-pointer hover:text-blue-600"
//             >
//               <div className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   className="w-4 h-4 cursor-pointer accent-blue-500"
//                 />
//                 <span>{item.label}</span>
//               </div>
//               <span className="text-sm text-gray-500">({item.count})</span>
//             </label>
//           ))}
//         </div>
//       )}
// </div>
//             {/* fourth */}

// <div className="w-64 bg-white border shadow rounded-2xl">
//       {/* Header */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center justify-between w-full p-3 font-semibold text-gray-700 hover:bg-gray-100 rounded-2xl"
//       >
//         Product type
//         {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
//       </button>

//       {/* Dropdown list */}
//       {isOpen && (
//         <div className="p-3 space-y-2 border-t">
//           {items.map((item, idx) => (
//             <label
//               key={idx}
//               className="flex items-center justify-between cursor-pointer hover:text-blue-600"
//             >
//               <div className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   className="w-4 h-4 cursor-pointer accent-blue-500"
//                 />
//                 <span>{item.label}</span>
//               </div>
//               <span className="text-sm text-gray-500">({item.count})</span>
//             </label>
//           ))}
//         </div>
//       )}
// </div>

// {/* five */}
// <div className="w-64 bg-white border shadow rounded-2xl">
//       {/* Header */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center justify-between w-full p-3 font-semibold text-gray-700 hover:bg-gray-100 rounded-2xl"
//       >
//         Product type
//         {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
//       </button>

//       {/* Dropdown list */}
//       {isOpen && (
//         <div className="p-3 space-y-2 border-t">
//           {items.map((item, idx) => (
//             <label
//               key={idx}
//               className="flex items-center justify-between cursor-pointer hover:text-blue-600"
//             >
//               <div className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   className="w-4 h-4 cursor-pointer accent-blue-500"
//                 />
//                 <span>{item.label}</span>
//               </div>
//               <span className="text-sm text-gray-500">({item.count})</span>
//             </label>
//           ))}
//         </div>
//       )}
// </div>
// </div>
// </>
// );
// }