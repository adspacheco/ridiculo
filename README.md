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
- No-coders choram porque ainda é código.

> 🎤 "ESSE REPO É RIDÍCULO!" - _Everaldo Marques_

## 📦 O que tem dentro?

- ⚛️ Next.js - Porque criar rotas na mão é coisa do passado
- 🎨 TailwindCSS - CSS para quem tem preguiça de escrever CSS
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

# RODE
npm run dev
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
    "next": "15.1.3",
    "react": "19.0.0",
    "react-dom": "19.0.0"
  },
  "devDependencies": {
    "autoprefixer": "10.4.20",
    "postcss": "8.4.49",
    "tailwindcss": "3.4.17"
  }
}
```

## 📂 Estrutura

```bash
core/
  ├── globals.css       # Estilos globais
pages/
  ├── index.js          # Página inicial
public/                 # Arquivos públicos
jsconfig.json           # Imports absolutos
tailwind.config.js      # Configuração mínima do Tailwind
postcss.config.js       # Criado pelo Tailwind. Não mexe.
```

## ⚙️ Configurações RIDÍCULAS

### 🎨 Tailwind CSS

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

Só aponta pra pasta pages porque não precisa de mais nada.

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
