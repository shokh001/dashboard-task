import React from 'react'
import { Container } from './document.style'
import ColumnChart from 'components/ColumnChart'
import DateCounter from 'components/DateCounter'
import DonutChart from 'components/DonutChart'

const Document = () => {
  return (
    <Container>
      <ColumnChart />
      <DonutChart />
      <DateCounter />
    </Container>
  )
}

export default Document