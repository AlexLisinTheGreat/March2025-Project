# Setup

Go to `/config/site.ts` to name your site (name that appears in the browser tab and search engine results) and the description (search engine results). Also, `/public/favicon.ico` is the small icon in the browser tab. This can be replaced with a logo or whatever.

# What's included?

## Toastify

Allows the code to display toast messages. The <ToastContainer /> component in the `layout.tsx` file allows toasts to be displayed. Toasts can be created by the `toast(content)` function. ex. `toast("HELLO!")` would create a new toast saying "HELLO!".

## Lucide Icons

A React icon pack with over 1k icons! Browse all the icons on the [Lucide website](https://lucide.dev/icons). Find the icon you want to use and select it. Then click "Copy JSX". Paste this in your document and be sure to import the icon (hover on pasted component > Quick Fix > Add Import for Lucide).

## Hero UI Components

A React component library with many modern components that make designing UIs easier and quicker. Browse all the components with example code on the [HeroUI website](https://www.heroui.com/docs/components). Some components require `"use client"` at the top of the document.

## Prisma

Makes database communication easier supporting many different databases (SQL, SQLite, Postgres, etc.) and simplifies the connection and communication.

## Vercel Aanalytics

Sends site usage data to Vercel for generating graphics about site usage. Only works when app is deployed to Vercel.

## Clsx

Allows for easy conditional className construction.

## Zod

Input validation and sanitization.

## Axios

Promise based HTTP client.

## Bcryptjs

Provides a Typescript implementation of the bcrypt hashing function for securely hashing passwords.
