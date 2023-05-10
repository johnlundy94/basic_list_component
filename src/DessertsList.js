function DessertsList(props) {
  const listItems = props.data
  .filter((dessert) => {
    return dessert.calories < 500;
  })  
  .sort((a, b) => {
    return a.calories - b.calories
  })
  .map((dessert, i) => {
    const itemText = `${dessert.name} - ${dessert.calories} cal`
    return <li key={i}>{itemText}</li>
  })
  return(
    <>
      <ul>
        {listItems}
      </ul>
    </>
  )
}

export default DessertsList;
