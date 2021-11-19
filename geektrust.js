const fs = require("fs"); 
const filename = process.argv[2]; //filename to be passed as a command line argument
const {calculateOverlap, addStock} = require('./logic') //Command handling logic

//Parse the input file and act out the commands 
let file_data;
function parse_input(err, data) {
  if (err) throw err;

  file_data = data.toString().split("\r\n");
  const portfolio = file_data[0].split(" ");
  portfolio.shift();

  for (let i = 1; i < file_data.length; i++) {
    const command = file_data[i].split(" ");
    try{       
          if (command[0] === "CALCULATE_OVERLAP") {
             calculateOverlap(portfolio, command[1]);
          } else if (command[0] === "ADD_STOCK") {
            const fund = command[1];
            command.shift();
            command.shift();
            const stock = command.join(" ");
            addStock(fund, stock);
          }
    }
     catch(err) {
      throw new Error(err);
    }
  }
}


//Read the input file
try {
  fs.readFile(filename, "utf8", (err, data) => parse_input(err, data));
} catch (err) {
  console.log(err);
}
