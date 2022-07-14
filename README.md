# EDGEMONY FINAL PROJECT - TEAM B

##   SoundWave

![image](https://user-images.githubusercontent.com/101188945/178952828-8dcbc6a1-abe9-467e-85f3-780166ca6393.png)

## Organizzazione

- daily standup **lun-ven 9.30-10**
- durante il daily si segnalano problemi, si discutono implementazioni
- si lavora in maniera autonoma
- i task possono essere assegnati sia dal team leader che dal team stesso

## Strumenti

- Github
- Slack
- Google Meet & Calendar
- Framework: Next.js

## Backend

L'endpoint di backend è:

- [https://edgemony-backend.herokuapp.com/albums/](https://edgemony-backend.herokuapp.com/albums/)
- [https://edgemony-backend.herokuapp.com/playlist/](https://edgemony-backend.herokuapp.com/playlist/)

i dati esposti seguono questo schema:

```json
{
  "id": number,
  "title": string,
  "artist": string,
  "cover": string,
  "year": number,
  "length": number,
  "genres": string[],
  "songs": string[],
  "new": boolean,
  "favorite": boolean,
  "rating": number,
  "users": number[],
  "featuring": string[]
}
```

L'utilizzo degli endpoint con autenticazione è documento nel [relativo repository](https://github.com/edgemony-coding-bootcamp/edgemony-course-backend).


## Obiettivi

- **SPOTIFY CLONE!**
  - usate l'attuale UI di Spotify come punto di partenza ma siete liberi di applicare eventuali personalizzazioni
- **obiettivi minimi:**
  - visualizzare lista (in griglia) di album e playlist disponibili
    - filtri per genere
    - visualizza solo album o playlist
  - cliccando sulla cover vedo i dettagli di un singolo elemento
  - nel dettaglio di una album/playlist posso:
    - marcare un album o playlist come preferito
    - esprimere un giudizio, voto da 1 a 5
    - cancellare/nascondere l'album o playlist
  - layout responsive
- **obiettivi extra:**
  - flusso di login (signin) e mostrare solo i dati legati all'utente loggato
  - flusso creazione nuove utente (signup)
  - ricerca testuale (titolo)
  - filtri avanzati (artista, anno, ecc)
  
  ## Credentials to access
  
mail : goofy@soundwave.com

password : 1234

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
