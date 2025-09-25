"use client";

import "regenerator-runtime";

import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { FaCamera } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { CiMicrophoneOn } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { useState } from "react";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Main: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const googleLogo: string =
    "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";

  const router = useRouter();
  const onSearchSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    router.push(`https://www.google.com/search?q=${search}`);
  };

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  const startListening = () =>{
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  }

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setSearch(transcript);
  };

  return (
    <div className="items-center flex flex-col mt-28 ">
      <Image src={googleLogo} alt="logo" width={270} height={100} />

      <form
        className="flex border mt-7 px-5 py-2 rounded-full w-2/5 items-center hover:shadow-md"
        onSubmit={(e) => onSearchSubmit(e)}
      >
        <CiSearch className="text-xl" />
        <input
          className="w-full focus:outline-none pl-2"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search || transcript}
        />
        {listening ? (
          <FaMicrophone
            className="mr-3 text-xl text-slate-800"
            onClick={() => stopListening()}
          />
        ) : (
          <CiMicrophoneOn
            className="mr-3 text-xl text-slate-800"
            onClick={() => startListening()}
          />
        )}

        <FaCamera className="text-xl text-slate-600" />
      </form>

      <div className="mt-7">
        <button
          className="text-sm bg-slate-100 mr-4 py-2 px-4 rounded hover:border"
          onClick={(e) => onSearchSubmit(e)}
        >
          Google Search
        </button>
        <button
          className="text-sm bg-slate-100 py-2 px-4 rounded hover:border"
          onClick={() => router.push("http://www.google.com/doodles")}
        >
          I&apos;m Feeling Lucky
          
        </button>
      </div>
    </div>
  );
};

export default Main;
