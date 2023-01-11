# Zeno Stack

A Monorepo featuring Next.js + Electron + Expo (React Native) + tRPC

[![Stars](https://img.shields.io/github/stars/zeno-oss/zeno?style=social)](https://github.com/zeno-oss/zeno)

## Screenshots

<img width="1438" alt="Screenshot 2023-01-12 at 1 27 07 AM" src="https://user-images.githubusercontent.com/48734821/211905579-6cb2a4c1-c509-48ff-9f82-97e8af3ed308.png">


## Installation

Requires Yarn (if you don't have yarn, install it by `npm install -g yarn`)

Install Dependencies

```
yarn
```

To Run The Electron App & Next.js server (at http://localhost:8888):

```
yarn workspace desktop dev
```

To Run The Mobile Expo App:

```
yarn workspace mobile dev
```

If you want to directly run on iOS or Android, replace the dev by android or ios respectively.

## Why This Repo

I was trying to find some kind of way which allowed me to use the tRPC goodness in React Native as well as Electron.
All the solutions that I did find were either not updated, or janky at best.
And so, fast-forward to this project!

## Authors

- [@shiroyasha9](https://github.com/shiroyasha9)
- [@anujjoshi63](https://github.com/anujjoshi63)

## Credits

- Used [tRPC](https://github.com/trpc/trpc) to create end to end typesafe APIs.
- Used [Nextron](https://github.com/saltyshiomix/nextron) to bootstrap the Next.js + Electron setup.
- Used [Expo CLI](https://docs.expo.dev/) to bootstrap the expo mobile application.
- Used [Turborepo](https://github.com/vercel/turbo) to achieve a beautiful monorepo experience.
