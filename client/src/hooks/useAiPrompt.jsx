import { useState, useEffect } from "react";
import axios from "axios";

export default function useAiPrompt() {
  const [prompt, updatePrompt] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState(undefined);

  useEffect(() => {
    if (prompt != null && prompt.trim() === "") {
      setAnswer(undefined);
    }
  }, [prompt]);

  const sendPrompt = (event) => {
    if (event.key !== "Enter") {
      return Promise.resolve();
    }
  
    setLoading(true);
  
    const requestOptions = {
      headers: { "Content-Type": "application/json" },
    };
  
    return axios
      .post("/api/openai/potato", { prompt, type: 'potato' }, requestOptions)
      .then((res) => {
        // if (!res) {
        //   throw new Error("Something went wrong");
        // }
        
        console.log(res);

        const { message } = res.data;
        setAnswer(message);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err, "err");
        setLoading(false);
      });
  };

  return { loading, answer, sendPrompt, updatePrompt }

}