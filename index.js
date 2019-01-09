const takeANumber = (currentLine, newCustomerName = "") => {
  let currentNumber = 0;
  
  for (let i = 0; i < currentLine.length; ++i) {
    let currentElement = currentLine[i];
    
    if (currentElement < currentNumber) {
      currentNumber++;
      
    return `Welcome, ${newCustomerName}. You are ${currentNumber} in line.`
      }
    }
  }
  
  const nowServing = () => {
    
  }
  
  