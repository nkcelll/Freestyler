const snowboard = async() => {
  try {
  const snowprod =  await fetch('./snowboard.json')
  const data = snowprod.json()
  console.log(data);
  
  } catch (error) {
    console.log(error.message)
  }

}