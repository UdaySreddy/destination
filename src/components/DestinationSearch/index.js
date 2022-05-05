import DestinationItem from '../DestinationItem'

const DestinationSearch = props => {
  const {destinationsList} = props

  return (
    <ul>
      {destinationsList.map(each => (
        <DestinationItem destinationsList={each} key={each.id} />
      ))}
    </ul>
  )
}

export default DestinationSearch
