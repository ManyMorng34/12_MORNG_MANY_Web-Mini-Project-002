"use client";

import { useState } from "react";
import { createWorkSpaceAction } from "@/action/createWorkSpaceAction";

export default function PopUpWorkSpace() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData) {
    const name = formData.get("workspaceName");
    if (!name || typeof name !== "string" || name.trim() === "") return;
    setLoading(true);
    try {
      await createWorkSpaceAction({ workspaceName: name });
      setIsOpen(false); 
      window.location.reload(); 
    } catch (e) {
      console.error("Failed to create workspace:", e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="w-10 h-8 flex items-center justify-center rounded-xl border text-gray-400 hover:bg-gray-100 cursor-pointer"
        title="Create Workspace"
      >
        +
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-none">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl relative">
            <h2 className="text-lg font-bold mb-4 text-gray-800 uppercase">
              New Workspace
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                handleSubmit(formData);
              }}
            >
              <input
                type="text"
                name="workspaceName"
                placeholder="Enter workspace name"
                className="w-full border px-4 py-2 rounded-md mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  {loading ? "Creating..." : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
