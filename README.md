# Project Title

<!-- GitHub badges -->

[![Latest release](https://img.shields.io/github/v/release/ladunjexa/nextjs13-threads?label=Latest%20release&style=social)](https://github.com/ladunjexa/nextjs13-threads/releases/tag/v0.1.0)
[![Stars](https://img.shields.io/github/stars/ladunjexa/nextjs13-threads?style=social)](https://github.com/ladunjexa/nextjs13-threads/stargazers)
[![Fork](https://img.shields.io/github/forks/ladunjexa/nextjs13-threads?style=social)](https://github.com/ladunjexa/nextjs13-threads/forks)
[![GitHub commits](https://img.shields.io/github/commit-activity/t/ladunjexa/nextjs13-threads?style=social&logo=github)](https://github.com/ladunjexa/nextjs13-threads/commits)
[![Pull requests](https://img.shields.io/github/issues-pr/ladunjexa/nextjs13-threads?style=social&logo=github)](https://github.com/ladunjexa/nextjs13-threads/pulls)

![demo](https://i.ibb.co/2dSC0TQ/Thumbnail-1.png)

[![ladunjexa](https://custom-icon-badges.demolab.com/badge/made%20by%20-ladunjexa-556bf2?logo=github&logoColor=white&labelColor=101827)](https://github.com/luadnjexa)
[![License](https://img.shields.io/github/license/ladunjexa/nextjs13-threads?color=dddddd&labelColor=000000)](https://github.com/ladunjexa/nextjs13-threads/blob/main/LICENSE)
[![Top Language](https://img.shields.io/github/languages/top/ladunjexa/nextjs13-threads?logo=github&logoColor=%23007ACC&label=TypeScript)](https://www.typescriptlang.org/)
[![Contributors](https://img.shields.io/github/contributors/ladunjexa/nextjs13-threads?style=flat&color=orange&label=Contributors)](https://github.com/ladunjexa/nextjs13-threads/graphs/contributors)
![Release](https://img.shields.io/github/release/ladunjexa/nextjs13-threads.svg)
![PRs](https://img.shields.io/badge/PRs-welcome-ff69b4.svg?style=shields)
![deployment](https://img.shields.io/github/deployments/ladunjexa/nextjs13-threads/Production?logo=vercel&label=Website)
[![Known Vulnerabilities](https://snyk.io/test/github/ladunjexa/nextjs13-threads/badge.svg)](https://snyk.io/test/github/ladunjexa/nextjs13-threads)

## 🌐 Live Demo

Explore the live demonstration of the project: [nextjs13-threads](https://nextjs13-threads.vercel.app/)

## 📝 Description

Threads web application, a social media platform that allows users to share their thoughts, with their friends and family. Threads is a full-stack web application built with TypeScript using Next.js 13 with Server Side Rendering. It uses MongoDB as a database, and Clerk as an authentication provider. It also uses UploadThing to upload images to the cloud. The application is styled with Tailwind CSS and Shadcn components.

<details><summary><b>Folder Structure</b></summary>

```bash
nextjs13-threads/
├── app/
├   ├── favicon.ico
├   ├── globals.css
├   ├── (auth)/
├   ├   ├── onboarding/
├   ├   ├   └── page.tsx
├   ├   ├── sign-in/[[...sign-in]]/
├   ├   ├   └── page.tsx
├   ├   ├── sign-up/[[...sign-up]]/
├   ├   ├   └── page.tsx
├   ├   └── layout.tsx
├   ├── (root)/
├   ├   ├── layout.tsx
├   ├   ├── page.tsx
├   ├   ├── activity/
├   ├   ├   └── page.tsx
├   ├   ├── communities/
├   ├   ├   ├── [id]/
├   ├   ├   ├   └── page.tsx
├   ├   ├   └── page.tsx
├   ├   ├── create-thread/
├   ├   ├   └── page.tsx
├   ├   ├── edit-thread/[id]/
├   ├   ├   └── page.tsx
├   ├   ├── explore/
├   ├   ├   └── page.tsx
├   ├   ├── profile/
├   ├   ├   ├── [id]/
├   ├   ├   ├   └── page.tsx
├   ├   ├   └── edit/
├   ├   ├       └── page.tsx
├   ├   ├── search/
├   ├   ├   └── page.tsx
├   ├   └── thread/
├   ├       ├── [id]/
├   ├       ├   └── page.tsx
├   ├       └── reactions/[id]/
├   ├           └── page.tsx
├   └── api/
├       ├── uploadthing/
├       ├   └── page.tsx
├       └── webhook/clerk/
├              └── route.tsx
├── components/
├   ├── atoms/
├   ├   ├── CommunityCard.tsx
├   ├   ├── ThreadCard.tsx
├   ├   └── UserCard.tsx
├   ├── cards/
├   ├   ├── EditThread.tsx
├   ├   ├── FollowUser.tsx
├   ├   └── ReactThread.tsx
├   ├── forms/
├   ├   ├── AccountProfile.tsx
├   ├   ├── Comment.tsx
├   ├   ├── DeleteThread.tsx
├   ├   └── PostThread.tsx
├   ├── shared/
├   ├   ├── Bottombar.tsx
├   ├   ├── Topbar.tsx
├   ├   ├── LeftSidebar.tsx
├   ├   ├── RightSidebar.tsx
├   ├   ├── Pagination.tsx
├   ├   ├── Searchbar.tsx
├   ├   ├── ProfileHeader.tsx
├   ├   └── ThreadsTab.tsx
├   └── ui/ (generated by shadcn/ui)
├       ├── button.tsx
├       ├── form.tsx
├       ├── input.tsx
├       ├── label.tsx
├       ├── tabs.tsx
├       └── textarea.tsx
├── constants/
├   └── index.js
├── lib/
├   ├── mongoose.ts
├   ├── uploadthing.ts
├   ├── utils.ts
├   ├── actions/
├   ├   ├── community.actions.ts
├   ├   ├── thread.actions.ts
├   ├   └── user.actions.ts
├   ├── models/
├   ├   ├── community.model.ts
├   ├   ├── thread.model.ts
├   ├   └── user.model.ts
├   └── validations/
├       ├── thread.ts
├       └── user.ts
├── public/
├   ├── next.svg
├   ├── vercel.svg
├   └── assets/
├       └── [[...]].svg
├── components.json
├── middleware.ts
├── next.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tailwind.config.js (meaningless)
└── tsconfig.ts
```

</details><br/>

<details><summary><b>Dive into each folder and see what they contain</b></summary>

#### `app/`

`(auth)/` - `(root)/` - `(api)/`

In the app directory, nested folders are normally mapped to URL paths. However, you can mark a folder as a Route Group to prevent the folder from being included in the route's URL path.

This allows you to organize your route segments and project files into logical groups without affecting the URL path structure.

For example,

<img src="https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Froute-group-organisation.png&w=1920&q=75&dpl=dpl_5QyHJTqH6oRYZ4QJMFM7s3b9DHZZ" width="50%" />

#### `components/`

`atoms/` - `cards/` - `forms/` - `shared/` - `ui/`

The components directory contains all the components used in the application. The components are grouped into atoms, cards, forms, shared and ui.
the `ui` folder generated by `shadcn/ui` package and contains all the required shadcn components that used in the application.

#### `constants/`

`index.js`

This is a JavaScript code contains all the constants used in the application, specifically the Sidebar Navigation (`sidebarLinks`), Profile Tabs (`profileTabs`) and Community Tabs (`communityTabs`) constants.

#### `lib/`

`actions/` - `models/` - `validations/` - `mongoose.ts` - `uploadthing.ts` - `utils.ts`

The **lib** folder holds crucial components for _Threads App_:

- **actions**: Manage actions for Community, Thread, and User entities using Mongoose for database interaction.
- **models**: Define mongoose schemas for Community, Thread, and User entities.
- **validations**: Provide validation schemas with Zod for Thread and User data.
- **mongoose.ts**: Establishes and manages MongoDB connections for the application.
- **uploadthing.ts**: Offers a React utility for simplified file uploads to UploadThing.
- **utils.ts**: Contains various reusable utility functions.

#### `public/`

`assets/` - `next.svg` - `vercel.svg`

The public directory contains the media used in the application. The assets folder contains all the images used in the application.

</details>

## 📖 Table of Contents

<details><summary>Table of Contents</summary>

- [Live Demo](#-live-demo)
- [Description](#-description)
- [Technologies Used](#-technologies-used)
- [Get Started](#-get-started)
  - [Prerequisites](#-prerequisites)
  - [Installation and Run Locally](#-installation-and-run-locally)
  - [Scripts](#-scripts)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
  - [Deploy to production (manual)](#-deploy-to-production-manual)
  - [Deploy on Vercel (recommended)](#-deploy-on-vercel-recommended)
  - [Deploy on Netlify](#-deploy-on-netlify)
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
  - [Bug / Feature Request](#-bug--feature-request)
- [Acknowledgements](#-acknowledgements)
- [References](#-references)
- [Contact Us](#-contact-us)
- [License](#-license)

</details>

## ✨ Technologies Used

<details><summary><b>Threads</b> is built using the following technologies:</summary>

- [TypeScript](https://www.typescriptlang.org/): TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
- [Next.js](https://nextjs.org/): Next.js is a React framework for building server-side rendered and statically generated web applications.
- [Tailwind CSS](https://tailwindcss.com/): Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.
- [Shadcn](https://shadcn.com/): Shadcn is a collection of Tailwind CSS components.
- [Clerk](https://clerk.dev/): Clerk is a developer-first authentication API that handles all the logic for user sign up, sign in, and more.
- [UploadThing](https://uploadthingy.com/): UploadThing is a simple, fast, and reliable file uploader for your website.
- [MongoDB](https://www.mongodb.com/): MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.
- [Mongoose](https://mongoosejs.com/): Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
- [Zod](https://zod.dev/): Zod is a TypeScript-first schema declaration and validation library.
- [svix](https://svix.com/): Svix is a webhook proxy that allows you to receive webhooks locally.
- [Vercel](https://vercel.com/): Vercel is a cloud platform for frontend developers, providing the frameworks, workflows, and infrastructure to build a faster, more personalized Web.

</details><br/>

[![Technologies Used](https://skillicons.dev/icons?i=ts,nextjs,tailwind,mongodb,vercel)](https://skillicons.dev)

## 🧰 Get Started

To get this project up and running in your development environment, follow these step-by-step instructions.

### 📋 Prerequisites

In order to install and run this project locally, you would need to have the following installed on your local machine.

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/get-npm)
- [Git](https://git-scm.com/downloads)
- [MongoDB](https://www.mongodb.com/try/download/community)

### ⚙️ Installation and Run Locally

**Step 0:**

Note :bangbang: the application uses Clerk for Authentication and User Management, therefore, you need to create Clerk account [here](https://clerk.dev/) and sets the `CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` environment variables in `.env` file. Also, the different URLs for the Clerk sign-in, sign-up, after sign-in and after sign-up pages.

Note :bangbang: the application uses a MongoDB database, therefore, you need to create a database and connect it to the application, for this, change the `MONGODB_URL` environment variable in `.env` file located in `server` folder.

Note :bangbang: the application uses a UploadThing Cloud, therefore, you need to create UploadThing account [here](https://uploadthing.com/) and sets the `UPLOADTHING_SECRET` and `UPLOADTHING_APP_ID` environment variables in `.env` file.

After following all the instructions above, we'll want to create a new webhook on Clerk. To do this, go to the [Clerk Dashboard](https://dashboard.clerk.dev/), click on the "Webhooks" tab, and then click "Add Endpoint". For the Endpoint URL, enter `http://<PASTE-YOUR-LINK-HERE>/api/webhook/clerk`. For the evetnts, select the "organization", "organizationDomain", "organizationInvitation" and "organizationMembership". Then click "Create" to create the webhook. get the signing secret and set it as `CLERK_WEBHOOK_SECRET` environment variable in `.env` file.

**Step 1:**

Download or clone this repo by using the link below:

```bash
git clone https://github.com/ladunjexa/nextjs13-threads.git
```

**Step 2:**

Execute the following command in the root directory of the downloaded repo in order to install dependencies:

```bash
npm install
```

**Step 3:**

Execute the following command in order to run the development server locally:

```bash
npm run dev
```

**Step 4:**

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 📜 Scripts

All scripts are defined in the `package.json` file. Here is a list of all scripts:

| Script          | Action                                      |
| :-------------- | :------------------------------------------ |
| `npm install`   | Installs dependencies                       |
| `npm run dev`   | Starts local dev server at `localhost:3000` |
| `npm run build` | Build your production site to `./dist/`     |
| `npm run start` | Start your production site locally          |
| `npm run lint`  | Run ESLint                                  |

## 🔒 Environment Variables

Environment variables[^10] can be used for configuration. They must be set before running the app.

> [Environment variables](https://en.wikipedia.org/wiki/Environment_variable) are variables that are set in the operating system or shell, typically used to configure programs.

**Threads** uses [Clerk](https://clerk.com), [UploadThing](https://uploadthing.com/), and [MongoDB](https://mongodb.com) as external services. You need to create an account on each of these services and get the required credentials to run the app.

Create a `.env` file in the root directory of the project and add the following environment variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<CLERK_PUBLISHABLE_KEY>
CLERK_SECRET_KEY=<CLERK_SECRET_KEY>
NEXT_CLERK_WEBHOOK_SECRET=<CLERK_WEBHOOK_SECRET>

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

MONGODB_URL=<MONGODB_URL>

UPLOADTHING_SECRET=<UPLOADTHING_SECRET>
UPLOADTHING_APP_ID=<UPLOADTHING_APP_ID>
```

## 🚀 Deployment

#### Deploy to production (manual)

You can create an optimized production build with the following command:

```bash
npm run build
```

#### Deploy on Vercel (recommended)

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fladunjexa%2Fnextjs13-threads)

#### Deploy on Netlify

You can also deploy this Next.js app with [Netlify](https://www.netlify.com/).

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ladunjexa/nextjs13-threads)

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 💡 Features

Threads web application comes with the following features:

- [x] [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) Threads, Communities and Profiles
- [x] Like Threads
- [x] Multi-level Comment Threads
- [x] Follow Profiles
- [x] Search Profiles and Communities
- [x] Activity Feed (Likes, Comments, Follows)
- [x] Explore Feed (Threads of Followed Profiles)
- [x] Profile Tabs (Threads, Followers, Following)
- [x] Community Tabs (Threads, Members, Requests)
- [x] Suggested Communities and Profiles
- [x] Thread Likes Page (Profiles that liked a Thread)

and much more...

In terms of technical features, Threads web application comes with the following features:

- [x] TypeScripted Codebase with Next.js
- [x] Authentication with Clerk
- [x] User Management with Clerk
- [x] Organization Management with Clerk
- [x] File Upload with UploadThing
- [x] Server Side Rendering with Next.js
- [x] MongoDB Database
- [x] Mongoose ODM
- [x] Zod Validation
- [x] Shadcn Components
- [x] Tailwind CSS
- [x] Svix Webhook Proxy
- [x] Vercel Deployment

and much more..

## 🤳 Screenshots

#### Sign In

![SignIn](.github/assets/sign-in.png)

#### Sign Up

![SignUp](.github/assets/sign-up.png)

#### Onboarding

![Onboarding](.github/assets/onboarding.png)

#### Home

![Home](.github/assets/home.png)

#### Explore

![Explore](.github/assets/explore.png)

#### Search

![Search](.github/assets/search.png)

#### Activity

![Activity](.github/assets/activity.png)

#### Create Thread

![CreateThread](.github/assets/create-thread.png)

#### Communities

![Communities](.github/assets/communities.png)

#### My Profile

![Profile](.github/assets/my-profile.png)
![FollowersTab](.github/assets/my-profile-followers-tab.png)

#### Edit Profile

![EditProfile](.github/assets/edit-profile.png)

#### User Profile

![UserProfile](.github/assets/user-profile.png)

#### Create Organization

![CreateOrg](.github/assets/create-organization.png)

#### Community Profile

![ComProfile](.github/assets/community-profile.png)

#### Thread Page

![ThreadPage](.github/assets/thread-page.png)

#### Thread Likes Page

![ThreadLikesPage](.github/assets/thread-likes-page.png)

## 🔧 Contributing

[![contributors](https://contrib.rocks/image?repo=ladunjexa/nextjs13-threads)](https://github.com/ladunjexa/nextjs13-threads/graphs/contributors)

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

To fix a bug or enhance an existing module, follow these steps:

1. Fork the repo
2. Create a new branch (`git checkout -b improve-feature`)
3. Make the appropriate changes in the files
4. Commit your changes (`git commit -am 'Improve feature'`)
5. Push to the branch (`git push origin improve-feature`)
6. Create a Pull Request 🎉

### 📩 Bug / Feature Request

If you find a bug (failure of a module to execute its intended function), kindly open an issue [here](https://github.com/ladunjexa/nextjs13-threads/issues/new) by including the issue with a title and clear description.

If you'd like to request a new function, feel free to do so by opening an issue [here](https://github.com/ladunjexa/nextjs13-threads/issues/new). Please include sample queries and their corresponding results.

## 💎 Acknowledgements

I'd like to express my gratitude to the following people who helped me with this project and made it possible:

- [Clerk](https://clerk.dev/)
- [UploadThing](https://uploadthingy.com/)
- [MongoDB](https://mongodb.com)
- [Mongoose](https://mongoosejs.com/)
- [Zod](https://zod.dev/)
- [Shadcn](https://shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Svix](https://svix.com/)
- [Vercel](https://vercel.com/)
- [JavaScript Mastery](https://www.jsmastery.pro/)

## 📚 References

Adrian Hajdin. (2023). [Build and Deploy a Full Stack MERN Next.js 13 Threads App | React, Next JS, TypeScript, MongoDB](https://www.youtube.com/watch?v=O5cmLDVTgAs&t=2577s). YouTube.

## 📞 Contact Us

[![Telegram](https://img.shields.io/badge/Telegram-@ladunjexa-2CA5E0?style=social&logo=telegram&logoColor=000000)](https://t.me/ladunjexa)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-ladunjexa-blue?style=flat&logo=linkedin&logoColor=b0c0c0&labelColor=363D44)](https://www.linkedin.com/in/lironabutbul)
[![Instagram](https://img.shields.io/badge/Instagram-ladunjexa-grey?style=flat&logo=instagram&logoColor=b0c0c0&labelColor=8134af)](https://www.instagram.com/ladunjexa)
[![Discord](https://img.shields.io/badge/Discord-ladunjexa-7289da?style=flat&logo=discord&logoColor=b0c0c0&labelColor=2c2f33)](https://discord.com/users/827996364331810816)

<!-- [![Twitter](https://img.shields.io/twitter/follow/ladunjexa.svg?style=social)](https://twitter.com/intent/follow?screen_name=ladunjexa) -->

## 📋 License

**Threads** is open source software [licensed as MIT](https://opensource.org/license/mit/) and is free to use — See [LICENSE](https://github.com/ladunjexa/nextjs13-threads/blob/main/LICENSE) for more details.
