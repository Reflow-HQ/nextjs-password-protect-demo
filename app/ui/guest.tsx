"use client";

import { useFormState } from "react-dom";
import { signIn } from "@/lib";

export function Guest() {
  const [state, formAction] = useFormState<{
    success?: boolean;
    error?: string;
  }>(signIn, {});

  return (
    <div className="text-center">
      <form action={formAction}>
        <div className="mt-6 flex items-end">
          <div>
            <label
              className="mb-2 block text-left text-sm font-bold text-gray-700"
              htmlFor="passphrase"
            >
              Passphrase (its &quot;1234&quot;)
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border border-red-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="passphrase"
              name="passphrase"
              type="password"
              placeholder=""
              autoComplete="off"
            />
          </div>
          <button
            className="focus:shadow-outline ml-3 rounded bg-blue-500 px-4 py-2 text-sm font-bold text-white hover:bg-blue-600 focus:outline-none"
            type="submit"
          >
            Sign In
          </button>
        </div>

        {state.error && (
          <p className="mt-2 text-sm italic text-red-500">{state.error}</p>
        )}
      </form>
    </div>
  );
}
