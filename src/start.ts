import App from "./app";

try {
  new App().start();
} catch (err) {
  console.log(err);
  process.exit(1);
}

process.on("uncaughtException", (err) => {
  console.log("uncaughtExeption", err);
  process.exit(1);
});
