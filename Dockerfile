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

# Exponer el puerto 3000
EXPOSE 5173

# Comando para iniciar la aplicación
CMD ["yarn", "dev"]
