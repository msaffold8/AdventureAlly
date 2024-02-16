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
        content: `Craft a meticulously detailed travel itinerary for ${destination}, spanning from ${startDate} to ${endDate}. The itinerary should guide the traveler through each day with time-specific activities, providing a mix of adventure, culture, and culinary experiences. For each activity, include the best time to visit, why it’s recommended, and how long the traveler should spend there. Ensure the itinerary:

        - Starts with an engaging morning activity,
        - Includes midday meals at local favorites,
        - Suggests afternoon explorations or leisure activities,
        - Concludes with evening dining and entertainment options.
        
        Emphasize unique local experiences that showcase the destination's culture and natural beauty. The itinerary should flow logically, considering travel time between locations, and offer practical tips to enhance the adventure. Aim for clarity, conciseness, and compelling descriptions to inspire and facilitate an unforgettable journey.`,
      },
    ],
    model: "gpt-3.5-turbo",
    max_tokens: 100,
  });

  return completion.choices[0].message.content;
}
