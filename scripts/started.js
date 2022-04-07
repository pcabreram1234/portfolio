const fs = require("fs-extra");

fs.copy("../src/assets/static/", "../build/assets", (err) => {
  if (err) return console.error(err);
  console.log("success!");
}); // copies directory, even if it has subdirectories or files

/* fs.copyFile(
  path.resolve(__dirname, "..", "src", "assets", "static"),
  path.resolve(__dirname, "..", "build", "assets"),
  fs.constants.COPYFILE_FICLONE_FORCE,
  (error) => {
    console.log(error);
  }
); */
