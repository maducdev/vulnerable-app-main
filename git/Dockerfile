# Use Node.js official image
FROM node:16-bullseye-slim

RUN apt-get update && apt-get install -y iputils-ping

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install --only=production

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]