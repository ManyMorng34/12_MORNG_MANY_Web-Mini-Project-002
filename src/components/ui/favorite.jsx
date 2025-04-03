import React from 'react'

export default function Favorite() {
  return (
    <div>
      <svg
        className="w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.517 4.674a1 1 0 00.95.69h4.905c.969 0 1.371 1.24.588 1.81l-3.974 2.89a1 1 0 00-.364 1.118l1.517 4.674c.3.921-.755 1.688-1.538 1.118l-3.974-2.89a1 1 0 00-1.175 0l-3.974 2.89c-.783.57-1.838-.197-1.538-1.118l1.517-4.674a1 1 0 00-.364-1.118l-3.974-2.89c-.783-.57-.38-1.81.588-1.81h4.905a1 1 0 00.95-.69l1.517-4.674z"
        />
      </svg>
    </div>
  );
}
