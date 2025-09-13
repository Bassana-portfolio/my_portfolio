# ================================
# 1. Build stage
# ================================
FROM node:18-alpine AS builder

# Crée un dossier de travail
WORKDIR /app

# Copie les fichiers de dépendances
COPY package*.json ./
COPY tsconfig*.json ./

# Installe les dépendances (production + dev pour build)
RUN npm install

# Copie le reste du code source
COPY . .

# Build l'application Next.js
RUN npm run build

# Supprime les dépendances de dev pour alléger l’image
RUN npm prune --production


# ================================
# 2. Production stage
# ================================
FROM node:18-alpine AS runner

WORKDIR /app

# Définit l'environnement en production
ENV NODE_ENV production

# Crée un utilisateur non-root (bonne pratique)
RUN addgroup --system app && adduser --system -G app app

# Copie les fichiers nécessaires depuis le builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Définit le port
EXPOSE 3000

# Utilise l'utilisateur sécurisé
USER app

# Commande de lancement
CMD ["npm", "start"]
