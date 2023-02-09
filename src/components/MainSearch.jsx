import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { HeartFill } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'
import Job from './Job'

const MainSearch = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('')
  const [jobs, setJobs] = useState([])

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search="

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(baseEndpoint + query + '&limit=20')
      if (response.ok) {
        const { data } = await response.json()
        setJobs(data)
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3 d-flex align-items-center justify-content-between">
          <h1>Remote Jobs Search</h1>
          <Button variant='outline-success' onClick={() => navigate("/favourites")}>Go to Favourites <HeartFill /></Button>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData, i) => (
            <Job key={jobData._id} data={jobData} i={i} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
