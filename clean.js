var fs = require("fs");

function removeBuildFolder(path) {
    if (fs.existsSync(path) && fs.lstatSync(path).isDirectory()) {
        fs.readdirSync(path).forEach(function(file) {
            var curPath = path + "/" + file;

            if (fs.lstatSync(curPath).isDirectory()) {
                removeBuildFolder(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });

        fs.rmdirSync(path);
    }
}

console.log("Cleaning build folder...");

removeBuildFolder("./bin");

console.log("Successfully cleaned build folder!");
