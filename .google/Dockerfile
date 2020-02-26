#### BUILD ####
FROM node:slim
ARG build
COPY . .
ENV REACT_APP_BUILD_ID ${build}
RUN npm ci
RUN npm run build
#### DEPLOYMENT ####
FROM node:slim
ARG fbtoken
WORKDIR /deployment
COPY --from=0 /build build
COPY --from=0 /.firebaserc .
COPY --from=0 /firebase.json .
RUN npm install -g firebase-tools
RUN firebase deploy --token ${fbtoken}