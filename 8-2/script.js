function generateKey(length, charactersArg) {
  if (
    typeof length !== "number" ||
    typeof charactersArg !== "string" ||
    charactersArg.length === 0
  ) {
    return;
  }
  let buffer = "";
  for (let index = 0; index < length; index++) {
    const randomFloat = Math.random() * charactersArg.length;
    const randomIndex = Math.floor(randomFloat);
    const randomChar = charactersArg[randomIndex];
    buffer = buffer + randomChar;
  }
  return buffer;
}

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

const key = generateKey(16, characters);
console.log(key);
