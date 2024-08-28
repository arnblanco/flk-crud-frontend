# Usar la imagen oficial de Node.js 18 como base
FROM node:18-alpine

# Crear directorio de trabajo
WORKDIR /app

# Copiar package.json y yarn.lock antes de instalar las dependencias
COPY package.json yarn.lock ./

# Instalar dependencias
RUN yarn install --frozen-lockfile

# Copiar el resto de la aplicación
COPY . .

# assign permission users
RUN chmod 755 node_modules/

# Comando para iniciar la aplicación
CMD ["yarn", "dev"]
