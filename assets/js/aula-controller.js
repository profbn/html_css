"use strict";
document.addEventListener("DOMContentLoaded",async()=>{
 const number=document.body.dataset.semana,el=id=>document.getElementById(id);
 function setList(id,items){const list=el(id);list.replaceChildren();for(const value of items||[]){const li=document.createElement("li");li.textContent=value;list.append(li);}}
 try{
   const responses=await Promise.all(["./aula.json","./exemplo/index.html","./exemplo/style.css"].map(url=>fetch(url)));
   if(responses.some(response=>!response.ok))throw new Error("Arquivos da aula não encontrados");
   const [data,codeHtml,codeCss]=await Promise.all([responses[0].json(),responses[1].text(),responses[2].text()]);
   el("titulo").textContent="Semana "+number+" — "+data.titulo;
   document.title=data.titulo+" | HTML5 e CSS3";
   el("objetivo").textContent=data.objetivo;
   el("explicacao").textContent=data.explicacao;
   el("atividade").textContent=data.atividade;
   el("desafio").textContent=data.desafio;
   setList("passos",data.passos);setList("criterios",data.criterios);setList("perguntas",data.perguntas);
   el("codigo-html").textContent=codeHtml;el("codigo-css").textContent=codeCss;
   el("previa").src="./exemplo/index.html";
   async function copy(text,type){try{await navigator.clipboard.writeText(text);el("status").textContent=type+" copiado."}catch{el("status").textContent="Selecione o código para copiar."}}
   el("copiar-html").addEventListener("click",()=>copy(codeHtml,"HTML"));el("copiar-css").addEventListener("click",()=>copy(codeCss,"CSS"));
 }catch(e){el("objetivo").textContent="Não foi possível carregar o conteúdo. Verifique a conexão e abra o site pelo GitHub Pages.";el("status").textContent=e.message;}
});