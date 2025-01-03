const OpenAI = require('openai');
const { graydontext } = require('./graydontext');
const { logActivity } = require('./logactivity.service');

const getPublicMessage = () => {
  return {
    text: "This is a public message.",
  };
};

const getProtectedMessage = () => {
  return {
    text: "This is a protected message.",
  };
};

const getAdminMessage = () => {
  return {
    text: "This is an admin message.",
  };
};

const getChatCompletion = async (req) => {
  console.log("req.body.prompt: ", req.body.prompt)
  // console.log("graydontext", graydontext)
  // return {
  //   text: "This is a chat completion message.",
  // }
  try {

    // return {
    //   text: "This is a chat completion message.",
    // }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          "role": "system",
          "content": graydontext
        },
        {
          "role": "user",
          "content": req.body.prompt
        }
      ],
      response_format: {
        "type": "text"
      },
      temperature: 0.25,
      max_completion_tokens: 7512,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
    });

    logActivity({
      useremail: req.body.useremail,
      prompt: req.body.prompt,
      completion: response.choices[0].message.content
    });    

    return {
      text: response.choices[0].message.content
    }

  } catch (error) {
    console.error('Error in the app fetching chat completion:', error);
    throw new Error('Failed to fetch chat completion in the app');
  }
};

module.exports = {
  getPublicMessage,
  getProtectedMessage,
  getAdminMessage,
  getChatCompletion
};
