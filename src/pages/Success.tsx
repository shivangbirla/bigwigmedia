import { BASE_URL2 } from '@/utils/funcitons';
import { Plan, arr } from '@/utils/plans';
import { useUser } from '@clerk/clerk-react';
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

type Props = {}

const Success = (props: Props) => {
  const urlParams = new URLSearchParams(window.location.search);
  const plan = urlParams.get("plan");
  const { user, isSignedIn, isLoaded } = useUser();
  const navigate = useNavigate();
  const [isloading, setIsloading] = useState(true)


  useEffect(() => {
    if(!plan){
      setIsloading(false)
      navigate("/")
      toast.error("Something Went Wrong...")
      return;
    }


    if (plan && isLoaded && isSignedIn) {
      while (!isLoaded) (
        setTimeout(() => { }, 100)
      )
      let selectedPlan: Plan | null = null
      arr.map((p: Plan, index: number) => {
        if (p.duration === plan) {
          selectedPlan = p
        }
      })
      if(selectedPlan===null) {
        toast.error("Something went wrong..");
        navigate("/")
        return
      }

      try {
        //@ts-ignore
        selectedPlan!==null && increaseCredits(parseInt(selectedPlan.creadits as Plan['creadits']))
      } catch (error) {

      }

    }
  }, [plan, isLoaded])

  const increaseCredits = async (credits: number) => {
    try {
      const res = await axios.post(`${BASE_URL2}/limits/increase?clerkId=${user!.id}`, { increase: credits });
      console.log(res)
      if (res.status === 200) {
        navigate("/profile")
        toast.success("Plan Activated Successfully")
        setIsloading(false)

      }
      else {
        toast.error("Error Occured activating account")
      }
    } catch (error) {

    }

  }

  return (
    <div className='w-full h-screen flex justify-center items-center '>
      <div className="p-3 rounded-lg bg-gray-100 dark:bg-zinc-800 flex flex-col justify-center items-center  ">
        <h1 className='dark:text-white text-black font-bold text-4xl'>Success</h1>
        {isloading && <div className="w-full h-full flex items-center justify-center">
          <Loader2 className="animate-spin w-20 h-20 mt-10" />
        </div>}
      </div>
      </div>
  )
}

export default Success