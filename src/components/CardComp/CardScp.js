import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CardComp() {

    return (
        <div className='d-flex w-100 mb-5 justify-content-center'>
            {
                [
                    'Light',
                    'Light',
                    'Dark',
                ].map((variant) => (
                    <Card
                        bg={variant.toLowerCase()}
                        key={variant}
                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                        style={{ width: '18rem' }}
                        className="m-5 p-4"
                    >
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>{variant} Card Title </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <Button variant="primary">Primary</Button>
                    </Card>
                ))
            }
        </div>

    )
}


export default CardComp