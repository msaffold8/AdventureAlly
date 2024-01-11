const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const OpenAI = require("openai");
const openai = new OpenAI(process.env.OPENAI_API_KEY);
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// CORS setup
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.post("/create-itinerary", async (req, res) => {
  const { destination, startDate, endDate } = req.body;
  try {
    const itinerary = await generateItinerary(destination, startDate, endDate);
    res.json({ itinerary });
  } catch (error) {
    console.error("Error creating itinerary:", error);
    res.status(500).send(`Failed to create itinerary: ${error.message}`);
  }
});

async function generateItinerary(destination, startDate, endDate) {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      {
        role: "user",
        content: `Create a detailed travel itinerary for a trip to ${destination} from ${startDate} to ${endDate}. Include places to visit, activities, dining suggestions, and travel tips.`,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0].message.content;
}
