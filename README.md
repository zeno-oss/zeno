# Zeno Stack

A Monorepo featuring Next.js + Electron + Expo (React Native) + tRPC 
 
[![Stars](https://img.shields.io/github/stars/shiroyasha9/terner?style=social)](https://github.com/shiroyasha9/terner)

## Screenshots

<img width="1440" alt="Screenshot 2022-11-03 at 4 12 21 AM" src="https://user-images.githubusercontent.com/48734821/199616283-cd0be9b2-7cc2-46ee-b580-f2edb5d93d8f.png">

## Installation

Requires Yarn (if you don't have yarn, install it by `npm install -g yarn`)

Install Dependencies
```
yarn
```
To Run The Electron App & Next.js server (at http://localhost:8888):
```
yarn workspace nextron dev
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
