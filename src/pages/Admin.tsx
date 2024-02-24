import { BASE_URL2 } from '@/utils/funcitons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type Props = {}

const Admin = (props: Props) => {
  const [users, setusers] = useState<{ clerkId: string, name: string, email: string, image: string, current_limit: number }[]>([])
  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    try {
      const res = await axios.get(`${BASE_URL2}/user/get/all`)
      console.log(res)
      setusers(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Table>
      <TableCaption>A list of All Users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="text-right">Credits</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.clerkId}>
            <TableCell className="font-medium">{user.clerkId}</TableCell>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell className="font-medium">{user.email}</TableCell>
            <TableCell className="font-medium">{user.current_limit}</TableCell>

          </TableRow>
        ))}
      </TableBody>
      
    </Table>
  )
}

export default Admin