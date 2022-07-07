const date = document.querySelector('input[type="date"]')
const year = document.querySelector('#year')
const month = document.querySelector('#month')
const day = document.querySelector('#day')


date.addEventListener('change', (e) => {
  console.log(e.target.value)
  const time = new Date(e.target.value)
  console.log(time.getFullYear(), time.getMonth() + 1, time.getDate())
  year.value = time.getFullYear()
  month.value = time.getMonth() + 1
  day.value = time.getDate()


})