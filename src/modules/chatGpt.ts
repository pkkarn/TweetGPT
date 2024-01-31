import OpenAI from "openai";

export const chatGpt = async (context, setText) => {
    chrome.storage.local.get(['apiKey'], async (result) => {
        const { apiKey } = result
        const openai = new OpenAI({apiKey: apiKey, dangerouslyAllowBrowser: true});
        const prompt = `Generate a tweet based on given context. \nContext: ${context} \n\nTweet:\n`
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { "role": "system", "content": "You help in writing tweets" },
                { "role": "user", "content": prompt }
            ],
            stream: true,
        });
        setText('')
        for await (const chunk of completion) {
            setText((oldText) => {
                // Here, oldText is the old value of text
                const newText = oldText + chunk.choices[0].delta.content
                return newText; // Return the new value to update the state
            });
            console.log(chunk.choices[0].delta.content);
        }
    })
}
