# BarbOS — Barbara Espericueta's portfolio

A Next.js portfolio for Barbara's cybersecurity, networking, and systems projects. The Ask BarbOS assistant reads approved Markdown summaries from `knowledge/`.

## Local development

```bash
npm ci
npm run dev
```

For Ask BarbOS, set `OPENAI_API_KEY` in a local `.env.local` file. Keep that file out of Git. The portfolio pages can be viewed without a key.

## Deployment

Import this repository into Vercel as a Next.js project. Add `OPENAI_API_KEY` as a **Secret** environment variable for Preview and Production if the assistant should answer questions. Redeploy after changing environment variables. Do not add the key to the repository or expose it with a `NEXT_PUBLIC_` prefix.

The chat endpoint uses an OpenAI API project and may incur usage charges when the public site receives questions. Set a project spend limit and monitor usage before opening the assistant broadly.

When the production URL is known, add it to the site's canonical metadata and sitemap, then verify the domain in Google Search Console.
