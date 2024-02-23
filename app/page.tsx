import Image from "next/image";
import { getSession } from "@/lib";
import { Guest } from "./ui/guest";
import { Authenticated } from "./ui/authenticated";

export default async function Home() {
  const session = await getSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-6 lg:p-24">
      <div>
        <div className="text-md z-10 mb-28 flex w-full max-w-5xl flex-col items-center lg:flex-row lg:justify-between">
          <a
            className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://reflowhq.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/reflow.svg"
              alt="Reflow Logo"
              width={60}
              height={24}
              priority
            />
            <span className="mx-2 text-xl">+</span>
            <Image
              className="relative"
              src="/next.svg"
              alt="Next.js Logo"
              width={100}
              height={24}
              priority
            />
          </a>

          <a
            className="group flex gap-2 rounded-xl border border-gray-300 bg-gray-100 bg-gradient-to-b from-zinc-100 px-8 py-3 text-center backdrop-blur-2xl hover:bg-gray-200 hover:from-zinc-200"
            href="https://reflowhq.com/TODO"
          >
            <span>Read the full article </span>
            <span className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
              </svg>
            </span>
          </a>
        </div>

        <div className="mb-20 text-center">
          <h1 className="mb-8 text-2xl font-bold">
            How to password protect a Next.js web app
          </h1>

          <p className="max-w-2xl">
            This simple demo uses the{" "}
            <a
              className="text-blue-500 hover:text-blue-600"
              href="https://github.com/Reflow-HQ/libs/tree/master/auth-next"
              target="_blank"
            >
              Reflow auth library
            </a>{" "}
            for handling user sessions.
            <br />
            <br />
            {session.hasAccess ? (
              <span>
                Right now you are viewing the <b>authenticated</b> version of
                the app. You can clear the session and go back to guest mode by
                clicking the &quot;Sign Out&quot; button.
              </span>
            ) : (
              <span>
                Right now you are viewing the <b>guest</b> version of the app.
                Try entering a passphrase in the field below to access the
                protected content.
              </span>
            )}
          </p>
        </div>
      </div>

      <div className="max-w-md text-left">
        {session.hasAccess ? <Authenticated /> : <Guest />}
        <p className="mb-4 mt-8">
          Auth Status:
          <code className="ml-2 rounded border border-gray-300 bg-gray-100 px-2 py-1 font-mono">
            {session.hasAccess ? "Authenticated" : "Guest"}
          </code>
        </p>
        <p>
          Session Cookie Content:
          <code className="ml-2 rounded border border-gray-300 bg-gray-100 px-2 py-1 font-mono">
            {JSON.stringify(session)}
          </code>
        </p>
      </div>
    </main>
  );
}
