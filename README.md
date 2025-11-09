# Demo onboarding Matheus Araujo (maaraujo)

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Running on a Docker container

Generate image:

```sh
docker build -t demo_onboarding .
```

Run container

```sh
docker run -d -p 3000:3000 demo_onboarding
```
