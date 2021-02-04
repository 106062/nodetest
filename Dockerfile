From node:current-alpine3.12
EXPOSE 8080
COPY . /workspace
WORKDIR /workspace
RUN npm install
ENTRYPOINT npm start
