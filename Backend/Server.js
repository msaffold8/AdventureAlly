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

async function generateItinerary(destination, day) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are a expert traveler and the coolest travel itenerary creator.",
      },
      {
        role: "user",
        content: `Create a detailed itinerary for ${destination} on ${day}. Each recommendation should include a specific time, a brief description, and a link for more information or reservations where applicable. Format the itinerary as follows:

        Morning Activity:
        - Activity: [Describe the activity]
        - Time: [Start time]
        - Duration: [Duration]
        - Why it’s recommended: [Reason]
        - More info: [Link]
        
        Midday Meal:
        - Restaurant: [Name]
        - Time: [Time for lunch]
        - Recommended dish: [Dish]
        - Why it’s special: [Reason]
        - More info: [Link]
        
        Afternoon Exploration:
        - Location: [Place]
        - Time: [Start time]
        - Duration: [Duration]
        - What makes it unique: [Description]
        - More info: [Link]
        
        Evening Leisure:
        - Activity or Dining: [Description]
        - Time: [Start time]
        - Recommended: [Recommendation]
        - Why it's a must-visit: [Reason]
        - More info: [Link]
        
        Ensure the itinerary is engaging, offering a narrative that guides the traveler through their day with ease and excitement. Each part of the day should connect to the next, creating a memorable experience in ${destination}.`,
      },
    ],
    model: "gpt-4",
    max_tokens: 1000,
    temperature: 0.6,
  });

  return completion.choices[0].message.content;
}
