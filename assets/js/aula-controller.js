"use strict";
document.addEventListener("DOMContentLoaded", async () => {
  const numero=document.body.dataset.semana;
  const el=id=>document.getElementById(id);
  try {
    const [modelo,htmlResposta,cssResposta]=await Promise.all([
      fetch("./aula.json"),fetch("./exemplo/index.html"),fetch("./exemplo/style.css")
    ]);
    if(!modelo.ok||!htmlResposta.ok||!cssResposta.ok) throw new Error("Arquivos da semana não encontrados");
    const dados=await modelo.json();
    const codigoHtml=await htmlResposta.text();
    const codigoCss=await cssResposta.text();
    el("titulo").textContent="Semana "+numero+" — "+dados.titulo;
    document.title=dados.titulo+" | HTML5 e CSS3";
    el("objetivo").textContent=dados.objetivo;
    el("atividade").textContent=dados.atividade;
    el("codigo-html").textContent=codigoHtml;
    el("codigo-css").textContent=codigoCss;
    el("previa").src="./exemplo/index.html";
    async function copiar(texto,tipo){
      try { await navigator.clipboard.writeText(texto);el("status").textContent=tipo+" copiado."; }
      catch { el("status").textContent="Selecione o código acima para copiar."; }
    }
    el("copiar-html").addEventListener("click",()=>copiar(codigoHtml,"HTML"));
    el("copiar-css").addEventListener("click",()=>copiar(codigoCss,"CSS"));
  } catch(error){
    el("objetivo").textContent="Não foi possível carregar esta aula.";
    el("status").textContent=error.message;
  }
});
