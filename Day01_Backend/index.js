require('dotenv').config()

const express = require("express")
const app = express()

// const PORT = 3000;

const githubdata = {
  "login": "Waleed-Web-Dev",
  "id": 126647130,
  "node_id": "U_kgDOB4x7Wg",
  "avatar_url": "https://avatars.githubusercontent.com/u/126647130?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Waleed-Web-Dev",
  "html_url": "https://github.com/Waleed-Web-Dev",
  "followers_url": "https://api.github.com/users/Waleed-Web-Dev/followers",
  "following_url": "https://api.github.com/users/Waleed-Web-Dev/following{/other_user}",
  "gists_url": "https://api.github.com/users/Waleed-Web-Dev/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Waleed-Web-Dev/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Waleed-Web-Dev/subscriptions",
  "organizations_url": "https://api.github.com/users/Waleed-Web-Dev/orgs",
  "repos_url": "https://api.github.com/users/Waleed-Web-Dev/repos",
  "events_url": "https://api.github.com/users/Waleed-Web-Dev/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Waleed-Web-Dev/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Waleed Ahmed",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "I am a web developer. I want to make world a better place through technology.",
  "twitter_username": null,
  "public_repos": 6,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-03-01T05:49:52Z",
  "updated_at": "2024-08-10T12:19:23Z"
}

app.get("/", (req,res )=> {
      res.send("<h1>Hello </h1>")
})



app.get("/Me", (req,res) => {
  res.json(githubdata)
})

app.listen(process.env.PORT, () => {
  console.log("Good");
  
})