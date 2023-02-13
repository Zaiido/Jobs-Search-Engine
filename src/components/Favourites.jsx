import { useDispatch, useSelector } from "react-redux"
import { HouseDoorFill, Trash } from "react-bootstrap-icons"
import { Link } from "react-router-dom"
import { Button, Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { removeFromFavouritesAction } from "../redux/actions"

const Favourites = () => {
    const favourites = useSelector((state) => state.favourites.companies)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <>
            <Container>
                <Row>
                    <Col xs={10} className="mx-auto my-3 d-flex align-items-center justify-content-between">
                        <h1>Favourites</h1>
                        <Button variant='outline-primary' onClick={() => navigate("/")}><HouseDoorFill /></Button>
                    </Col>
                    <Col xs={10} className="mx-auto mb-5">
                        {favourites.map((company, i) => {
                            return (
                                <Row
                                    className="mx-0 mt-3 p-3"
                                    style={{ border: '1px solid #00000033', borderRadius: 4 }}
                                    key={i}
                                >
                                    <Col xs={6}>
                                        <Link to={`/${company}`}>{company}</Link>
                                    </Col>
                                    <Col className='text-right' xs={6}>
                                        <Trash className="delete-button" onClick={() => {
                                            dispatch(removeFromFavouritesAction(company))
                                        }} />
                                    </Col>
                                </Row>
                            )
                        })}
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default Favourites