1. Step 1

    Open your package.json and add a homepage field for your project:

    `"homepage": "https://myusername.github.io/my-app",`

    or for a GitHub user page:

    `"homepage": "https://myusername.github.io",`

    or for a custom domain page:

    `"homepage": "https://mywebsite.com",`

    Create React App uses the homepage field to determine the root URL in the built HTML file.
- - -
1. ## Step 2: Install gh-pages and add deploy to scripts in package.json

    Now, whenever you run npm run build, you will see a cheat sheet with instructions on how to deploy to GitHub Pages.

    To publish it at `https://myusername.github.io/my-app`, run:

    `bun add gh-pages --save`

    Add the following scripts in your package.json:

    ```json
        "scripts": {
            "predeploy": "vite build",
            "deploy": "gh-pages -d dist",
            "dev": "vite",
            "build": "vite build",
        ...
        }
    ```
    The predeploy script will run automatically before deploy is run.
- - -
1. ## 