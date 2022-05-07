import React from 'react'
import Link from 'next/Link'

const index = ({users}) => {
  return (
    <div>
      <h3>Hello world</h3>
      <Link href="/users">
        <a>Users List</a>
      </Link>
      <Link href="/customers">
        <a>Customers List</a>
      </Link>

      {
        users.map(user => (
          <div>
            <h3>{user.name}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default index

export async function getStaticProps(props) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await response.json()
  console.log(data)

  return {
    props: {
      users: data
    }
  }
}