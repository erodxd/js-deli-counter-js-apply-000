const takeANumber = (katzDeliLine, newCustomerName) => {
  var currentNumber = 0;
  
  for (let i = 0; i < katzDeliLine.length; ++i) {
    var currentElement = katzDeliLine[i];
    
    if (currentElement < currentNumber) {
      currentNumber++;
      
    return `Welcome, ${newCustomerName}. You are ${currentNumber} in line.`
      }
    }
  }
  
  const nowServing = (katzDeliLine) => {
    
  }
  
  