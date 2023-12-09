video link: https://www.youtube.com/watch?v=ZiigrHO9EBo&t=1s

- go to https://react-icons.github.io/react-icons/
- install react icon by typing :npm install react-icons --save: on terminal
- after installation check if react icons are now appearing in package.json.

- go to https://ui.shadcn.com/
- click on get started
- In installation you will find command: "npx shadcn-ui@latest init"
- mention global css file, if created an extra app folder than delete it
- update tailwind.config.ts instead of tailwind.config.ts now allow yes.

- go to https://daisyui.com/docs/install/
- copy the installation code and type it in terminal: "npm i -D daisyui@latest".
- edit tailwind.config.ts file in last code line will appear like this : "plugins: [require("tailwindcss-animate")]": you to update it like this: "  plugins: [require("tailwindcss-animate"),require("daisyui")]".

- for theme customization you can also create your own color by:
- go to https://colorhunt.co/ and select color which you want to use and copy the code.
- edit tailwind.config.ts file go extend and than color now create a value in object i.e. myindigo:'#711DB0.

video link: https://www.youtube.com/watch?v=sAmK7PTxSy8

- for navigation go to shadecn and get the component installed by going : https://ui.shadcn.com/docs/components/navigation-menu.

- install by typing: "npx shadcn-ui@latest add navigation-menu" on terminal
- create a navbar.tsx in components folder
- type rafce and press tab (React Arrow Function Component with ES7)
- search navbar component in daisy ui.
- copy the jsx code of navbar and paste it in navbar.tsx
- nav link component from shadcn
