# backend/Dockerfile

# 使用官方 Node.js LTS 版本作為基底映像
FROM node:18-alpine

# 建立並切換到工作目錄
WORKDIR /usr/src/app

# 複製 package.json 及 package-lock.json
COPY package*.json ./

# 安裝相依套件
RUN npm install --production

# 複製程式碼
COPY . .

# 對外暴露容器內的 4000 端口
EXPOSE 4000

# 啟動指令
CMD ["node", "app.js"]
