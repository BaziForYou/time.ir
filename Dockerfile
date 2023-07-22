FROM keymetrics/pm2:latest-alpine

# Copy APP files
COPY . .

# Install app dependencies
RUN yarn
RUN yarn build

CMD [ "pm2-runtime", "start", "pm2.json" ]