# Use an official Node runtime as a parent image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any needed packages
RUN npm install

# Bundle app source
COPY . .

# Build the React app
RUN npm run build

# Install serve to serve the static build files
RUN npm install -g serve

# Define environment variable
ENV PORT 3010

# Run serve when the container launches
CMD ["serve", "-s", "build", "-l", "3010", "--single"]

