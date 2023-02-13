import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { HeartFill } from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { mainSearchResultsAction } from '../redux/actions'
import Job from './Job'

const MainSearch = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('')
  const favourites = useSelector((state) => state.favourites.companies)
  const searchResults = useSelector((state) => state.results.search)
  const dispatch = useDispatch();



  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3 d-flex align-items-center justify-content-between">
          <h1>Remote Jobs Search</h1>
          <Button variant='outline-primary' onClick={() => navigate("/favourites")}>Go to Favourites <HeartFill /></Button>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={(e) => {
            e.preventDefault();
            dispatch(mainSearchResultsAction(query))
          }}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {searchResults.map((jobData) => (
            favourites.includes(jobData.company_name) ? <Job key={jobData._id} data={jobData} favourite={true} /> : <Job key={jobData._id} data={jobData} favourite={false} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
