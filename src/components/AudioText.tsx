import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "./ui/input";
import axios from "axios";
import { toast } from "sonner";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Textarea } from "./ui/textarea";
import OpenAI from "openai";
const key =import.meta.env.VITE_OPEN_API_KEY

const openai = new OpenAI({ apiKey: key, dangerouslyAllowBrowser: true });

const AudioText = () => {
  const [file, setfile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [output, setOutput] = useState();
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
      const mp3 = await openai.audio.speech.create({
        model: "tts-1",
        voice: "alloy",
        input: file,
      });
      const buffer = Buffer.from(await mp3.arrayBuffer());
      // @ts-ignore
      setOutput(buffer)

 

    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    } finally {
      setIsLoading(false);
    }
  };

  console.log(!!output, !!isLoading);
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

      {(!!output || isLoading) && isLoading ? (
        <div className="w-full h-full flex items-center justify-center">
          <Loader2 className="animate-spin w-20 h-20 mt-10" />
        </div>
      ) : (
        (
          <audio controls>
            <source
              src={URL.createObjectURL(
                new Blob([output], { type: "audio/mp3" })
              )}
              type="audio/mp3"
            />
            Your browser does not support the audio element.
          </audio>
        )
      )}
    </div>
  );
};

export default AudioText;
