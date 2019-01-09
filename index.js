const takeANumber = (katzDeliLine, newCustomerName) => {
  katzDeliLine.push(newCustomerName);
  return `Welcome, ${newCustomerName}. You are number ${katzDeliLine.length} in line.`;
}
  
  
  const nowServing = (katzDeliLine) => {
    if (katzDeliLine > ['']) {
      return `Currently serving ${katzDeliLine.shift()}.`
    } else {
        return "There is nobody waiting to be served!"
    }
  }
  
  const currentLine = (katzDeliLine) => {
    let customerInLine = [];
    
    if (katzDeliLine > ['']) {
      for (let i = 1; i < katzDeliLine.length; ++i) {
        return `The line is currently: ${i++}. ${katzDeliLine[i]}`;
      } else if {
    }
  }
  