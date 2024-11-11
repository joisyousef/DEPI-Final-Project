# Stage 1: Build the frontend
FROM node:18 AS frontend

WORKDIR /app/Frontend

COPY Frontend/package*.json ./

RUN npm install

COPY Frontend/ ./

RUN npm run build

# Stage 2: Build the backend
FROM node:18 AS backend

WORKDIR /app/Backend

COPY Backend/package*.json ./

RUN npm install

COPY Backend/ ./

EXPOSE 3000

CMD ["npm", "start"]

# Stage 3: Final image
FROM node:18

WORKDIR /app

COPY --from=backend /app/Backend /app/Backend

COPY --from=frontend /app/Frontend/build /app/Backend/public

EXPOSE 3000

CMD ["npm", "start"]
