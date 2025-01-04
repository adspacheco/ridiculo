<p align="center">  
    <h3 align="center">RIDÍCULO</h3>  
</p>

<p align="center">  
  🚀 Simples demais para devs. Complexo demais para low-coders 🤯  
</p>

---

## 🤔 **Sobre**

O **RIDÍCULO** é um **boilerplate minimalista** para **Next.js** com:

- **JavaScript puro**, porque TypeScript é coisa de gente organizada.
- **PostgreSQL**, sem Prisma, sem ORM – só SQL puro na coragem.
- **Estrutura mínima**, porque quanto menos código, menos bugs.

> 🎤 **"ESSE REPO É RIDÍCULO!"** - _Everaldo Marques_

---

## 📦 **O que tem dentro?**

- ⚛️ **Next.js** – Porque criar rotas manualmente é coisa do passado.
- 🐘 **PostgreSQL** – Sem Prisma, sem ORM – só o essencial com a lib **pg**.
- 📁 **Pasta CORE** – Porque organização também pode ser ridícula.
- 🔄 **Import absoluto** – Nunca mais digite **../../../**.

> 🎤 **"BINGO!"**

---

## 🚀 **Como usar?**

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

---

## 📄 **Package.json**

Nada de **version**, **author** ou qualquer outro campo que ninguém lê. Só o básico pra rodar.

```json
{
  "name": "ridiculo",
  "private": true,
  "scripts": {
    "dev": "next dev"
  },
  "dependencies": {
    "next": "15.1.3",
    "pg": "8.13.1",
    "react": "19.0.0",
    "react-dom": "19.0.0"
  }
}
```

---

## 📂 **Estrutura**

```bash
core/
  └── database.js       # Conexão com banco de dados
pages/
  ├── index.js          # Página inicial
  └── api/
        └── ridiculo.js # API /api/ridiculo
public/                 # Arquivos públicos
jsconfig.json           # Imports absolutos
```

> **"Só o necessário. E nada além disso."**

---

## ⚙️ **Configurações RIDÍCULAS**

### 🐘 **Banco de Dados**

Conexão mais simples possível com **PostgreSQL**. Sem pool, sem ORM, sem nada.

Você vai precisar de um banco PostgreSQL rodando. Altere as credenciais no arquivo **`.env`**:

#### 📄 **Arquivo: `core/database.js`**

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

---

### 🚀 **API**

A rota mais **RIDÍCULA** que você já viu:

**Arquivo:** `/pages/api/ridiculo.js`

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

---

### 🔄 **Imports Absolutos**

Porque digitar **../../../** deveria ser proibido.

```json
{
  "compilerOptions": {
    "baseUrl": "."
  }
}
```

---

## 🛡️ **Licença**

**MIT** – Porque escolher licença é muito trabalho.

---

<hr class="solid">  
<i>Se você chegou até aqui, parabéns! Você gastou mais tempo lendo o README do que gastaria configurando um projeto do zero. <b>VOCÊ É RIDÍCULOOOO!</b></i> 🎉
