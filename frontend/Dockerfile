# ---------- Simple Vite React Dev Dockerfile ----------
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Expose the Vite dev server port
EXPOSE 3000

# Start the development server
CMD ["npm", "run", "dev", "--", "--host"]
