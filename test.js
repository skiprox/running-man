var runningMan = require("./");
console.log(runningMan.quote());
runningMan.stream().pipe(process.stdout);