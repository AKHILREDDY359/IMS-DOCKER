# Build the React app
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve the React app with Nginx
FROM nginx:alpine
# Copy the build output from the 'build' stage to the Nginx web root directory
COPY --from=build /app/build /usr/share/nginx/html
# Expose port 80, the default HTTP port for Nginx
EXPOSE 80
# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
