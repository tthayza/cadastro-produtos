const table = document.querySelector('#table')

const checkEntries = () => {
  const inputsList = document.querySelectorAll('input')
  let invalidInput = 0
  inputsList.forEach((input) => {
    if (input.value.length === 0) {
      invalidInput++
    }
  })
  if (invalidInput > 0) {
    return
  } else {
    createRow()
  }
}
const createRow = () => {
  const code = document.querySelector('#code').value
  const product = document.querySelector('#product').value
  const amount = Number(document.querySelector('#amount').value)
  const price = Number(document.querySelector('#price').value)
  const input = document.querySelectorAll('.input')

  const infos = [code, product, amount, price, amount * price]

  const tbody = document.querySelector('#table-body')

  const tr = document.createElement('tr')
  infos.map((info) => {
    if (info === '') return
    const td = document.createElement('td')
    td.innerText = info
    tr.appendChild(td)
    table.classList.add('block')
  })

  tbody.appendChild(tr)
  input.forEach((element) => (element.value = ''))
  input[0].focus()
}

const cleanTable = () => {
  const tBody = document.querySelector('#table-body')
  tBody.innerHTML = ''
  table.classList.remove('block')
  table.classList.add('hide')
}
