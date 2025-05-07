# Use an official base image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container
COPY . /app

# Install any dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 8080

# Define the command to run the application
CMD ["node", "server.js"]