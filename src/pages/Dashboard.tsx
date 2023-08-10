import React from 'react'
import AuthHOC from '../shared/AuthHOC'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div>Dashboard</div>
  )
}

export default AuthHOC(Dashboard);