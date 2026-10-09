# Rank Raid launch copy and submission routes

Prepared on 9 October 2026. These are drafts, not submitted listings.

## Product details

- Name: Rank Raid
- Website: https://rankraid.world/
- Tagline: Turn your product link into a brick on Mars
- Creator: Kingsley Umoh / @Profkingkeys
- Suggested categories: startup discovery, browser games, developer projects, marketing
- Price: free to explore; paid brick actions from US$0.10 equivalent, with currency-specific checkout minimums
- Screenshots: use real current game screenshots showing the global tower, a category and a raid
- Video: show adding a link, a takeover and the resulting rank change. Supply an actual public video URL rather than a placeholder.

## Product Hunt

Submission: https://www.producthunt.com/posts/new

Login is required. Prepare the logo, screenshots and video before choosing the launch date.

### Description

Rank Raid puts your startup, business or social profile on a 3D leaderboard on Mars. Add your link, fortify a brick or drop a bomb to challenge a higher rank. Explore global and category towers without signup, and view outbound clicks for each company.

### Maker's first comment

Hi everyone, I'm Kingsley, the builder of Rank Raid.

Your startup's next opponent could be one brick above you. I wanted product discovery to feel like something people could explore and take part in, so I built a leaderboard out of bricks on Mars.

The ranking contest was inspired by outbid.lol. Rank Raid adds a 3D world, category towers, bombs and physical rank changes.

You can explore without signing up. Adding a link, fortifying a brick or raiding a position is a paid action through Flutterwave. The payment goes directly into the selected action, rather than a browser wallet.

I'd love feedback from founders and developers: is the next step clear on your phone, and which category would your project belong in?

Try it: https://rankraid.world/

## DEV Community

Create a post: https://dev.to/new
Suggested tags: showdev, webdev, javascript, gamedev

### Title

I built a startup leaderboard out of bricks on Mars

### Article

Your startup's next opponent could be one brick above you.

I built Rank Raid, a browser game where websites and social profiles become bricks in a 3D Mars leaderboard. Founders, developers, businesses and creators can add their links, strengthen a brick and challenge a higher rank with a bomb.

Try it here: https://rankraid.world/

The ranking contest was inspired by outbid.lol. I wanted to take that idea into a world you can explore, with category towers, dust, a day/night cycle and visible rank changes.

The browser scene uses Three.js. The server uses Node.js, MySQL and Redis, with Flutterwave checkout for paid actions. A successful payment needs to be verified on the server before the corresponding action is fulfilled. Browser callbacks and webhooks can arrive more than once, so the same payment must not create multiple bricks or raids.

One lesson from early testing was that an online counter needs a fallback when its socket connection fails. The repair uses Redis-backed browser heartbeats, deduplicates tabs through the browser's session identity and expires inactive entries. That is an active-browser count, not proof of unique people.

Browsing needs no signup. Payments are attached to actions instead of a balance stored in the browser.

I'd appreciate feedback on the mobile controls and how clearly the raid rules are explained. Which category should I improve next?

Built by Kingsley Umoh: https://github.com/Profkingkeys

## Hacker News

Submission: https://news.ycombinator.com/submit
Guidelines: https://news.ycombinator.com/showhn.html

### Title

Show HN: Rank Raid, a 3D product leaderboard on Mars

### URL

https://rankraid.world/

### Introductory comment

I built Rank Raid to make product discovery into an interactive leaderboard. Websites and social profiles become bricks in a 3D Mars scene, with global and category towers.

Browsing does not require signup. Adding, fortifying or raiding a brick is a paid action, with server-side payment verification. A raid must exceed the target brick's strength.

The ranking contest was inspired by outbid.lol. I used Three.js for the browser scene and Node.js, MySQL and Redis on the server.

I'm interested in feedback on the mobile interaction, the clarity of the ranking rules and whether the categories help people discover useful projects.

Follow the Show HN guidelines. Do not ask friends for upvotes.

## BetaList

Submission: https://betalist.com/submit
Guidelines: https://betalist.com/criteria
Pricing policy: https://betalist.com/support

Login and payment are required. Review the current price before buying a listing. No listing has been purchased or submitted.

### Pitch

A 3D Mars leaderboard where startups, businesses and creators turn their links into bricks, strengthen their positions and challenge higher ranks.

## Publication status

| Channel | Status |
|---|---|
| GitHub profile | Rank Raid feature published |
| GitHub portfolio evidence | Rank Raid entry published |
| Public project story | Published in RANK-RAID.md |
| Product Hunt | Draft ready; login needed |
| DEV Community | Draft ready; login needed |
| Hacker News | Draft ready; login needed |
| BetaList | Draft ready; login and paid submission needed |

Public links and useful descriptions can help discovery. They do not guarantee search ranking, customers or virality.
