# Tailwind CSS CLI Setup (v3.0.24)

## Steps
- create a project folder like: `tailwindcss-cli` or whatever you wish
- cd into it `cd tailwindcss-cli`
- execute the command `npm init -y`
- execute the command `npm i -D tailwindcss`
- execute the command `npx tailwindcss init`
- create `layouts\index.html`
- add the line of code into it
  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Tailwind CSS CLI</title>
    </head>
    <body>
      <div
        class="w-full h-screen p-12 bg-gradient-to-br from-purple-100 to-pink-100 via-cyan-100"
      >
        <div>
          <h1>Get started with Tailwind CSS</h1>
          <p>
            Tailwind CSS works by scanning all of your HTML files, JavaScript
            components, and any other templates for class names, generating the
            corresponding styles and then writing them to a static CSS file.
          </p>
          <a href="https://tailwindcss.com" target="_blank">
            <strong>Visit the official page</strong>
          </a>
          <div class="mt-12">
            <a
              href="https://twitter.com/tailwindcss"
              target="_blank"
              class="px-8 py-3 rounded-md bg-sky-300 shadow-md text-white hover:bg-sky-400"
              >Follow on Twitter</a
            >
          </div>
        </div>
      </div>
    </body>
  </html>
  ```
- add the line of code into `tailwind.config.js`
  ```js
  content: [
    './layouts/*.html'
  ],
  ```
- create a input css file called `tailwind.css` or whatever you wish
- paste the line of code into it
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
- create a output css file called `layouts\css\styles.css` or whatever you wish
- add this `layouts\css\styles.css` into `layouts\index.html`
  ```html
  <link rel="stylesheet" href="css/styles.css">
  ```
- now add the line of code into `package.json`
  ```json
  "scripts": {
    "dev": "npx tailwindcss -i tailwind.css -o ./layouts/css/styles.css --watch",
    "prod": "npx tailwindcss -i tailwind.css -o ./layouts/css/styles.css --minify"
  },
  ```
- now open the `layouts\index.html` on live server
- now run `npm run dev` and see the changes

## Now add typography
- run the command `npm i @tailwindcss/typography`
- add the line of code into `tailwind.config.js`
  ```js
  plugins: [
    require('@tailwindcss/typography'),
  ],
  ```
- add some class into `layouts\index.html` like: `prose prose-lg`
  ```html
  <div class="prose prose-lg">
  ```
- now run `npm run dev` and see the changes

## Now add custom css
- add the code snippet on `tailwind.css`
  ```css
  @layer components {
    .bg-primary {
      @apply bg-gradient-to-br
      from-purple-100
      to-pink-100
      via-cyan-50;
    }
  }
  ```
- add the custom class `bg-primary` on `layouts\index.html`
  ```html
  <div class="w-full h-screen p-12 bg-primary">
  ```

## Add custom class on `tailwind.config.js`
- add the code snippet on `tailwind.config.js`
  ```js
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
      }
    }
  },
  ```
- now add the custom color `clifford` on `layouts\index.html`
  ```html
  <h1 class="text-clifford">Get started with Tailwind CSS</h1>
  ```

## Using arbitrary values
- add twitter color on twitter button `bg-[#1DA1F2]`
- add shadhow on twitter button `shadow-[#1DA1F2]/40`

## Reference
- https://www.youtube.com/watch?v=h9Zun41-Ozc&t=1177s
