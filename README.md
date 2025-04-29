<div align="center">
<img src="https://img.shields.io/static/v1?label=React&message=framework&color=61DAFB&style=for-the-badge&logo=react"/>
<img src="https://img.shields.io/static/v1?label=Tailwind&message=CSS&color=1DA9BB&style=for-the-badge&logo=tailwindcss"/>
<img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge"/>
<img src="https://img.shields.io/badge/License-MIT-2ecc71?style=for-the-badge&logo=open-source-initiative&logoColor=white" alt="Open Source License - MIT">
</div>

<br>

<div align="center">
  <img src="https://www.spaceflightnewsapi.net/img/SNAPI_logo.png" alt="Spaceflight News API" width="120px"/>
</div>

<h1 align="center">Space Flight Articles - Ada Tech</h1>


### 🧭 Navegação Rápida

- 📝 [Sobre](#-sobre)
- 🔧 [Funcionalidades e Aprendizados](#-funcionalidades-e-aprendizados)
- 🧪 [Extends do Projeto](#-extends-do-projeto)
- 🚀 [UI e Deploy](#-ui-e-deploy)
- ⚙️ [Configuração com NPM ou Yarn](#️-configuração-com-npm-ou-yarn)
- 🏆 [Desafios e Conquistas](#-desafios-e-conquistas)
- 🤝 [Contribuição](#-contribuição)
---

### 📝 Sobre
Projeto desenvolvido durante a **[Formação em Desenvolvimento Front-End | Santander Tech+](https://www.santanderopenacademy.com/pt_br/index.html)** em parceria com a **[Ada Tech](https://ada.tech/)**, com o objetivo de praticar conceitos fundamentais do React como **componentização**, **props**, **hooks**, e integração com APIs externas.

---
### 🔧 Funcionalidades e Aprendizados

- ✅ Utilização da **API pública Spaceflight News** com a biblioteca **Axios** para requisições HTTP:
- 🔁 Uso do **`.map()`** para renderização dinâmica de componentes.
- 📦 **Migração opcional para Yarn** como gerenciador de pacotes.
- ⚛️ Utilização de **React Hooks** como `useState` para controle de estado e `useEffect` para chamadas à API.
- ⏳ Inclusão da dependência `react-loader-spinner` para exibir loading em requisições assíncronas.
- 💡 Estrutura escalável e com fácil manutenção.


---
### 🧪 Extends do Projeto

- 🎨 Estilização feita com **Tailwind CSS**, configurado em ambiente Vite.
- 🚨 Aplicação de boas práticas de tratamento de erro, utilizando `try...catch` para capturar possíveis falhas na requisição e alertar o usuário.

---

### 🚀 UI e Deploy
<div align="center">
<p >
  <img src="./public/screen.png" width="650px" alt="Captura de tela do projeto" style="border: none;">
</p>

[→ Ver Projeto On-line 🔗](https://space-flight-articles-puce.vercel.app/)

</div>

---

## ▶️ Como Configurar o Projeto no VS Code:

### 📌 Pré-requisitos
Antes de prosseguir com a configuração, certifique-se de ter todos os pré-requisitos instalados corretamente para evitar erros durante a instalação e execução do projeto:

`Git 2.4+` `Node.js 12+` `Live Server` `Tailwind CSS IntelliSense`


### ⚙️ Configurando o Projeto com NPM ou Yarn

1. Clone este repositório:
```sh
git clone https://github.com/domfabio/Space-Flight-Articles.git
```

2. Acesse o diretório do projeto:
```sh
cd Space-Flight-Articles
```

3. Instale as dependências :
> ⚠️ **Atenção**: Use apenas **NPM** ou **Yarn**, não os dois. Escolha o gerenciador de pacotes que preferir.


Com **npm**:
```sh
npm install
```

Com **yarn**:
```sh
yarn
```

4. Inicie o servidor de desenvolvimento:

Com **npm**:
```sh
npm run dev
```

Com **yarn**:
```sh
yarn dev
```

5. Acesse o projeto no navegador:

No terminal e clique no link gerado:

```
http://localhost:5173/
```

---

### 🏆 Desafios e Conquistas

> Durante o desenvolvimento, enfrentei um desafio relacionado à exibição das imagens vindas da API, por possuírem tamanhos variados e quebravam o layout visual da aplicação.
A solução foi envolver a `<img/>` em uma `<div>` com tamanho fixo e `overflow-hidden`, garantindo um layout consistente. Além disso, a imagem foi estilizada com `object-cover` e `object-center` para manter o foco e preenchimento adequado. **Essa abordagem garantiu responsividade, estética e uma melhor experiência de leitura.**

---

## 🤝 Contribuição
**Se deseja contribuir, siga os passos:**
1. Fork o repositório
2. Crie uma branch: `git checkout -b feature-minha-feature`
3. Faça commit das suas mudanças: `git commit -m 'Minha nova funcionalidade'`
4. Faça push para a branch: `git push origin feature-minha-feature`
5. Abra um Pull Request

---

Este projeto é distribuído sob a [Open Source License - MIT](https://opensource.org/licenses/MIT). <br>Veja a documentação para mais detalhes.


