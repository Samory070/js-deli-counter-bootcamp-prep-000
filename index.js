function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if(line.length === 0) {
    return "There is nobody waiting to be served!"
  }
  const numbersAndNames = []
  for(let i = 0; i < line.length; i++) {
    numbersAndNames.push(`${i +1}, ${line[i]}`)    
  }
}
