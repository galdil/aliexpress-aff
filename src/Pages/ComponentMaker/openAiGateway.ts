import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generatePrompt = (prompt: string): string => `${prompt} this`;

const reqFromOpenAi = async (prompt: string): Promise<string> => {
  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: generatePrompt(prompt),
      temperature: 0.6,
      max_tokens: 256,
    });
    return completion.data.choices[0].text?.toString() || '';
  } catch (error) {
    console.error(`error fetching openai ${error}`);
    return '';
  }
};

export default reqFromOpenAi;
