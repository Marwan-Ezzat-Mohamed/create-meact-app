#!/usr/bin/env node

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

// Get the name of the app from the command line arguments
const appName = process.argv[2];

// Ensure that the app name is provided
if (!appName) {
  console.error("Please provide an app name.");
  process.exit(1);
}

// Create a directory for the new app
const appPath = path.resolve(appName);
fs.mkdirSync(appPath);

// Change the current working directory to the app directory
process.chdir(appPath);

// Copy the necessary files and directories from the template
const templatePath = path.resolve(__dirname, "template");
fs.readdirSync(templatePath).forEach((file) => {
  const source = path.join(templatePath, file);
  const destination = path.join(appPath, file);
  //copy nested directories
  if (fs.lstatSync(source).isDirectory()) {
    fs.mkdirSync(destination);
    fs.readdirSync(source).forEach((nestedFile) => {
      const nestedSource = path.join(source, nestedFile);
      const nestedDestination = path.join(destination, nestedFile);
      fs.copyFileSync(nestedSource, nestedDestination);
    });
  } else {
    fs.copyFileSync(source, destination);
  }
});

// Install dependencies
console.log("Installing dependencies...");
execSync("npm install", { stdio: "inherit" });

console.log("Done! Your app is ready to use.");
