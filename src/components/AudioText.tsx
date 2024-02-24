import { Label } from "@radix-ui/react-dropdown-menu";
import OpenAI from "openai";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { Textarea } from "./ui/textarea";
import axios from "axios";
import { BASE_URL2 } from "@/utils/funcitons";
import { useAuth } from "@clerk/clerk-react";
const key = import.meta.env.VITE_OPEN_API_KEY;

const openai = new OpenAI({ apiKey: key, dangerouslyAllowBrowser: true });

const AudioText = () => {
  const [file, setfile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [output, setOutput] = useState();
  const [audioBuffer, setAudioBuffer] = useState<string>("");
  const { getToken, isLoaded, isSignedIn, userId } = useAuth();
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


      const mp3 = await openai.audio.speech.create({
        model: "tts-1",
        voice: "alloy",
        input: file,
        // response_format: "mp3",
        //  output_format: "mp3"
      });
      const arrayBuffer = await mp3.arrayBuffer();

      const blob = new Blob([arrayBuffer], { type: "audio/mpeg" });

      const objectURL = URL.createObjectURL(blob);

      setAudioBuffer(objectURL);
      if (mp3.status === 200) {

        toast.success("hello")

        const resp = await axios.post(`${BASE_URL2}/objects/limit/decrease?clerkId=${userId}`)
        // setOutput(response.data.text);
      }
      // @ts-ignore
    } catch (error: any) {
      toast.error("There has been a problem with your fetch operation:", error);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(audioBuffer);
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

      <audio controls key={audioBuffer} autoPlay className="mx-auto">
        <source src={audioBuffer} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {audioBuffer && <a
        href={audioBuffer}
        download="audio_file.mp3"
        className="bg-blue-500 rounded-full text-white p-3 hover:bg-blue-600 mx-auto  block mt-2"
      >
        Download Audio
      </a>}
    </div>
  );
};

export default AudioText;
