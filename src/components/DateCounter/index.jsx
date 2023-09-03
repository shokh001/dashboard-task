import React, { useState } from 'react'
import { ArrowRightIcon, Button, Container, Text } from './datecounter.style'

const DateCounter = () => {

    const [year, setYear] = useState(2024)
    return (
        <Container>
            <Button onClick={(prev) => setYear((prev) => prev - 1)}>
                <ArrowRightIcon />
            </Button>
            <Text>{year}</Text>
            <Button onClick={() => setYear((prev) => prev + 1)}>
                <ArrowRightIcon prev='true' />
            </Button>
        </Container>
    )
}

export default DateCounter