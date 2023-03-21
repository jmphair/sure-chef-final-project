const express = require('express');
const router = express.Router();
require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

router.post("/ask", (req, res) => {
  const prompt = req.body.prompt;

  if (prompt == null) {
    throw new Error("Uh oh, no prompt was provided");
  }

  const responsePromise = openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    max_tokens: 1000,
    temperature: 0,
  });

  responsePromise.then((response) => {
    const completion = response.data.choices[0].text;
    return res.status(200).json({
      success: true,
      message: completion,
    });
  }).catch((error) => {
    console.log(error.message);
  });
});

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

module.exports = router;


// // async await v1
// router.post("/ask", async (req, res) => {

//   const prompt = req.body.prompt;

//   try {
//     if (prompt == null) {
//       throw new Error("Uh oh, no prompt was provided");
//     }

//     // trigger OpenAI completion
//     const response = await openai.createCompletion({
//       model: "text-davinci-003",
//       prompt,
//       max_tokens: 1000,
//       temperature: 0,
//     });

//     const completion = response.data.choices[0].text;

//     return res.status(200).json({
//       success: true,
//       message: completion,
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

// module.exports = router;