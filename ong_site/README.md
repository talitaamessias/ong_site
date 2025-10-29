# Plataforma para ONGs — Entrega I (Fundamentos e Estruturação)

Estrutura mínima com **HTML5 semântico**, **CSS responsivo (mobile‑first)** e **JavaScript** para **máscaras** e **validação nativa**.

## ✅ Páginas obrigatórias
- `index.html` — Institucional (missão, visão, valores, equipe, transparência, contato e galeria).
- `projetos.html` — Projetos, voluntariado e doações.
- `cadastro.html` — Formulário completo com campos exigidos, validação (HTML5) e máscaras (CPF, telefone, CEP).

## 🧰 Requisitos técnicos atendidos
- Semântica HTML (header, nav, main, section, article, figure/figcaption, footer, etc.).
- Responsividade (mobile‑first, grid fluida e breakpoints).
- Acessibilidade (rótulos, `aria-*`, contraste, navegação por teclado).
- Desempenho (imagens otimizadas, CSS/JS leves; pronto para minificação).
- SEO (metatags, títulos descritivos, hierarquia de headings).

## 📁 Estrutura de pastas
```
ong_site/
├── index.html
├── projetos.html
├── cadastro.html
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── main.js
    └── img/
        ├── hero.jpg
        ├── projetos.jpg
        └── voluntarios.jpg
```

## 🚀 Como visualizar
Abra `index.html` no navegador (clique duplo). Navegue pelo menu no topo.

## 🌐 Publicação no GitHub
1. Crie um repositório público.
2. Faça upload do conteúdo da pasta `ong_site/`.
3. Ative o GitHub Pages (branch `main`, pasta `/root`).

## 🧪 Validação (W3C)
- Valide cada arquivo `.html` no W3C HTML Validator.
- Verifique patterns de CPF, telefone e CEP; atributos `required` e rótulos associados.

---