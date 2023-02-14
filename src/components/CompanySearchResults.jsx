import { useEffect } from 'react'
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap'
import Job from './Job'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { companySearchResultsAction } from '../redux/actions'

const CompanySearchResults = () => {
  const params = useParams()

  const dispatch = useDispatch()

  const favourites = useSelector((state) => state.favourites.companies)
  const companyJobs = useSelector((state) => state.companySearch.companyResults)

  const isLoading = useSelector((state) => state.companySearch.isLoading)
  const isError = useSelector((state) => state.companySearch.isError)



  useEffect(() => {
    dispatch(companySearchResultsAction(params.companyName))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <Container>
      <Row>
        {isLoading && <Spinner animation="border" variant="primary" />}
        {isError && <Alert variant="danger">Something went wrong 😐</Alert>}
        <Col>
          {companyJobs.map((jobData) => (
            favourites.includes(jobData.company_name) ? <Job key={jobData._id} data={jobData} favourite={true} /> : <Job key={jobData._id} data={jobData} favourite={false} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default CompanySearchResults
