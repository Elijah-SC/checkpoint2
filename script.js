console.log(`Get ready to eat some CHEESE`)

let totalCheese = 100000
let clickPower = 1
let automaticPower = 0
let bonus = 0

const autoUpgrades = [

  {
    name: `rover`,
    qty: 0,
    price: 1000,
    bonus: 10,

  },

  {
    name: `space-station`,
    qty: 0,
    price: 50000,
    bonus: 100,
  }



]


const clickUpgrades = [

  {
    name: `pickaxe`,
    qty: 0,
    price: 50,
    bonus: 5,
  },

  {

    name: `drill`,
    qty: 0,
    price: 300,
    bonus: 20,


  }

]

function buyClickUpgrade(upgradeName) {

  let selectedUpgrade = clickUpgrades.find((upgrade) => upgrade.name == upgradeName)

  // console.log(selectedUpgrade.bonus)
  if (totalCheese >= selectedUpgrade.price) {
    totalCheese -= selectedUpgrade.price
    clickPower += selectedUpgrade.bonus
    selectedUpgrade.qty++
    selectedUpgrade.price += .5 * selectedUpgrade.price
  }


  let PixPriceElm = document.getElementById(upgradeName)
  PixPriceElm.innerText = selectedUpgrade.price.toFixed().toString()

  drawTotalCheese()
  drawTotalClickPower()
  drawStats()
}

function BuyAutoUpgrades(upgradeName) {

  let selectedUpgrade = autoUpgrades.find((upgrade) => upgrade.name == upgradeName)

  if (totalCheese >= selectedUpgrade.price) {
    totalCheese -= selectedUpgrade.price
    selectedUpgrade.qty++
    selectedUpgrade.price += .5 * selectedUpgrade.price
    automaticPower += selectedUpgrade.bonus

    // console.log(`Auto Power=`, automaticPower, `Price=`, selectedUpgrade.price, `total Cheese =`, totalCheese)
  }

  let AutoPriceElm = document.getElementById(upgradeName)
  AutoPriceElm.innerText = selectedUpgrade.price.toFixed().toString()

  let AutoPowerElm = document.getElementById(`automaticPower`)
  AutoPowerElm.innerText = automaticPower.toFixed().toString()

  drawTotalCheese()
  drawStats()

}

setInterval(() => totalCheese += automaticPower, 3000)

setInterval(drawTotalCheese, 1000)


function drawStats() {

  clickUpgrades.forEach((stat) => {

    let statElm = document.getElementById(`total-${stat.name}`)
    let totalStatElm = document.getElementById(`total-${stat.name}-bonus`)


    statElm.innerText = stat.qty.toFixed().toString()
    totalStatElm.innerText = (stat.qty * stat.bonus).toFixed().toString()

  })





}




function mine() {

  totalCheese += clickPower + bonus

  drawTotalCheese()

}

function drawTotalCheese() {

  let CheeseElm = document.getElementById(`totalCheese`)
  CheeseElm.innerText = totalCheese.toFixed().toString()


}
function drawTotalClickPower() {

  let CheeseElm = document.getElementById(`clickPower`)
  CheeseElm.innerText = clickPower.toFixed().toString()


}
function drawTotalAutoPower() {

  let CheeseElm = document.getElementById(`automaticPower`)
  CheeseElm.innerText = automaticPower.toFixed().toString()


}

drawTotalClickPower()
drawTotalCheese()
drawTotalAutoPower()