# Cardigan - WORK IN PROGRESS
A HyperCard clone I'm writing in Svelte. Contributors welcome!

## WIP Screenshot

 ![Just getting started](/public/screenshots/day01.png)

## Dev
1. Install Cardigan and dependencies. Cardigan uses Svelte, Vite and json-server.
```
$ git clone https://github.com/oaklandgit/Cardigan.git
$ cd Cardigan
$ npm install
```

2. You'll then need to start the json-server, a database used for development purposes. It will run on port 4000:
```
$ npm run db
http://localhost:4000/stack
```

3. Finally, start Cardigan on port 5173:
```
$ npm run dev
```

4. Point your browser to http://localhost:5173/

## What's HyperCard?
[It's all here](https://en.wikipedia.org/wiki/HyperCard). Truly a work of art created by [Bill Atkinson](https://en.wikipedia.org/wiki/Bill_Atkinson) for Apple in the late 80s, with iconography by [Susan Kare](https://en.wikipedia.org/wiki/Susan_Kare).

## What's with the name Cardigan?
A play on words. "Card Again" 😅

## Related projects in the wild
- [hypercardsimulator.com](https://hypercardsimulator.com/)
- [hypercardadventures.com](https://hypercardadventures.com/)