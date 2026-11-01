# HTML e CSS — 2026

**Disciplina:** HTML e CSS  
**Eixo tecnológico:** Informação e Comunicação  
**Carga horária prevista na ementa:** 60 horas  
**Organização do escopo:** 20 semanas, 60 aulas de 50 minutos  
**Instituição:** EEEP Professor Antônio Valmir da Silva — Ceará

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

| Semana | Conteúdo principal |
| --- | --- |
| 01 | Internet, Web, HTML e ambiente de desenvolvimento |
| 02 | Estrutura HTML, títulos, parágrafos e quebras de linha |
| 03 | Formatação de textos e imagens |
| 04 | Listas, links e agrupamento de elementos |
| 05 | Tabelas |
| 06 | Formulários |
| 07 | HTML5 e elementos semânticos |
| 08 | Elementos de formatação de texto no HTML5 |
| 09 | Estruturação e acessibilidade de tabelas |
| 10 | Áudio, vídeo e figuras |
| 11 | Campos de formulário HTML5 |
| 12 | Introdução ao CSS; estilos inline, interno e externo |
| 13 | Cores e imagens de fundo |
| 14 | Fontes e formatação de texto |
| 15 | Links e pseudoclasses |
| 16 | Classes, IDs, agrupamento e bordas |
| 17 | Box Model, margens, espaçamentos e flutuação |
| 18 | Posicionamento de elementos |
| 19 | Display e Flexbox |
| 20 | Criação e revisão de uma landing page |

## Organização sugerida do repositório

```text
html_css/
├── README.md
├── aulas/
│   ├── semana-01/
│   ├── semana-02/
│   └── ...
├── atividades/
└── projeto-final/
```

> As pastas acima são **uma sugestão** e ainda não foram criadas no repositório.

## Primeira página HTML

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

## Projeto final

Desenvolver uma **landing page** utilizando HTML5 e CSS. A página deve apresentar conteúdo organizado, navegação compreensível e estilização coerente com os conteúdos trabalhados em aula.

---

**Referências curriculares:** Ementa de HTML e CSS (60h) e Escopo de HTML/CSS (20 semanas), Eixo Informação e Comunicação, Governo do Ceará.
