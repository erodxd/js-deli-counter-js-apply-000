const takeANumber = (currentLine, newCustomerName = "") => {
  var currentNumber = 0;
  
  for (let i = 0; i < currentLine.length; ++i) {
    var currentElement = currentLine[i];
    
    if (currentElement < currentNumber) {
      currentNumber++;
      
    return `Welcome, ${newCustomerName}. You are ${currentNumber} in line.`
      }
    }
  }
  
  const nowServing = (katzDeliLine) => {
    
  }
  
  