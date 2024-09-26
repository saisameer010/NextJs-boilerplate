# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the React application
# RUN npm run build

# Expose the port the app will run on
EXPOSE 3000

# Start the application
# CMD ["npm", "start"]
CMD ["npm", "run", "dev"]
