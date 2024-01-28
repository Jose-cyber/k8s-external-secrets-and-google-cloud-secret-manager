FROM node:slim
WORKDIR /usr/app
COPY package*.json ./
ADD src/ ./src/
RUN npm install --ignore-scripts
USER node
CMD [ "npm", "run", "prd" ]