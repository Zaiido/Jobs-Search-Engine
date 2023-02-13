import { Row, Col } from 'react-bootstrap'
import { Heart, HeartFill } from 'react-bootstrap-icons'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToFavouritesAction, removeFromFavouritesAction } from '../redux/actions'

const Job = ({ data, favourite }) => {
  const dispatch = useDispatch()

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={3}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col className='text-right' xs={6}>
        {favourite ?
          <HeartFill onClick={(e) => {
            dispatch(removeFromFavouritesAction(data.company_name))
          }} />
          :
          <Heart onClick={(e) => {
            dispatch(addToFavouritesAction(data.company_name))
          }


          } />}
      </Col>
    </Row>
  )
}
export default Job
