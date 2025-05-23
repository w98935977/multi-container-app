# frontend/Dockerfile

# 1. Build 階段
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# 2. Production 階段
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
# 可選：加入自訂的 nginx 設定
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
