<p align="center">
    <h3 align="center">RIDÍCULO</h3>
  </a>
</p>

<p align="center">
  Simples demais para devs. Complexo demais para low-coders.
</p>

## 🤔 Sobre

O RIDÍCULO é um boilerplate para Next.js tão ~~simples~~ minimalista que:

- Devs não perdem tempo aqui.
- Low-coders choram porque ainda é código.

> 🎤 "ESSE REPO É RIDÍCULO!" - _Everaldo Marques_

## 📦 O que tem dentro?

- ⚛️ Next.js - Porque criar rotas na mão é coisa do passado
- 🎨 TailwindCSS - CSS para quem tem preguiça de escrever CSS
- 🐘 PostgreSQL - Sem Prisma, sem ORM – só o essencial
- 📁 Pasta CORE - Porque organização é o mínimo, né?
- 🔄 Import absoluto - Sem ../../../ na sua vida

> 🎤 "BINGO!"

## 🚀 Como usar

```bash
# Clone
git clone https://github.com/adspacheco/ridiculo.git
cd ridiculo

# Instale
npm install

# Configure seu .env com as credenciais do Postgres
# Ou não configure e deixe o erro aparecer, você que sabe

# Rode
npm run dev

# Teste a API
curl http://localhost:3000/api/ridiculo
# Vai retornar algo RIDÍCULO
```

## 📄 Package.json

Nada de version, author ou qualquer outro campo que ninguém lê. Só o básico pra rodar.

```json
{
  "name": "ridiculo",
  "private": true,
  "scripts": {
    "dev": "next dev"
  },
  "dependencies": {
    // ...
  },
  "devDependencies": {
    // ...
  }
}
```

## 📂 Estrutura

```bash
core/
  ├── globals.css       # Estilos globais
  └── api/ database.js  # Conexão com banco de dados
pages/
  ├── index.js          # Página inicial
  └── api/
        └── ridiculo.js # API /api/ridiculo
public/                 # Arquivos públicos
jsconfig.json           # Imports absolutos
tailwind.config.js      # Configuração mínima do Tailwind
postcss.config.js       # Criado pelo Tailwind. Não mexe.
```

## ⚙️ Configurações RIDÍCULAS

### 🐘 Banco de Dados

Conexão mais simples possível com PostgreSQL. Sem pool, sem ORM, sem nada. Você vai precisar de um banco PostgreSQL rodando. Altere as credenciais no arquivo .env:

```javascript
import { Client } from "pg";

async function query(queryObject) {
  const client = new Client();

  try {
    await client.connect();
    const result = await client.query(queryObject);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await client.end();
  }
}

export default {
  query: query,
};
```

### 🚀 API

A rota mais RIDÍCULA que você já viu:

```javascript
import database from "core/database";

async function handler(request, response) {
  const result = await database.query(
    "SELECT 'RIDICULO' AS message, NOW() AS time"
  );
  response.status(200).json(result.rows[0]);
}

export default handler;
```

### 🎨 Tailwind CSS

Só aponta pra pasta pages porque não precisa de mais nada.

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### PostCSS

Criado automaticamente pelo Tailwind. Melhor nem abrir.

### 🔄 Imports Absoluts

Digitar ../../../ deveria ser proibido.

```json
{
  "compilerOptions": {
    "baseUrl": "."
  }
}
```

## 🛡️ Licença

MIT - Porque escolher licença é muito trabalho.

<hr class="solid">
<i>Se você chegou até aqui, parabéns! Você gastou mais tempo lendo o README do que gastaria configurando um projeto do zero. <b>VOCÊ É RIDÍCULOOOO!</b><i>
