import { getColor } from "@/lib/color";
import { getAllWorkspace } from "@/service/workspaceservice/workSpaceService";
import { Ellipsis } from "lucide-react";
import Link from "next/link";
import PopUpWorkSpace from "./popUpWorkSpace";

export default async function Sidebar() {
  const workList = await getAllWorkspace();
  const colorValues = Object.values(getColor);

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-white shadow-md">
        <div className="w-64 p-4 text-gray-700 font-sans">
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs font-semibold text-gray-400 uppercase">
              <span>Workspace</span>
              <PopUpWorkSpace />
            </div>
            <div>
              {workList?.payload.map((work) => {
                const randomColor =
                  colorValues[Math.floor(Math.random() * colorValues.length)];
                return (
                  <ul key={work.workspaceId} className="mt-4 space-y-2">
                    <Link href={`/workspace/${work.workspaceId}`}>
                      <li className="flex items-center justify-between px-3 py-2 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-2 h-2 rounded-full ${randomColor}`}
                          ></span>
                          <span className="text-sm font-semibold text-black">
                            {work.workspaceName}
                          </span>
                        </div>
                        <span className="text-gray-400">
                          <Ellipsis />
                        </span>
                      </li>
                    </Link>
                  </ul>
                );
              })}
            </div>
          </div>

          {/* Favorite Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs font-semibold text-gray-400 uppercase">
              <span>Favorite</span>
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
            <ul className="mt-4 space-y-2">
              <li className="flex items-center justify-between px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  <span className="text-sm text-gray-700">HRD Design</span>
                </div>
                <span className="text-gray-400">⋯</span>
              </li>
              <li className="flex items-center justify-between px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="text-sm text-gray-700">Website Design</span>
                </div>
                <span className="text-gray-400">⋯</span>
              </li>
            </ul>
          </div>

          {/* Logout */}
          <div className="mt-auto text-sm text-teal-600 hover:underline cursor-pointer flex items-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Logout
          </div>
        </div>
      </aside>
    </div>
  );
}
