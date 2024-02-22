const bcrypt = require("bcryptjs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdin,
});

rl.question(
  "Enter the plaintext passphrase that will unlock the app: \n",
  (plaintext) => {
    const salt = bcrypt.genSaltSync(8);
    const hash = bcrypt.hashSync(plaintext, salt);
    const escapedHash = hash.replace(/\$/g, "\\$");

    console.log("\nAdd the following line to your .env file:");
    console.log("HASHED_PASSPHRASE='" + escapedHash + "'");

    rl.close();
    return;
  },
);
