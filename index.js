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
        customerOnLineArray.push(${i+1}. ${katzDeliLine[i]});
      }
      return "The line is currently:" + customerOnLineArray;
    } else {
      return "The line is currently empty.";


    }
  }
  