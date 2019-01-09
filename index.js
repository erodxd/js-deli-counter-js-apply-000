const takeANumber = (katzDeliLine, newCustomerName) => {
  katzDeliLine.push(newCustomerName);
  return `Welcome, ${newCustomerName}. You are ${katzDeliLine.length} in line.`;
}
  
  
  const nowServing = (katzDeliLine) => {
    if (katzDeliLine > ['']) {
      return `Currently serving ${katzDeliLine.shift()}.`
    } else {
        return "There is nobody waiting to be served!"
  }
  
  