
# babel-ts-minimal

A modern Node.js project template using Babel for ES6+/TypeScript support.

## Features

- Babel with `@babel/preset-env` and `@babel/preset-typescript` for modern JavaScript and TypeScript syntax
- Example [`Car`](src/car.ts) class using ES6 modules and TypeScript
- Entry point: [`index.ts`](src/index.ts) demonstrates usage of the Car class
- Development mode with hot-reloading via Nodemon and TS Node
- Production-ready build process with transpiled output

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run in development mode:**
   ```sh
   npm run dev
   ```
   This uses Nodemon and Babel Node to run [`src/index.ts`](src/index.ts) with automatic reload on changes.

3. **Build for production:**
   ```sh
   npm run build
   ```
   This transpiles the TypeScript source code from `src/` to `dist/` directory using Babel.

4. **Run in production mode:**
   ```sh
   npm start
   ```
   This builds the project and runs the transpiled code from the `dist/` directory.

## Project Structure

```
.
├── src/              # Source directory
│   ├── index.ts      # Entry point, imports and uses Car class (TypeScript)
│   └── car.ts        # Car class (TypeScript, ES6 module)
├── dist/             # Production build output (generated, JS)
├── babel.config.js   # Babel configuration
├── tsconfig.json     # TypeScript configuration
├── package.json      # Project metadata and scripts
└── ...
```

## License

See [`LICENSE`](LICENSE).

