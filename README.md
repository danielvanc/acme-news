# Welcome to ACME News

Purpose of this project is to test the ongoing increasing demands of the ACME backend API and servers.

Website: https://acme-news.vercel.app/

## Setup 

1. Clone repo to your local
2. cd into root of project and install all packages: `npm i` or `yarn add`
3. Run project locally: `npm run dev` or `yarn dev`

## Run local build
1. Run `npm run  build` or `yarn build`

## Run locally built site (production)
1. Run `npm run start` or `yarn start`

## React Query Dev Tools

Located in the bottom left of the running project, is a red react logo.
If you click that, it will open the react-query dev tools, where you will be able to trace the relevant cache queries for both the page and post queries.

### Notes

There is a comment I've left in the `pages/articles/[id.tsx]` file to do with having to use SSR for that page. I hope it makes sense, but feel free to shoot me a question if it doesn't make any sense.

TypeScript: I've added a few types here and there. But it is incomplete. Therefore, I have disabled type checking when running a local build.

### Tech Stack
- NextJS with TypeScript
- React Query
- Emotion
- Axios
- React Icons
