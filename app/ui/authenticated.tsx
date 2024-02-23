"use client";

import { useFormState } from "react-dom";
import { signOut } from "@/lib";

export function Authenticated() {
  const [state, formAction] = useFormState<{
    success?: boolean;
    error?: string;
  }>(signOut, {});

  return (
    <div className="text-center">
      <form action={formAction}>
        <div className="mb-20 mt-6">
          <div className="w-100 rounded border border-gray-400 px-8 py-5">
            The content here is accessible only by authenticated users.
          </div>
          <button
            className="focus:shadow-outline mt-4 rounded bg-blue-500 px-4 py-2 text-sm font-bold text-white hover:bg-blue-600 focus:outline-none"
            type="submit"
          >
            Sign Out
          </button>
        </div>

        {state.error && (
          <p className="mt-2 text-sm italic text-red-500">{state.error}</p>
        )}
      </form>
    </div>
  );
}
