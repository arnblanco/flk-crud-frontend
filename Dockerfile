FROM node:18.19-alpine as build

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia env y el resto de la aplicación
COPY . .

# install dependencies
RUN yarn install --frozen-lockfile

# assign permission users
RUN chmod 755 node_modules/
RUN yarn build
#CMD [ "yarn", "run", "start"]

FROM nginx:alpine
WORKDIR /usr/share/nginx/html/
COPY --from=build /app/dist/ /usr/share/nginx/html/
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/default.conf /etc/nginx/conf.d
EXPOSE 5173
CMD ["nginx", "-g", "daemon off;"]