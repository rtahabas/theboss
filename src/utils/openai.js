import axios from "axios";

const OPENAI_API_KEY = "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";

console.log(OPENAI_API_KEY);

const gpt3ApiUrl = "https://api.openai.com/v1/engines/davinci-codex/completions";

async function generateCode(prompt) {
  const response = await axios.post(
    gpt3ApiUrl,
    {
      prompt: prompt,
      max_tokens: 512,
      temperature: 0.7,
      n: 1,
      stop: ["\n"],
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
    }
  );
  return response.data.choices[0].text;
}

export { generateCode };
