"use strict";
// Controlador das aulas estáticas: carrega o modelo JSON e os códigos separados.
document.addEventListener("DOMContentLoaded", async () => {
  const n = document.body.dataset.semana;
  const byId = id => document.getElementById(id);
  const base = "../exemplos/semana-" + n + "/";
  const model = "../models/semana-" + n + ".json";
  try {
    const [m,h,c] = await Promise.all([fetch(model),fetch(base+"index.html"),fetch(base+"style.css")]);
    if (![m,h,c].every(r=>r.ok)) throw new Error("Arquivo não localizado.");
    const data=await m.json();
    const html=await h.text(),css=await c.text();
    byId("titulo").textContent="Semana "+n+" — "+data.titulo;
    document.title="Semana "+n+" — "+data.titulo+" | HTML5 e CSS3";
    byId("objetivo").textContent=data.objetivo;
    byId("atividade").textContent=data.atividade;
    byId("codigo-html").textContent=html;
    byId("codigo-css").textContent=css;
    byId("previa").src=base+"index.html";
    async function copiar(text,label){try{await navigator.clipboard.writeText(text);byId("status").textContent=label+" copiado."}catch(_){byId("status").textContent="Copie o texto selecionando o código acima."}}
    byId("copiar-html").addEventListener("click",()=>copiar(html,"HTML"));
    byId("copiar-css").addEventListener("click",()=>copiar(css,"CSS"));
  } catch(err){byId("objetivo").textContent="Não foi possível carregar a aula. Confira a conexão e os arquivos no repositório.";byId("status").textContent=String(err);}
});