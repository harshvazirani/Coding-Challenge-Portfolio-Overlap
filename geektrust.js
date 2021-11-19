const fs = require("fs")
const { Investor } = require("./logic")

const filename = process.argv[2]
const CALCULATE_OVERLAP = "CALCULATE_OVERLAP"
const ADD_STOCK = "ADD_STOCK"

function parseInput(input) {
  const portfolio = input.shift().split(" ")
  portfolio.shift()
  const investor = new Investor(portfolio)

  for (let line of input) {
    line = line.split(" ")
    const command = line.shift()
    
    if (command === CALCULATE_OVERLAP) {
      investor.calculateOverlap(line.shift())
    } else if (command === ADD_STOCK) {
      const fund = line.shift()
      const stock = line.join(" ")
      investor.data.addStock(fund, stock)
    }
    else throw new Error("Wrong Command")
  }
}

try {
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) throw err
    parseInput(data.toString().split("\n"))
  })
} catch (err) {
  console.log(err)
}
