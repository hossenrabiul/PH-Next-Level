import { redirect } from 'next/navigation'
import React from 'react'

const UserPage = () => {
  return redirect("/dashboard/create-blog")
}

export default UserPage