# HTML5 e CSS3 — 2026

**Disciplina:** HTML e CSS  
**Eixo tecnológico:** Informação e Comunicação  
**Carga horária prevista na ementa:** 60 horas  
**Organização do escopo:** 20 semanas, 60 aulas de 50 minutos  
**Instituição:** EEEP Professor Antônio Valmir da Silva — Ceará


## 🌐 Portal de estudos Mostra Web 2026

**[Entrar no portal de estudos, com todas as atividades e desafios](./projeto-final/#aulas)**

## 📚 Aulas práticas em HTML

**[Abrir o índice das 20 semanas](./index.html)** · **[Ver arquivos das semanas](./semanas/)**

Cada página tem objetivo, exemplo de código, prévia visual e atividade. Para visualizar no navegador, baixe o arquivo HTML e abra localmente; a visualização direta do arquivo no GitHub mostra o código-fonte.

## Apresentação
Este repositório reúne materiais, atividades e projetos práticos da disciplina HTML e CSS. O objetivo é aprender a estruturar páginas com HTML e HTML5 e a criar estilos e layouts com CSS.

> **Atenção à carga horária:** a ementa informa 60h, enquanto o escopo distribui 60 aulas de 50 minutos (50 horas-relógio). A adequação ao calendário letivo deve ser definida no planejamento pedagógico.

## Objetivos de aprendizagem
- Compreender a Internet e a estrutura básica de documentos HTML.
- Utilizar elementos, atributos, links, imagens, listas, tabelas e formulários.
- Estruturar páginas com HTML5 semântico.
- Aplicar CSS por estilos inline, internos e externos.
- Trabalhar com seletores, cores, fontes, bordas, dimensões e Box Model.
- Criar layouts com posicionamento e Flexbox.
- Desenvolver uma página web como projeto final.

## Cronograma — 20 semanas

**Clique no número da semana ou no conteúdo** para abrir o arquivo HTML correspondente no GitHub. Para executar os exemplos no navegador, abra o arquivo localmente ou utilize o site da disciplina quando o GitHub Pages estiver habilitado.

| Semana | Conteúdo principal |
| --- | --- |
| [01](./semanas/semana-01/) | [Internet, Web, HTML e ambiente de desenvolvimento](./semanas/semana-01/) |
| [02](./semanas/semana-02/) | [Estrutura HTML, títulos, parágrafos e quebras de linha](./semanas/semana-02/) |
| [03](./semanas/semana-03/) | [Formatação de textos e imagens](./semanas/semana-03/) |
| [04](./semanas/semana-04/) | [Listas, links e agrupamento de elementos](./semanas/semana-04/) |
| [05](./semanas/semana-05/) | [Tabelas](./semanas/semana-05/) |
| [06](./semanas/semana-06/) | [Formulários](./semanas/semana-06/) |
| [07](./semanas/semana-07/) | [HTML5 e elementos semânticos](./semanas/semana-07/) |
| [08](./semanas/semana-08/) | [Elementos de formatação de texto no HTML5](./semanas/semana-08/) |
| [09](./semanas/semana-09/) | [Estruturação e acessibilidade de tabelas](./semanas/semana-09/) |
| [10](./semanas/semana-10/) | [Áudio, vídeo e figuras](./semanas/semana-10/) |
| [11](./semanas/semana-11/) | [Campos de formulário HTML5](./semanas/semana-11/) |
| [12](./semanas/semana-12/) | [Introdução ao CSS; estilos inline, interno e externo](./semanas/semana-12/) |
| [13](./semanas/semana-13/) | [Cores e imagens de fundo](./semanas/semana-13/) |
| [14](./semanas/semana-14/) | [Fontes e formatação de texto](./semanas/semana-14/) |
| [15](./semanas/semana-15/) | [Links e pseudoclasses](./semanas/semana-15/) |
| [16](./semanas/semana-16/) | [Classes, IDs, agrupamento e bordas](./semanas/semana-16/) |
| [17](./semanas/semana-17/) | [Box Model, margens, espaçamentos e flutuação](./semanas/semana-17/) |
| [18](./semanas/semana-18/) | [Posicionamento de elementos](./semanas/semana-18/) |
| [19](./semanas/semana-19/) | [Display e Flexbox](./semanas/semana-19/) |
| [20](./semanas/semana-20/) | [Criação e revisão de uma landing page](./semanas/semana-20/) |

## Organização por semana — HTML5 e CSS3 sem código embutido

Cada semana possui sua própria pasta, com os arquivos separados:

```text
semanas/
  semana-01/
    index.html       # página didática HTML5 (View)
    style.css        # estilo da página didática
    aula.json        # conteúdo e atividade (Model)
    exemplo/
      index.html     # exemplo HTML5 executável
      style.css      # CSS3 do exemplo
  semana-02/
    ... 
  semana-20/
    ...
assets/
  js/
    aula-controller.js  # Controller compartilhado
```

**Como acessar:** clique no conteúdo da semana no cronograma; dentro de cada pasta, o CSS está em `style.css` e o CSS do exercício em `exemplo/style.css`. Nenhum CSS nem JavaScript foi embutido nas páginas das aulas.

O GitHub Pages é estático. Essa organização usa **separação de responsabilidades inspirada em MVC**, sem backend; para MVC com servidor, seria necessária hospedagem compatível.

## Primeira página HTML5

Crie um arquivo chamado `index.html`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Minha primeira página</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Olá, mundo!</h1>
  </header>
  <main>
    <p>Minha primeira página usando HTML e CSS.</p>
  </main>
</body>
</html>
```

Crie também um arquivo chamado `style.css`:

```css
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 2rem;
  color: #202020;
  background-color: #f5f5f5;
}
h1 {
  color: #14532d;
}
```

Abra o `index.html` no navegador para visualizar o resultado.

## Como enviar atividades ao GitHub

1. Crie uma pasta para a atividade, por exemplo: `atividades/atividade-01/`.
2. Salve nela os arquivos solicitados pelo professor.
3. Teste a página no navegador antes de enviar.
4. Registre as alterações com um commit explicativo.
5. Envie o link do repositório ou da pasta conforme as orientações da atividade no Google Sala de Aula.

### Boas práticas
- Use nomes de arquivos simples e sem espaços.
- Organize os arquivos HTML, CSS e imagens em pastas claras.
- Utilize HTML semântico e textos alternativos (`alt`) em imagens informativas.
- Evite enviar senhas, chaves privadas ou informações pessoais.
- Faça commits frequentes e descreva o que mudou.

## Projeto final — landing page publicada gratuitamente

**[Abrir o código HTML do projeto](./projeto-final/index.html)** · **[Abrir o CSS](./projeto-final/style.css)**

A pasta `projeto-final/` contém uma landing page de referência, responsiva e com marcação semântica. Cada equipe deve personalizar o conteúdo, as cores, a identidade visual e as seções, preservando acessibilidade e legibilidade.

### Como publicar com GitHub Pages

1. No seu repositório, abra **Settings → Pages**.
2. Em **Build and deployment**, selecione **Deploy from a branch**.
3. Escolha a branch **main** e a pasta **/(root)**, depois clique em **Save**.
4. Após a publicação estar ativa, acesse o endereço informado na própria tela do GitHub Pages.
5. O projeto final ficará no caminho **/projeto-final/** do site publicado.

**Entrega:** envie o endereço do site e o link do código no GitHub, conforme a orientação do professor.

> O GitHub Pages publica páginas estáticas (HTML/CSS/JavaScript). Não hospeda diretamente aplicações que dependam de PHP ou banco de dados do lado do servidor.

---

**Referências curriculares:** Ementa de HTML e CSS (60h) e Escopo de HTML/CSS (20 semanas), Eixo Informação e Comunicação, Governo do Ceará.
