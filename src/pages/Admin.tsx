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
import { useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'
import { emails } from '@/utils/email'
import { toast } from 'sonner'

type Props = {}

const Admin = (props: Props) => {
  const [users, setusers] = useState<{ clerkId: string, name: string, email: string, image: string, current_limit: number }[]>([])
  const { isLoaded, isSignedIn, user } = useUser();
  const [access, setAccess] = useState(false)
  

  const navigate = useNavigate()


  const getUsers = async () => {
    try {
      const res = await axios.get(`${BASE_URL2}/user/get/all`)
      setusers(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      navigate("/login");
      toast.error("Login to continue...");
    }
    if (isSignedIn) {
      let canAccess = false
      user.emailAddresses?.forEach(e => {
        if (emails.includes(e.emailAddress)) canAccess = true
      })
      if (!canAccess) {
        navigate("/")
        toast.error("Cannot access ")
        return;
      }
      getUsers()

      setAccess(canAccess)

    }
  }, [isLoaded, isSignedIn]);
  if (!access) return <></>
  return (
    <Table className='my-10'>
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