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
    let customerOnLineArray = [];
    
    if (katzDeliLine > ['']) {
      for (let i = 0; i < katzDeliLine.length; ++i) {
        customerOnLineArray.push(`The line is currently: ${i+1}. ${katzDeliLine[i]}`);
      }
      return 
    } else {
      return "The line is currently empty.";


    }
  }
  