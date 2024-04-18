This is a Next.js 14 example that demonstrates simple user sessions using [Reflow Auth](https://github.com/Reflow-HQ/libs/tree/master/auth-next) for cookie management.

The app has two states: guest and authenticated. To view the authenticated state you need to enter a pre-defined passphrase. The user session is then saved in a cookie and persists in future visits.

You can view a live demo here - [https://nextjs-password-protect-demo.vercel.app/](https://nextjs-password-protect-demo.vercel.app/)

# Getting Started

To run the example, follow these steps

1. `npm install` the dependencies in this folder
2. Create a file named `.env` and fill out the following environment variables:

- `HASHED_PASSPHRASE` - You can generate a hashed passphrase for accessing the authenticated app state by running `npm run make-passphrase`.
- `SESSION_SECRET` - This is a secret string that will be used for encrypting user sessions. You can enter any 32 char string or generate one using the `npm run make-session-secret` command.
- `REFLOW_PROJECT_ID` - The ID of your Reflow project, required for using the library. You can obtain it from your Reflow project's [settings page](https://reflowhq.com/project/settings).

3. Start the development server with `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the app running.
