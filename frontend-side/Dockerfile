# frontend/Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]







# # Use Node.js LTS Alpine as the base image
# FROM node:lts-alpine

# # Set the working directory inside the container
# WORKDIR /usr/src/app

# # Copy package.json and package-lock.json files
# COPY package*.json ./

# # Install Node.js dependencies
# RUN npm install

# # Copy the rest of the application files
# COPY . .

# # Run the build command to generate production build (assuming your app has a build script)
# RUN npm run build

# # Expose the port your app runs on
# EXPOSE 3000

# # Specify the command to run your application
# CMD ["node", "server.js"]
