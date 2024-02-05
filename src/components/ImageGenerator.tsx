import React, { useState } from 'react'

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { BASE_URL } from "@/utils/funcitons";
import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {}

const ImageGenerator = (props: Props) => {
   const [text, setText] = useState("");
   const [isLoading, setIsLoading] = useState(false);
   const [output, setOutput] = useState("");
   const [number, setNumber] = useState<string>("")
   const [quality, setQuality] = useState<string>("")

   console.log(number,quality)

   const navigate = useNavigate();

   const handlePaste = async () => {
     const text = await navigator.clipboard.readText();
     setText(text);
   };
   const { getToken, isLoaded, isSignedIn, userId } = useAuth();

   const handleSubmit = async (
     e: React.MouseEvent<HTMLButtonElement, MouseEvent>
   ) => {
     //@ts-ignore
     setIsLoading(true);
     e.preventDefault();
     if (!isSignedIn) {
       navigate("/login");
       toast.error("Please Signin to continue");
       return;
     }
     if (!text) {
       toast.error("Please enter the text to generate");
       setIsLoading(false);
       return;
     }
     try {
       const res = await axios.post(
         `${BASE_URL}/response/image?clerkId=${userId}`,
         {
           prompt: text,
           quality,
           n:parseInt(number)
         }
       );

       if (res.status === 200) {
         setOutput(res.data.data);
         setIsLoading(false);
       } else {
         toast.error(res.data.error);
         setIsLoading(false);
       }
     } catch (error: any) {
       // toast.error(error);
       toast.error(error.response.data.error);
       setIsLoading(false);
     }
   };
  return (
    <div className="m-auto w-full max-w-[1000px] rounded-lg dark:bg-[#262626] bg-white p-6 shadow-lg">
      {/* text area */}
      <Textarea
        className="mb-4 h-48 w-full rounded-md border-2 dark:bg-[#262626] border-gray-300 p-4"
        placeholder="Enter Prompt to generate image"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* selects */}
      <div className="flex flex-col md:flex-row w-full gap-5">
        <Select onValueChange={setNumber}>
          <SelectTrigger
            className="w-full"
            value={number}
            // @ts-ignore
          >
            <SelectValue placeholder="Select a Number of Images" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Number of Images</SelectLabel>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val) => (
                <SelectItem value={`${val}`}>{`${val}`}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select onValueChange={setQuality}>
          <SelectTrigger
            className="w-full"
            defaultValue={quality}
            // @ts-ignore
          >
            <SelectValue placeholder="Select a Quality" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Number of Images</SelectLabel>
              <SelectItem value={"hd"}>{"High"}</SelectItem>
              <SelectItem value={"standard"}>{"Standard"}</SelectItem>
              {/* <SelectItem value={"fine"}>{"Fine"}</SelectItem> */}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <button
        className="text-white text-center font-outfit md:text-lg font-semibold flex relative text-xs mt-10 py-3 px-10 justify-center items-center gap-4 flex-shrink-0 rounded-full bt-gradient hover:opacity-80 w-fit mx-auto"
        onClick={(e) => void handleSubmit(e)}
      >
        Generate
      </button>

      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center">
          <Loader2 className="animate-spin w-20 h-20 mt-20" />
        </div>
      ) : (
        !!output&&(<div className="h-fit w-full mt-20 justify-center rounded-md border-2 border-gray-300  dark:text-gray-200 py-10 flex flex-row flex-wrap gap-5 text-gray-800 p-5 ">
          {/* @ts-ignore */}
          {output.map((img: string) => (
            <img src={img} loading='lazy' alt="generated" className=" shadow-2xl w-full h-full max-w-[400px] max-h-[400px]" />
          ))}
        </div>)
      )}
     
    </div>
  );
}

export default ImageGenerator