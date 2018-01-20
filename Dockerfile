FROM node:8

# Install and configure "serve".
RUN npm install -g serve
CMD serve -p 3000 -s build
EXPOSE 3000

# Copy the current dirrectory contents into the container at / app
COPY . .

# Get dependancies
RUN npm install
# Build the app
RUN npm run build --production
