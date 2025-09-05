import React from 'react';
import { UserLi } from './Users/components/UserLi.jsx';

async function fetchUsers() {
  const res = await fetch('https://dummyjson.com/users')

  const bd_users_res = await res.json()

  return bd_users_res.users
}

export default async function HomePage() {

  const usersData = await fetchUsers()

  return (
    <UserLi usersData={usersData}/>
  );
}
