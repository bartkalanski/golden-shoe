export const deliveryFormattedDate = () => {
  const someDate = new Date()
  const numberOfDaysToAdd = 3
  someDate.setDate(someDate.getDate() + numberOfDaysToAdd)
  const dd = someDate.getDate()
  const mm = someDate.getMonth() + 1
  const y = someDate.getFullYear()

  return dd + '/' + mm + '/' + y
}
