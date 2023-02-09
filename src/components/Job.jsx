import { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Heart } from 'react-bootstrap-icons'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Job = ({ data, i }) => {
  const [saved, setSaved] = useState(1)
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
        <Heart onClick={(e) => {
          setSaved(saved + 1)
          if (saved % 2 === 0) {
            e.target.style.fill = "black";
            dispatch({
              type: "REMOVE_FROM_FAVOURITES",
              payload: i
            })
          } else {
            e.target.style.fill = "red";
            dispatch({
              type: "ADD_TO_FAVOURITES",
              payload: data
            })
          }
        }} />
      </Col>
    </Row>
  )
}
export default Job
