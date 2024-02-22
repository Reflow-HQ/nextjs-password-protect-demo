function generateRandomString(length) {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters[randomIndex];
  }
  return randomString;
}

const randomString = generateRandomString(32);

console.log("\nAdd the following line to your .env file:");
console.log("SESSION_SECRET='" + randomString + "'");
