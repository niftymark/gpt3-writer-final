import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const basePromptPrefix = `
List 5 ideas of gifts that a person would love to receive for Christmas based on the activities and items they like. Please make sure to consider all the activities and items the person likes and shows in-depth research in all topics and add one crazy idea as well.

Activities and items they like:
`;
const generateAction = async (req, res) => {
  // Run first prompt
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`);

  const baseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${basePromptPrefix}${req.body.userInput}\n`,
    temperature: 0.8,
    max_tokens: 450,
  });

  const basePromptOutput = baseCompletion.data.choices.pop();

  const secondPrompt = `
  Take the following list of gift ideas and add some aspects to them how they could be personalized to that person's interest and likes. Explain why.

  Activities and items the person likes: ${req.body.userInput}

  List of gift ideas: ${basePromptOutput.text}

  Personalized gift ideas:
  `;

  // I call the OpenAI API a second time with Prompt #2
  const secondPromptCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${secondPrompt}`,
    // I set a higher temperature for this one.
    temperature: 0.85,
    // I also increase max_tokens.
    max_tokens: 650,
  });

  // Get the output
  const secondPromptOutput = secondPromptCompletion.data.choices.pop();

  // Send over the Prompt #2's output to our UI instead of Prompt #1's.
  res.status(200).json({ output: secondPromptOutput });
};

export default generateAction;
