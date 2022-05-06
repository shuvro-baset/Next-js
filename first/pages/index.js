import React from 'react'
import Link from 'next/Link'

const index = () => {
  return (
    <div>
      <h3>Hello world</h3>
      <Link href="/users">
        <a>Users List</a>
      </Link>
      <Link href="/customers">
        <a>Customers List</a>
      </Link>
    </div>
  )
}

export default index
