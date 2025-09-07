// server.js
const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());

// 🟢 داتا وهمية (15 يوزر مع ستوريز متنوعة)
const users = [
  {
    userId: 1,
    username: "ziad",
    avatar: "https://i.pravatar.cc/150?img=3",
    stories: [
      {
        storyId: 101,
        mediaUrl: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=1080&h=1920&fit=crop",
        type: "image",
        postedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        duration: 5
      },
      {
        storyId: 102,
        mediaUrl: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=1080&h=1920&fit=crop",
        type: "video",
        postedAt: new Date(Date.now() - 90 * 60 * 1000).toISOString(),
        duration: 12
      }
    ]
  },
  {
    userId: 2,
    username: "ahmed",
    avatar: "https://i.pravatar.cc/150?img=12",
    stories: [
      {
        storyId: 201,
        mediaUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1080&h=1920&fit=crop",
        type: "image",
        postedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
        duration: 6
      },
      {
        storyId: 202,
        mediaUrl: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=1080&h=1920&fit=crop",
        type: "video",
        postedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
        duration: 10
      }
    ]
  },
  {
    userId: 3,
    username: "mona",
    avatar: "https://i.pravatar.cc/150?img=32",
    stories: [
      {
        storyId: 301,
        mediaUrl: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1080&h=1920&fit=crop",
        type: "image",
        postedAt: new Date(Date.now() - 20 * 60 * 1000).toISOString(),
        duration: 5
      }
    ]
  },
  {
    userId: 4,
    username: "sara",
    avatar: "https://i.pravatar.cc/150?img=47",
    stories: [
      {
        storyId: 401,
        mediaUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1080&h=1920&fit=crop",
        type: "image",
        postedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
        duration: 7
      },
      {
        storyId: 402,
        mediaUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1080&h=1920&fit=crop",
        type: "video",
        postedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        duration: 15
      }
    ]
  },
  {
    userId: 5,
    username: "omar",
    avatar: "https://i.pravatar.cc/150?img=15",
    stories: [
      {
        storyId: 501,
        mediaUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=1080&h=1920&fit=crop",
        type: "image",
        postedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
        duration: 8
      },
      {
        storyId: 502,
        mediaUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1080&h=1920&fit=crop",
        type: "video",
        postedAt: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
        duration: 9
      }
    ]
  },
  {
    userId: 6,
    username: "laila",
    avatar: "https://i.pravatar.cc/150?img=21",
    stories: [
      {
        storyId: 601,
        mediaUrl: "https://images.unsplash.com/photo-1503264116251-35a269479413?w=1080&h=1920&fit=crop",
        type: "image",
        postedAt: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
        duration: 6
      }
    ]
  },
  {
    userId: 7,
    username: "khaled",
    avatar: "https://i.pravatar.cc/150?img=9",
    stories: [
      {
        storyId: 701,
        mediaUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1080&h=1920&fit=crop",
        type: "video",
        postedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
        duration: 14
      }
    ]
  },
  {
    userId: 8,
    username: "noha",
    avatar: "https://i.pravatar.cc/150?img=33",
    stories: [
      {
        storyId: 801,
        mediaUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1080&h=1920&fit=crop",
        type: "image",
        postedAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
        duration: 5
      }
    ]
  },
  {
    userId: 9,
    username: "youssef",
    avatar: "https://i.pravatar.cc/150?img=19",
    stories: [
      {
        storyId: 901,
        mediaUrl: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=1080&h=1920&fit=crop",
        type: "video",
        postedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
        duration: 11
      }
    ]
  },
  {
    userId: 10,
    username: "hana",
    avatar: "https://i.pravatar.cc/150?img=42",
    stories: [
      {
        storyId: 1001,
        mediaUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1080&h=1920&fit=crop",
        type: "image",
        postedAt: new Date(Date.now() - 7 * 60 * 60 * 1000).toISOString(),
        duration: 6
      }
    ]
  },
  {
    userId: 11,
    username: "fady",
    avatar: "https://i.pravatar.cc/150?img=44",
    stories: [
      {
        storyId: 1101,
        mediaUrl: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1080&h=1920&fit=crop",
        type: "video",
        postedAt: new Date(Date.now() - 14 * 60 * 60 * 1000).toISOString(),
        duration: 10
      }
    ]
  },
  {
    userId: 12,
    username: "salma",
    avatar: "https://i.pravatar.cc/150?img=28",
    stories: [
      {
        storyId: 1201,
        mediaUrl: "https://images.unsplash.com/photo-1522202195461-54bdc0b3e1cf?w=1080&h=1920&fit=crop",
        type: "image",
        postedAt: new Date(Date.now() - 40 * 60 * 1000).toISOString(),
        duration: 6
      }
    ]
  },
  {
    userId: 13,
    username: "ramy",
    avatar: "https://i.pravatar.cc/150?img=8",
    stories: [
      {
        storyId: 1301,
        mediaUrl: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=1080&h=1920&fit=crop",
        type: "video",
        postedAt: new Date(Date.now() - 16 * 60 * 60 * 1000).toISOString(),
        duration: 9
      }
    ]
  },
  {
    userId: 14,
    username: "asmaa",
    avatar: "https://i.pravatar.cc/150?img=48",
    stories: [
      {
        storyId: 1401,
        mediaUrl: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=1080&h=1920&fit=crop",
        type: "image",
        postedAt: new Date(Date.now() - 50 * 60 * 1000).toISOString(),
        duration: 7
      }
    ]
  },
  {
    userId: 15,
    username: "tamer",
    avatar: "https://i.pravatar.cc/150?img=24",
    stories: [
      {
        storyId: 1501,
        mediaUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1080&h=1920&fit=crop",
        type: "video",
        postedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        duration: 13
      }
    ]
  }
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

app.listen(port, () => {
  console.log(`Dummy Stories API running on http://localhost:${port}`);
});
