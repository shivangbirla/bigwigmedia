import { Loader2 } from "lucide-react";
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "./ui/input";
import axios from "axios";
import { toast } from "sonner";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Textarea } from "./ui/textarea";
import OpenAI from "openai";
import About from './About';
const key = import.meta.env.VITE_OPEN_API_KEY;

const openai = new OpenAI({ apiKey: key, dangerouslyAllowBrowser: true });

const AudioText = () => {
  const [file, setfile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [output, setOutput] = useState();
  const [audioBuffer, setAudioBuffer] = useState(null);
  const ref = useRef(null);
  const handleTranscribe = async (e: any) => {
    e.preventDefault();
    if (!file) {
      toast.error("Please Input something to generate audio");
      return;
    }
    setIsLoading(true);

    const formData = new FormData();
    formData.append("input", file);
    formData.append("voice", "alloy");
    formData.append("model", "tts-1");

    try {
      const postData = {
        model: 'tts-1',
        input: file,
        voice: "alloy"
    };
  const url = 'https://api.openai.com/v1/audio/speech';
  const apiKey = import.meta.env.VITE_OPEN_API_KEY;

      const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });



        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const blob = new Blob(["This is a blob!"], { type: "text/plain" });

        // Create an object URL from the blob
        const objectUrl = URL.createObjectURL(blob);

        // Use the object URL
        console.log(objectUrl); 
         
      // const mp3 = await openai.audio.speech.create({
      //   model: "tts-1",
      //   voice: "alloy",
      //   input: file,
      //   // response_format: "mp3",
      //   //  output_format: "mp3"
      // });
      // console.log(mp3)
      // const arrayBuffer = await mp3.arrayBuffer();
      // console.log(arrayBuffer, typeof arrayBuffer)
      // const blob = new Blob([arrayBuffer], { type: "audio/mpeg" });

      // const objectURL = URL.createObjectURL(blob);
      // console.log(blob)
      // console.log(objectURL)

      // @ts-ignore
      // setAudioBuffer(
      //   URL.createObjectURL(new Blob([arrayBuffer], { type: "audio/mpeg" }) as string)
      // );
      // mp3.
      // const buffer = await mp3.arrayBuffer()
      // buffer.
      // console.log(buffer)
      // const blobb = await mp3.blob()
      // console.log(blobb)

      // const blob = new Blob([buffer], { type: "audio/mpeg" });
      // const objectURL = URL.createObjectURL(blobb);
      //  console.log(blob)
      //  console.log(objectURL)
      // @ts-ignore
      //  ref.current.src = objectURL;
      // @ts-ignore
      // ref.current.play();
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    } finally {
      setIsLoading(false);
    }
  };
console.log(audioBuffer)
  return (
    <div className=" flex flex-col gap-4 m-auto w-full max-w-4xl rounded-lg dark:bg-[#262626] bg-white p-6 shadow-lg">
      <div className="flex flex-col   w-full max-w-[844px]  self-start gap-2">
        <Label className="dark:text-white self-start text-black text-left font-outfit text-xl font-semibold">
          Text to Audio Conversion
        </Label>
        <Textarea
          className="mb-4 h-24 w-full min-w-[300px] rounded-md border-2 dark:bg-[#262626] border-gray-300 p-4"
          placeholder="Enter Prompt to generate audio"
          value={file}
          onChange={(e: any) => setfile(e.target.value)}
        />
      </div>
      <button
        className="text-white text-center font-outfit md:text-lg font-semibold flex  text-xs py-3 px-10 justify-center items-center gap-4 flex-shrink-0 rounded-full bt-gradient hover:opacity-80 w-fit mx-auto"
        onClick={(e) => void handleTranscribe(e)}
      >
        Generate
      </button>

      <audio controls>
        <source  ref={ref} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {/* {(!!output || isLoading) && isLoading ? (
        <div className="w-full h-full flex items-center justify-center">
          <Loader2 className="animate-spin w-20 h-20 mt-10" />
        </div>
      ) : (
        (
          
        )
      )} */}
    </div>
  );
};

export default AudioText;
