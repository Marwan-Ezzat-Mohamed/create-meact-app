# Create Meact App

Create Meact App is a command-line tool that sets up a new Meact project with a basic directory structure and configuration files. It provides a convenient way to bootstrap a Meact application without having to manually set up the project structure.

## Usage

To create a new Meact app, follow these steps:

1. Ensure that Node.js is installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

2. Open your terminal or command prompt and run the following command to create a new Meact app:

   ```shell
   npx create-meact-app my-app
   ```

   Replace `my-app` with the name of your app.

3. Once the project is created, change your current directory to the project directory:
   ```shell
   cd my-app
   ```
4. Run the following command to start the development server:
   ```shell
   npm start
   ```
   This will open a new browser tab with your app running on `http://localhost:8080`.

## Project Structure

The project structure created by Create Meact App is as follows:

```
my-app
├── package.json
├── package-lock.json
├── index.html
├── index.jsx
├── webpack.config.js
├── .gitignore

```

