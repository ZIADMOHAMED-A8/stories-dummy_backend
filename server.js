// server.js
const express = require("express");
const cors = require("cors");

const app = express();

// ✅ Railway بيدي بورت ديناميكي
const port = process.env.PORT || 5000;

app.use(cors());

// 🟢 داتا وهمية (15 يوزر مع ستوريز متنوعة)
const users = [
  // ... الداتا زي ما هي
];

// 🟢 كل اليوزرز مع الستوريز
app.get("/users", (req, res) => {
  res.json(users);
});

// 🟢 مين عنده ستوريز
app.get("/stories/users", (req, res) => {
  const result = users.map((u) => ({
    userId: u.userId,
    username: u.username,
    avatar: u.avatar,
    storiesCount: u.stories.length,
    lastStoryAt: u.stories[u.stories.length - 1]?.postedAt
  }));
  res.json(result);
});

// 🟢 كل الستوريز كلها
app.get("/stories", (req, res) => {
  const allStories = users.flatMap((u) =>
    u.stories.map((s) => ({
      ...s,
      userId: u.userId,
      username: u.username,
      avatar: u.avatar
    }))
  );

  allStories.sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt));

  res.json(allStories);
});

// 🟢 ستوريز يوزر معيّن
app.get("/stories/user/:userId", (req, res) => {
  const { userId } = req.params;
  const user = users.find((u) => u.userId == userId);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user.stories);
});

// 🟢 ستوري واحدة
app.get("/stories/:storyId", (req, res) => {
  const { storyId } = req.params;
  let story = null;
  for (const u of users) {
    story = u.stories.find((s) => s.storyId == storyId);
    if (story) break;
  }
  if (!story) return res.status(404).json({ error: "Story not found" });
  res.json(story);
});

// ✅ لازم دا يشتغل بالبورت بتاع Railway
app.listen(port, () => {
  console.log(`Dummy Stories API running on port ${port}`);
});
