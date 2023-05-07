# Zeno Stack

A Cross Platform Monorepo featuring Next.js + tRPC + Tauri + Vite + Expo (React Native).

__Soon To Be Updated__

[![Stars](https://img.shields.io/github/stars/zeno-oss/zeno?style=social)](https://github.com/zeno-oss/zeno)

## Provides you with a end-to-end typesafe:
- Desktop Application (Windows, Mac and Linux)
- Mobile Application (iOS, Android)
- Web Application (Next.js)
- Backend Server (tRPC)


## Screenshots

<img width="1435" alt="Screenshot 2023-01-20 at 2 48 13 AM" src="https://user-images.githubusercontent.com/48734821/213563329-43c17b87-bc4c-44c0-80da-34388c66727c.png">

## Installation

Requires Yarn (if you don't have yarn, install it by `npm install -g yarn`)

Install Dependencies

```
yarn
```

To Run The Website/Backend (Next.js + tRPC) at http://localhost:3000:

```
yarn web dev
```

To Run The Desktop App (Tauri + Vite):

```
yarn desktop dev
```

To Run The Mobile Expo App:

```
yarn mobile dev
```

If you want to directly run on iOS or Android, replace the dev by android or ios respectively in mobile command.

## Why This Repo

We were trying to find some kind of way which allowed us to use the tRPC goodness in React Native as well as Tauri - creating a cohesive and a viable solution.
All the solutions that we did find were either not updated, or janky at best.
And so, fast-forward to this project!

## Authors

- [@shiroyasha9](https://github.com/shiroyasha9)
- [@anujjoshi63](https://github.com/anujjoshi63)

## Credits

- Used [tRPC](https://github.com/trpc/trpc) to create end to end typesafe APIs.
- Used [t3](https://create.t3.gg/) to have the seamless integration of tRPC and Next.js in the web project.
- Used [Tauri](https://tauri.app/) to bootstrap the Tauri + Vite Project.
- Used [Expo CLI](https://docs.expo.dev/) to bootstrap the expo mobile application.
- Used [Turborepo](https://github.com/vercel/turbo) to achieve a beautiful monorepo experience.
