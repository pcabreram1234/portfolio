const fs = require("fs-extra");

const reg = //
  fs.copy("../src/assets/static/[name].png", "../build/assets", (err) => {
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
