FROM node
WORKDIR /app
COPY package.json /app
COPY views/ /app/views/
COPY app.js /app/app.js 
RUN npm install 
ENV TEAM_NAME='DOCKER TEAM'
EXPOSE 3000
CMD ["node", "app.js"]