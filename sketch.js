// ALUNA: Anna Beatriz Mott Baessa N°: 02 
// ESCOLA: Colégio de Aplicação Pedagógica (CAP-UEM) 1º C
// PROJETO AGRINHO 2025: Festejando a conexão do campo e a cidade.
// REFERÊNCIAS: GOOGLE, STUDIO P5JS E CHAT GPT 

// NOME DO PROJETO: In your hands.





// VARIÁVEIS

let mostrarAjuda = false; // se a caixa de ajuda está visível no celeiro

// ESCADA

let escada = {
x: 750, 
y: 460, 
nome: "🪜",    
coletado: false // se já foi pego pelo jogador
};


//  BALDE

let balde = {
x: 400, 
y: 130, 
nome: "🪣",
coletado: false // se já foi coletado
};


// VACA

let vaca = {
x: 600, 
y: 400, 
nome: "Vaca" 
};


// COPO de LEITE

let copoDeLeite = { nome: "🥛", coletado: false };


// MUDA de PLANTA

let planta = { nome: "🌱", coletado: false };


// SISTEMA de FALAS 


// FALA da VACA

let mostrarFalaVaca = false; // se deve mostrar o balão de fala
let textoFalaVaca = "MUUUU"; // texto que a vaca fala


// FALA da FAZENDEIRA

let mostrarFalaFazendeira = false; // se deve mostrar a fala pedindo o leite 
let mostrarFalaFazendeiraAgradecida = false; // se deve mostrar a fala após receber o leite
let textoFalaFazendeiraAgradecida = "Obrigada! Aqui está uma muda pra você plantar.";


// FALAS da PORTA

let mostrarFalaPorta = false; // se deve mostrar a ideia da escada
let textoFalaPorta = ""; // o texto da escada


// PLANTAR a MUDA

let plantaPlantada = false; // se a planta já foi plantada na terra
let posicaoTerra = { x: 600, y: 440 }; // posição original da terra
let terraX = 125; // posição X que eu escolhi
let terraY = 475; // posição Y que eu escolhi


// CHAVE

let chaveDourada = { nome: "🔑", coletado: false }; // chave obtida ao plantar


// JOGO do BOMBEIRO

// ÁRVORES PEGANDO FOGO

let arvores = [ 
{ x: 200, y: 390, queimando: true },
{ x: 300, y: 390, queimando: true },
{ x: 400, y: 390, queimando: true },
{ x: 500, y: 390, queimando: true },
{ x: 600, y: 390, queimando: true },
];


// CAMINHÃO de BOMBEIRO

let bombeiroX = 100;
let bombeiroY = 390;
let velocidadeBombeiro = 80;


// HELICÓPTERO

let helicopteroX = 400;  
let helicopteroY = 140;  
let helicopteroTremerIntensidade = 3; // intensidade do tremor
let helicopteroTamanho = 90;


// CENA do JORNAL

// CORTINAS

let posicaoCortinaEsquerda = 400;
let posicaoCortinaDireita = 400;  
let velocidadeCortina = 5; 


// RAINHA

let rainhaX = 400;  
let rainhaY = 290;    
let cortinasAbertas = false; // se as cortinas já abriram completamente


// FALAS do JORNAL

let falas = [
"Boa noite, queridos súditos!\nO Jornal Real começa agora.",
"Notícias urgentes:\nQueimadas atingiram a zona rural,\nmas os bombeiros já controlaram o fogo.",
"Essas queimadas danificaram mais de 60% das \nmatas na região sudeste do país.",
"Observem as gravações realizadas no momento \nem que o incêndio foi apagado."
];


let falaAgora = 0; // controle da fala atual
let falaDepoisGravacao = "Graças à bravura dos nossos bombeiros,\nconseguimos conter o incêndio a tempo."; 
let mostrarFalaIncendio = false; // se deve mostrar a fala depois do jogo do bombeiro
let cenaAtual = 0; // controla qual cena está ativa no momento


// NINJAS 

let tempoNinjas = 0; // controlar timing
let mostrarNinjas = false; // se deve mostrar ninjas sequestrando a rainha
let tempoSemNinjas = false; // tempoo entre sequestro e fala do ninja
let ninjaFalando = false; // se o ninja está falando
let cortinaFechando = false; // se as cortinas estão se fechando
let rainhaSequestrada = false; // se a rainha já foi sequestrada


// MUDANÇA de CENA

let mudarParaCeleiro = false; // flag de mudança pro celeiro
let cortinaAbrindo = false; // se as cortinas estão abrindo


// MOVIMENTO da RAINHA

let rainhaFazendaX = 400;     
let rainhaFazendaY = 400;  
let velocidadeRainha = 30; // velocidade de movimento 


// INVENTÁRIO da RAINHA

let mochila = [];


// JOGO SAW GAME

let cenaAgora = 0; // controla qual fase do saw game está ativada
let tempoInicio; // tempo do início de cada fase (10seg)
let tempoRestante = 5; // segundos restantes para fazer escolha
let escolha1 = ""; // resposta da fase 1 (acordar)
let escolha2 = ""; // resposta da fase 2 (alimentar animais)
let escolha3 = ""; // resposta da fase 3 (fertilizantes)
let escolha4 = ""; // resposta da fase 4 (dívidas)
let escolha5 = ""; // resposta da fase 5 (trabalhadores)
let escolha6 = ""; // resposta da fase 6 (final)

let iniciouDesafio = false; // se o desafio já começou
let faseEncerrada = false; // se a fase atual já acabou





function setup() {
  createCanvas(800, 500);    
  textFont('Arial');  
}





function draw() {

  
// DESENHO da CENA do JORNAL
  
if (cenaAtual === 0) { // se for exatamente = 0
drawStage(); // desenha o cenário do jornal

if (!mostrarNinjas && !tempoSemNinjas && !ninjaFalando && !rainhaSequestrada) {
drawRainha(); // se nada sobre ninjas estiver aparecendo, desenha a rainha
}
  
else if (mostrarNinjas) { // se mostra os ninjas 
drawRainhaComNinjas(); // a rainha é sequestrada pelos ninjas
} 
  
else if (ninjaFalando) { 
drawNinjaFalando(); // fala do ninja
}

  
// DESENHA as CORTINAS
  
drawCortinas(); // desenha as cortinas

  
// MOVIMENTO da CORTINA
  
if (!cortinasAbertas) { 
posicaoCortinaEsquerda -= velocidadeCortina;  // cortina esquerda vai para esquerda
posicaoCortinaDireita += velocidadeCortina;   // cortina direita vai para direita
      
if (posicaoCortinaEsquerda <= 0 && posicaoCortinaDireita >= width) {
cortinasAbertas = true; // controla se as cortinas estão totalmente abertas
}
}

  
// DESENHANDO as FALAS do JORNAL 
  
if (cortinasAbertas && !mostrarNinjas && !tempoSemNinjas && !ninjaFalando && !rainhaSequestrada) { // se as cortinas estão abertas e nada de ninja tá aparecendo

if (mostrarFalaIncendio) {
drawBalaoFala(falaDepoisGravacao);  // fala depois voltar do jogo do bombeiro
}

else if (falaAgora < falas.length) { // verifica se ainda te falas pra mostrar
drawFalaRainha(); // falas da rainha
}
}

  
// TEMPO dos NINJAS
    
// depois de 2 segundos com ninjas visíveis, esconde ninjas e marca rainha como sequestrada
  
if (mostrarNinjas && millis() - tempoNinjas > 2000) { // 2000ms = 2seg
mostrarNinjas = false;
tempoSemNinjas = true; // tempo sem ninguém no palco
tempoNinjas = millis(); // reseta tempo
rainhaSequestrada = true; // marca que rainha foi sequestrada
}

  
// depois de 2 segundos sem ninguém, mostra ninja falando
  
if (tempoSemNinjas && millis() - tempoNinjas > 2000) {
tempoSemNinjas = false;
ninjaFalando = true; // ninja fica no lugar da rainha
tempoNinjas = millis(); // reseta tempo
}

  
// depois de 3 segundos do ninja falando, começa o fechamento das cortinas
  
if (ninjaFalando && millis() - tempoNinjas > 3000) {
cortinaFechando = true; // inicia movimento da cortina fechando
ninjaFalando = false;
}
  
if (cortinaFechando) { // cortinas fechando
posicaoCortinaEsquerda += velocidadeCortina; // cortina esquerda volta ao centro
posicaoCortinaDireita -= velocidadeCortina; // cortina direita volta ao centro
     
// confere se as cortinas já se fecharam
if (posicaoCortinaEsquerda >= 400 && posicaoCortinaDireita <= 400) {
cortinaFechando = false;
mudarParaCeleiro = true; // mudança para celeiro
      
// reseta posições das cortinas para próxima cena
posicaoCortinaEsquerda = 400;
posicaoCortinaDireita = 400;
}
}
}
 
  
// CENA 1: JOGO do BOMBEIRO
  
else if (cenaAtual === 1) { // se a cena atual for exatamete 1
drawJogoBombeiro(); // desenha o cenário do jogo do bombeiro

let todosApagados = arvores.every(arvore => !arvore.queimando); // ve se acabou o incêndio
  
if (todosApagados) {
cenaAtual = 0; // volta pro jornal
falaAgora = 0; // reseta contador de falas
mostrarFalaIncendio = true; // ativa fala depois do incêndio
}
}
  
  
// CENA 2: SCAPE ROOM
  
else if (cenaAtual === 2) { // se a cena atual for exatamente 2
drawCenaCeleiro(); // desenha todo o cenário da fazenda
drawMochila(); // mostra inventário na tela
}
  
  
// CENA 3: SAW GAME
  
else if (cenaAtual === 3) {
  
if (!iniciouDesafio) { // se o saw game começou 
background(0); // desenha o fundo preto
fill("red");
textSize(48);
textFont("Times New Roman");
textAlign(CENTER, CENTER);
text("Você tem 5 segundos...", width / 2, 100);
fill(255);
textSize(36);
text("Aperte A e B para sobreviver.", width / 2, height / 2);
fill(180);
textSize(24);
text("Pressione ESPAÇO para começar...", width / 2, height - 80); 
} // se iniciou o desafio
  
// FASES do SAW GAME
  
else if (cenaAgora === 2) {
faseComContagem("Você acordou em uma fazenda.", "A: Volte a dormir", "B: Vá ver os animais", escolha1);
} 
  
else if (cenaAgora === 3) {
mostrarResultado(escolha1, "Você ia deixar os animais sem comer?", "Eles estão morrendo de fome.");
}
  
else if (cenaAgora === 5) {
faseComContagem("Você chegou no celeiro.", "A: Você dá carne para os animais", "B: Você dá feno para os animais", escolha2);
}

else if (cenaAgora === 6) {
mostrarResultado(escolha2, "Eles morreram!", "Eles amaram o feno.");
}
  
else if (cenaAgora === 8) {
faseComContagem("Você precisa comprar fertilizantes.", "A: Comprar fertilizantes caros, porém bons.", "B: Comprar fertilizantes baratos, porém ruins.", escolha3);
}
  
else if (cenaAgora === 9) {
mostrarResultadoComAcorreta(escolha3, "Sua plantação vai crescer saudável.", "Sua plantação morreu!");
}
  
else if (cenaAgora === 11) {
faseComContagem("Você se endividou comprando fertilizantes.", "A: Lavagem de dinheiro", "B: Pedir empréstimo", escolha4);
}
  
else if (cenaAgora === 12) {
mostrarResultado(escolha4, "Você foi pra cadeia.", "Você conseguiu um empréstimo e salvou sua fazenda.");
}
  
else if (cenaAgora === 14) {
faseComContagem("Você precisa contratar trabalhadores.", "A: Pagar um salário justo", "B: Explorar os trabalhadores", escolha5);
}
  
else if (cenaAgora === 15) {
mostrarResultadoComAcorreta(escolha5, "Eles trabalharam muito. A fazenda prosperou.", "Eles se revoltaram e colocaram fogo na fazenda.");
}
  
else if (cenaAgora === 17) {
faseComContagem("Você tem muito dinheiro.", "A: Pagar o empréstimo", "B: Fugir do país", escolha6);
}
  
else if (cenaAgora === 18) {
mostrarResultadoComAcorreta(escolha6, "Você pagou tudo e se tornou uma potência.", "Você foi presa na fronteira.");
}
}

  
// CENA 4: CASTELO
  
else if (cenaAtual === 4) { // se a cena for exatamente 4

drawCenaFinal(); // desenha o castelo e guardas com a rainha
}

// animação de abertura das cortinas para entrar no celeiro
// só executar mudarParaCeleiro se não estiver na cena final

if (mudarParaCeleiro && cenaAtual !== 4) {
drawCenaCeleiro(); // desenha cenário do celeiro
drawCortinas(); // desenha cortinas se fechando

// Animação de abertura das cortinas (igual cena 0)
  
posicaoCortinaEsquerda -= velocidadeCortina;
posicaoCortinaDireita += velocidadeCortina;

// quando cortinas abrem completamente, muda oficialmente para cena 2
  
if (posicaoCortinaEsquerda <= 0 && posicaoCortinaDireita >= width) {
cortinasAbertas = true;
mudarParaCeleiro = false; // desativa flag de mudança pq já mudou
cenaAtual = 2; // cena do celeiro
}
}

// passar pra próxima parte no saw game
  
if ([4, 7, 10, 13, 16, 19].includes(cenaAgora)) {
if (millis() - tempoInicio > 2000) {
tempoInicio = millis(); // reseta timer
cenaAgora++; // avança para próxima fase
}
}
}





// SAW GAME

function faseComContagem(titulo, altA, altB, escolhaVar) {
background(0); // fundo preto

  
// CONTAGEM REGRESSIVA (10seg)
  
let tempoPassado = floor((millis() - tempoInicio) / 1000); // calcula segundos passados

tempoRestante = max(5 - tempoPassado, 0); // calcula tempo restante
fill("red");
textSize(68); 
textAlign(CENTER, CENTER);
text(tempoRestante, width / 2, 60); // posição centralizada no topo

  
// PERGUNTA
  
fill(255);
textSize(36);
text(titulo, width / 2, 150); // posicionada abaixo do timer

  
// ALTERNATIVAS
  
drawOptionBox(altA, width / 2, height / 2 - 40); // opção A acima do centro
drawOptionBox(altB, width / 2, height / 2 + 60); // opção B abaixo do centro

  
// TEMPO ESGOTADO
  
if (tempoRestante === 0 && escolhaVar === "") {

// IDENTIFICADOR de FASE
  
if (cenaAgora === 2) {
escolha1 = "tempo"; // se falhou na fase 1
cenaAgora = 3; // vai para resultado
} 
  
else if (cenaAgora === 5) {
escolha2 = "tempo"; // se falhou na fase 2
cenaAgora = 6; // vai para resultado
}
  
else if (cenaAgora === 8) {
escolha3 = "tempo"; // se falhou na fase 3
cenaAgora = 9; // vai para resultado
}
  
else if (cenaAgora === 11) {
escolha4 = "tempo"; // se falhou na fase 4
cenaAgora = 12; // vai para resultado
}
  
else if (cenaAgora === 14) {
escolha5 = "tempo"; // se falhou na fase 5
cenaAgora = 15; // vai para resultado
}
  
else if (cenaAgora === 17) {
escolha6 = "tempo"; // se falhou na fase 6
cenaAgora = 18; // vai para resultado final
}
}
}


// RESULTADOS de B CORRETO

function mostrarResultado(escolha, textoErrado, textoCerto) {
background(0); // fundo preto
textSize(36);
fill(255);
textAlign(CENTER, CENTER);

// RESPOSTA CORRETA
  
if (escolha === "tempo") {
text("Você perdeu.", width / 2, height / 2 - 30); // perdeu por tempo
fill(180);
textSize(24);
text("Aperte o espaço para recomeçar.", width / 2, height - 80);
} 
  
else if (escolha === "A") {
text(textoErrado, width / 2, height / 2 - 30); // escolha A sempre é errada
fill(180);
textSize(24);
text("Aperte o espaço para recomeçar.", width / 2, height - 80);
}
  
else if (escolha === "B") {
text(textoCerto, width / 2, height / 2 - 30); // escolha B sempre é certa
fill(180);
textSize(24);
text("Pressione espaço para continuar.", width / 2, height - 80);
}
}


// RESULTADOS de A CORRETO

function mostrarResultadoComAcorreta(escolha, textoCerto, textoErrado) {
background(0); // fundo preto
textSize(36);
fill(255);
textAlign(CENTER, CENTER);

// RESPOSTA CORRETA
  
if (escolha === "tempo") {
text("Você perdeu.", width / 2, height / 2 - 30); // perdeu por tempo
fill(180);
textSize(24);
text("Aperte o espaço para recomeçar.", width / 2, height - 80);
}
  
else if (escolha === "A") {
text(textoCerto, width / 2, height / 2 - 30); // escolha A é correta aqui
fill(180);
textSize(24);
text("Pressione espaço para continuar.", width / 2, height - 80);
}
  
else if (escolha === "B") {
text(textoErrado, width / 2, height / 2 - 30); // escolha B é errada aqui
fill(180);
textSize(24);
text("Aperte o espaço para recomeçar.", width / 2, height - 80);
}
}


// PARTE dos NINJAS

function drawRainhaComNinjas() {
textSize(150);
textAlign(CENTER, CENTER);
text("🥷🏼👸🏼🥷🏿", rainhaX, rainhaY);

// TELEVISÃO
  
textSize(100);
text("📺", 700, 330); 

// PLANTA
  
textSize(60);
text("🪴", 230, 330);   
text("🪴", 560, 330); 
}


// NINJAS FALANDO 

function drawNinjaFalando() {
textSize(150);
textAlign(CENTER, CENTER);
text("🥷🏽", rainhaX, rainhaY); // só o ninja no jornal
drawBalaoFala("Boa noite, queridos súditos.", false); // ninja fala igual à rainha
}


// SCAPE ROOM

function drawCenaCeleiro() {

// teto
background("rgb(82,43,15)");
stroke(0);
strokeWeight(1);

// paredes
fill("rgb(94,40,23)");
quad(200, 100, 200, 400, 0, 600, 0, 0); // parede esquerda
quad(600, 100, 600, 400, 800, 600, 800, 0); // parede direita
fill(120, 60, 40);
rect(200, 100, 400, 300); // parede do meio

// profundidade
line(0, 0, 200, 100); // linha esquerda do teto
line(800, 0, 600, 100); // linha direita do teto

// alce espelhdo
push(); // traduções 
translate(100, 250); // move para posição na parede esquerda
scale(-1, 1); // espelha 
textSize(70);
textAlign(CENTER, CENTER);
text("🫎", -30, 0); // alce espelhado
pop(); // traduções
  
// chão
fill("#9A661A");
quad(0, 500, 800, 500, 600, 400, 200, 400);
line(0, 500, 200, 400);  // linha de contorno esquerda
line(800, 500, 600, 400); // linha de contorno direita

// ELEMENTOS de INTERAÇÃO
  
// porta
textSize(150);
textAlign(CENTER, TOP);
text("🚪", 400, 260);

// apoio do feno 
fill(140, 100, 50);
rect(280, 180, 240, 20); 
rect(280, 180, 10, 80); 
rect(510, 180, 10, 80);  
  
// fenos
for (let i = 0; i < 5; i++) { // pra repetir
fill(255, 210, 50); 
rect(290 + i * 45, 140, 40, 40); // imitar o feno principal
stroke(0);

// linhas
line(290 + i * 45 + 5, 150, 290 + i * 45 + 35, 150);
line(290 + i * 45 + 5, 160, 290 + i * 45 + 35, 160);
}
  
// TERRA pra PLANTAR

let terraX = 125;
let terraY = 475;
stroke(0);
strokeWeight(2);
fill(80, 50, 20); 
ellipse(terraX, terraY, 60, 20); // forma oval


// PERSONAGENS
  
// fazendeira
textAlign(CENTER, CENTER);
textSize(80);
text("👩🏻‍🌾", 240, 365);  

// fala da fazendeira
if (mostrarFalaFazendeira) {
fill(255);
stroke(0);
strokeWeight(2);
rect(180, 270, 220, 80, 10); // Balão de fala com bordas arredondadas
fill(0);
noStroke();
textSize(17);
text("Me traga um copo de leite \ne te darei algo em troca.", 290, 310);
}

// fala quando se aproxima da porta
if (mostrarFalaPorta) {
fill(255);
stroke(0);
strokeWeight(2);
rect(rainhaFazendaX - 160, rainhaFazendaY - 100, 320, 60, 10);
fill(0);
noStroke();
textSize(14);
text(textoFalaPorta, rainhaFazendaX, rainhaFazendaY - 70);
}

// vaca
textSize(140);
text("🐄", 550, 350);

// fala da vaca 
if (mostrarFalaVaca) {
fill(255);
stroke(0);
strokeWeight(2);
rect(510, 260, 120, 40, 10);
fill(0);
noStroke();
textSize(18);
text(textoFalaVaca, 570, 280);
}
  
// fala de agradecimento da fazendeira
if (mostrarFalaFazendeiraAgradecida) {
fill(255);
stroke(0);
strokeWeight(2);
rect(110,270,350,50,10);
fill(0);
noStroke();
textSize(15); 
text(textoFalaFazendeiraAgradecida, 285,295);
}

  // SISTEMA DE PROGRESSÃO
  // Planta que cresce após player plantar (embaixo da rainha)
  if (plantaPlantada) {
    textSize(30);
    text("🌱", terraX, terraY - 15);
  }
  // CORUJA DECORATIVA (adicionar antes da rainha)
  textSize(38);
  text("🦉", 307, 125);  // Coruja no canto esquerdo superior do celeiro
  
   // MOSCA VOANDO (decorativa)
  textSize(15);
  text("🪰", 600, 320);  // Mosquinha voando no celeiro

  // LAGARTO DECORATIVO (adicionar esta linha)
textSize(20);
text("🦎", 555, 180);  // Lagarto no chão do celeiro
  
  // MINHOCA DECORATIVA (adicionar esta linha)
textSize(15);
text("🪱", 110, 475);  // Minhoca na terra do celeiro
  
  
  // LAGARTO DECORATIVO (adicionar esta linha)
textSize(30);
text("🐥", 300, 385);  // Lagarto no chão do celeiro
  
 
  // LAGARTO DECORATIVO (adicionar esta linha)
textSize(60);
text("🐓", 500, 475);  // Lagarto no chão do celeiro
  

  // PERSONAGEM PRINCIPAL
  // Rainha (personagem controlado pelo player)
  textSize(90);
  text("👸🏼", rainhaFazendaX, rainhaFazendaY);

  // ITENS COLECIONÁVEIS
  // Balde (só aparece se não foi coletado)
  if (!balde.coletado) {
    textSize(30);
    text(balde.nome, balde.x, balde.y);
  }

  // Escada (necessária para alcançar o balde)
  if (!escada.coletado) {
    textSize(50);
    text("🪜", escada.x, escada.y);
  }

  // INTERFACE DE USUÁRIO
  // Botão de ajuda (canto superior direito)
  fill(255);
  stroke(0);
  strokeWeight(2);
  ellipse(width - 30, 30, 30);
  fill(0);
  noStroke();
  textSize(20);
  text("?", width - 30, 30);

  // SISTEMA DE AJUDA
  // Modal de instruções (aparece quando clica no ?)
  if (mostrarAjuda) {
    fill(255);
    stroke(0);
    strokeWeight(3);
    rect(100, 80, 600, 340, 20); // Caixa de ajuda com bordas arredondadas
    fill(0);
    noStroke();
    textSize(20);
    textAlign(CENTER, TOP);
    text("👑 INSTRUÇÕES 👑\n\nUse as teclas W, A, S e D para se mover pelo celeiro.\n\nAperte E para interagir com os objetos. Os itens coletados \nestarão na mochila e poderão ser usados para escapar. \n\nClique no '?' novamente para voltar ao jogo.", 400, 100);
  }
}

// FUNÇÃO PARA DESENHAR O MINIJOGO DO BOMBEIRO
function drawJogoBombeiro() {
  // Céu azul claro
  background("rgb(134,202,229)");  
  drawHelicoptero(); // Desenha helicóptero separadamente
  
  // Chão verde (grama)
  fill("#3e7327"); 
  rect(0, 400, width, 100); 

  // CAMINHÃO DE BOMBEIRO
  // Desenha caminhão virado para esquerda usando transformações
  textSize(60); 
  textAlign(CENTER, CENTER); 
  push(); // Salva estado atual
  translate(bombeiroX, bombeiroY); // Move origem para posição do bombeiro
  scale(-1, 1);  // Espelha horizontalmente
  text("🚒", 0, 0); // Desenha caminhão
  pop(); // Restaura estado
  
  // SISTEMA DE INCÊNDIO
  // Loop através de todas as árvores
  for (let arvore of arvores) { 
    textSize(60); 
    textAlign(CENTER, CENTER); 
    // Mostra árvore normal ou pegando fogo
    if (arvore.queimando) { 
      text("🌳🔥", arvore.x, arvore.y); 
    } else {
      text("🌳", arvore.x, arvore.y); 
    }

    // MECÂNICA DE COMBATE AO FOGO
    // Calcula distância entre bombeiro e árvore
    let d = dist(bombeiroX, bombeiroY, arvore.x, arvore.y); 
    // Se bombeiro está perto e árvore está queimando, apaga o fogo
    if (d < 60 && arvore.queimando) { 
      arvore.queimando = false; 
    }
  }

  // INSTRUÇÕES NA TELA
  fill(255); 
  textSize(14); 
  textAlign(RIGHT, BOTTOM); 
  text("(Pressione → para conter o incêndio)", width - 10, height - 10); 
}

// FUNÇÃO PARA DESENHAR HELICÓPTERO COM EFEITO DE TREMOR
function drawHelicoptero() {
  
  // SOL DECORATIVO (adicionar estas linhas)
textSize(80);
textAlign(CENTER, CENTER);
text("☀️", 700, 80);  // Sol no canto superior esquerdo
  
   // SOL DECORATIVO (adicionar estas linhas)
textSize(80);
textAlign(CENTER, CENTER);
text("☁️", 100, 80);  
  
  textSize(80);
textAlign(CENTER, CENTER);
text("☁️", 130, 100);  
  
  textSize(80);
textAlign(CENTER, CENTER);
text("☁️", 240, 90);  
  
  // Cria tremor aleatório para simular vibração do helicóptero
  let tremorX = random(-helicopteroTremerIntensidade, helicopteroTremerIntensidade); 
  let tremorY = random(-helicopteroTremerIntensidade, helicopteroTremerIntensidade); 

  // Desenha helicóptero com tremor e espelhado
  push(); 
  translate(helicopteroX + tremorX, helicopteroY + tremorY); 
  scale(-1, 1); // Espelha para ficar virado para esquerda
  textSize(helicopteroTamanho); 
  textAlign(CENTER, CENTER); 
  text("🚁", 0, 0); 
  pop(); 
}

// FUNÇÃO PARA DESENHAR PALCO (CENA INICIAL)
function drawStage() {
  // Fundo azul escuro para simular teatro
  fill("rgb(37,37,204)");
  rect(0, 0, width, height);

  // EFEITOS DE ILUMINAÇÃO
  // Cria spots de luz no palco usando elipses transparentes
  noStroke(); 
  fill(255, 255, 255, 80); // Branco semi-transparente
  ellipse(width / 2, 100, 500, 250); // Luz central principal
  fill(255, 255, 255, 50); // Mais transparente para luzes secundárias
  ellipse(200, 150, 400, 200); // Luz esquerda
  ellipse(600, 150, 400, 200); // Luz direita

  // CHÃO DO PALCO
  // Madeira marrom para simular piso de teatro
  fill("#91543E");
  rect(0, 350, width, 150);
  
  
  // SÍMBOLO REAL DECORATIVO
  textSize(180);
  textAlign(CENTER, CENTER);
  text("🌐", 400, 110);  // Símbolo real no canto superior esquerdo
  
  
  // SÍMBOLO REAL DECORATIVO
  textSize(100);
  textAlign(CENTER, CENTER);
  text("⚜️", 400, 100);  // Símbolo real no canto superior esquerdo
  
  
// TELEFONE DECORATIVO (adicionar esta linha)
textSize(70);
text("☎️", 100, 330);  // Telefone no canto esquerdo do palco
  
  // TELEFONE DECORATIVO (adicionar esta linha)
textSize(100);
text("📺", 700, 330);  // Telefone no canto esquerdo do palco
  

  
  
  

    // PLANTAS DECORATIVAS DO PALCO
  textSize(60);
  text("🪴", 230, 330);   // Planta esquerda no chão do palco
  text("🪴", 560, 330);  // Planta direita no chão do palco


}

// FUNÇÃO PARA DESENHAR A RAINHA (PERSONAGEM PRINCIPAL)
function drawRainha() {
  textSize(150); // Tamanho grande para destaque
  textAlign(CENTER, CENTER); 
  fill(0); // Cor preta para contorno
  text("👸🏼", rainhaX, rainhaY); // Emoji da rainha na posição atual
}

// FUNÇÃO PARA DESENHAR CORTINAS DO TEATRO
function drawCortinas() {
  // Cortinas vermelhas que se abrem gradualmente
  fill("rgb(121,4,4)"); // Vermelho escuro típico de teatro
  noStroke(); 
  // Cortina esquerda (posição controlada por variável)
  rect(0, 0, posicaoCortinaEsquerda, height); 
  // Cortina direita (posição controlada por variável)
  rect(posicaoCortinaDireita, 0, width - posicaoCortinaDireita, height); 
}

// FUNÇÃO PARA MOSTRAR DIÁLOGO DA RAINHA
function drawFalaRainha() {
  let fala = falas[falaAgora]; // Pega fala atual do array
  drawBalaoFala(fala, true); // Chama função para desenhar balão
}

// FUNÇÃO GENÉRICA PARA DESENHAR BALÕES DE FALA
function drawBalaoFala(texto, mostrarInstrucao = true) {
  // BALÃO DE FALA
  fill(255); // Fundo branco
  stroke(0); // Borda preta
  strokeWeight(2); 
  rect(rainhaX - 240, rainhaY - 220, 480, 110, 10); // Retângulo com bordas arredondadas

  // TEXTO DA FALA
  noStroke(); 
  fill(0); // Texto preto
  textSize(16); 
  textAlign(CENTER, CENTER); 
  text(texto, rainhaX, rainhaY - 170); // Centraliza texto no balão

  // INSTRUÇÃO PARA CONTINUAR
  if (mostrarInstrucao) {
    fill(255); // Texto branco para contraste
    noStroke(); 
    textSize(14); 
    textAlign(RIGHT, BOTTOM); 
    text("(Pressione A para continuar)", width - 10, height - 10); 
  }
}

// FUNÇÃO PARA MOSTRAR INVENTÁRIO/MOCHILA
function drawMochila() {
  fill("white"); // Texto branco
  textSize(18); 
  textAlign(LEFT, TOP); 
  text("Mochila:", 18, 10); // Título da mochila

  // LISTA DE ITENS
  // Loop através dos itens na mochila
  for (let i = 0; i < mochila.length; i++) {
    text(mochila[i], 10, 35 + i * 20); // Cada item em uma linha
  }
}

// FUNÇÃO PRINCIPAL DE CONTROLE DE TECLADO
function keyPressed() {
  // RESET DO JOGO
  // Funciona apenas na tela de vitória (cena 4)
  if ((key === 'r' || key === 'R') && cenaAtual === 4) {
    location.reload(); // Recarrega a página para reiniciar
  }

  // CONTROLES DA CENA DO PALCO (cena 0)
  if ((key === 'a' || key === 'A') && cenaAtual === 0) {
    // Lógica para avançar diálogos ou mostrar ninjas
    if (mostrarFalaIncendio) {
      mostrarFalaIncendio = false;
      mostrarNinjas = true;
      tempoNinjas = millis(); // Marca tempo para animação
    } else if (falaAgora < falas.length - 1) {
      falaAgora++; // Avança para próxima fala
    } else {
      cenaAtual = 1; // Vai para cena do bombeiro
    }
  }

  // CONTROLES DO BOMBEIRO (cena 1)
  if (cenaAtual === 1 && keyCode === RIGHT_ARROW) {
    bombeiroX += velocidadeBombeiro; // Move bombeiro para direita
  }

  // CONTROLES DA FAZENDA (cena 2)
  if (cenaAtual === 2) {
    // MOVIMENTO DA RAINHA
    // Sistema WASD para movimentação
    if (key === 'a' || key === 'A') {
      rainhaFazendaX -= velocidadeRainha; // Move esquerda
    } else if (key === 'd' || key === 'D') {
      rainhaFazendaX += velocidadeRainha; // Move direita
    } else if (key === 'w' || key === 'W') {
      rainhaFazendaY -= velocidadeRainha; // Move cima
    } else if (key === 's' || key === 'S') {
      rainhaFazendaY += velocidadeRainha; // Move baixo
    }

    // LIMITAÇÃO DE MOVIMENTO
    // Impede que rainha saia da tela ou entre em áreas inválidas
    rainhaFazendaX = constrain(rainhaFazendaX, 0, width);
    rainhaFazendaY = constrain(rainhaFazendaY, 360, height - 50);

    // SISTEMA DE INTERAÇÃO (tecla E)
    if (key === 'e' || key === 'E') {
      // CÁLCULO DE DISTÂNCIAS
      // Calcula distância entre rainha e vários objetos/NPCs
      let dEscada = dist(rainhaFazendaX, rainhaFazendaY, escada.x, escada.y);
      let dPorta = dist(rainhaFazendaX, rainhaFazendaY, 400, 290);
      let dVaca = dist(rainhaFazendaX, rainhaFazendaY, vaca.x, vaca.y);
      let dFazendeira = dist(rainhaFazendaX, rainhaFazendaY, 240, 365);
      let dTerra = dist(rainhaFazendaX, rainhaFazendaY, terraX, terraY);
      let dPortaFinal = dist(rainhaFazendaX, rainhaFazendaY, 400, 300);

      // VERIFICAÇÕES DE INVENTÁRIO
      // Checa se player possui itens necessários
      let temEscada = mochila.includes(escada.nome);
      let temBalde = mochila.includes(balde.nome);
      let temLeite = mochila.includes(copoDeLeite.nome);
      let temMuda = mochila.includes(planta.nome);
      let temChave = mochila.includes(chaveDourada.nome);

      // INTERAÇÃO COM ESCADA
      // Coleta escada se player está perto e ela não foi coletada
      if (dEscada < 60 && !escada.coletado) {
        mochila.push(escada.nome);
        escada.coletado = true;
      }

      // INTERAÇÃO COM PORTA (BALDE)
      // Sistema de pré-requisito: precisa de escada para pegar balde
      if (dPorta < 80 && !balde.coletado) {
        if (temEscada) {
          // Remove escada da mochila e adiciona balde
          mochila = mochila.filter(item => item !== escada.nome);
          balde.coletado = true;
          mochila.push(balde.nome);
        } else {
          // Mostra mensagem de erro se não tem escada
          textoFalaPorta = "Tá muito alto... Eu deveria pegar algo pra alcançar.";
          mostrarFalaPorta = true;
          setTimeout(() => {
            mostrarFalaPorta = false;
          }, 3000);
        }
      }

      // INTERAÇÃO COM VACA (ORDENHAR)
      // Precisa de balde para ordenhar vaca
      if (dVaca < 80 && temBalde && !copoDeLeite.coletado) {
        // Troca balde por leite
        mochila = mochila.filter(item => item !== balde.nome);
        copoDeLeite.coletado = true;
        mochila.push(copoDeLeite.nome);

        // Mostra feedback da vaca
        mostrarFalaVaca = true;
        setTimeout(() => {
          mostrarFalaVaca = false;
        }, 2000);
      }

      // INTERAÇÃO COM FAZENDEIRA (QUEST PRINCIPAL)
      if (dFazendeira < 80) {
        if (temLeite && !planta.coletado) {
          // Troca leite por muda de planta
          mochila = mochila.filter(item => item !== copoDeLeite.nome);
          copoDeLeite.coletado = false;
          planta.coletado = true;
          mochila.push(planta.nome);

          // Mostra agradecimento
          mostrarFalaFazendeiraAgradecida = true;
          setTimeout(() => {
            mostrarFalaFazendeiraAgradecida = false;
          }, 3000);
        } else if (!temLeite && !planta.coletado) {
          // Mostra request se não tem leite
          mostrarFalaFazendeira = true;
          setTimeout(() => {
            mostrarFalaFazendeira = false;
          }, 3000);
        }
      }

      // INTERAÇÃO COM POÇA (PLANTAR)
      // Planta muda na poça e recebe chave dourada
      if (dTerra < 60 && temMuda && !plantaPlantada) {
        // Remove muda da mochila
        mochila = mochila.filter(item => item !== planta.nome);
        planta.coletado = false;
        plantaPlantada = true;

        // Adiciona chave dourada (item final)
        chaveDourada.coletado = true;
        mochila.push(chaveDourada.nome);
      }

      // ENTRADA NO DESAFIO FINAL
      // Porta final que leva ao desafio SAW
      if (dPortaFinal < 100 && temChave) {
        cenaAtual = 3;
        iniciouDesafio = false;
      }
    }
  }

  // CONTROLES DO DESAFIO SAW (cena 3) - SISTEMA DE MÚLTIPLA ESCOLHA
  if (cenaAtual === 3) {
    // INICIAR DESAFIO
    if (!iniciouDesafio && key === ' ') {
      cenaAgora = 2;
      tempoInicio = millis();
      iniciouDesafio = true;
      faseEncerrada = false;
    }

    // FASE 1 - Primeira escolha
    if (cenaAgora === 2 && escolha1 === "") {
      if (key === 'a' || key === 'A') {
        escolha1 = "A";
        cenaAgora = 3;
        tempoInicio = millis();
      } else if (key === 'b' || key === 'B') {
        escolha1 = "B"; // Escolha correta
        cenaAgora = 3;
        tempoInicio = millis();
      }
    }

    // Continuar se escolha1 foi correta
    if (cenaAgora === 3 && escolha1 === "B" && key === ' ') {
      cenaAgora = 5;
      tempoInicio = millis();
      faseEncerrada = false;
    }

    // FASE 2 - Segunda escolha
    if (cenaAgora === 5 && escolha2 === "") {
      if (key === 'a' || key === 'A') {
        escolha2 = "A";
        cenaAgora = 6;
        tempoInicio = millis();
      } else if (key === 'b' || key === 'B') {
        escolha2 = "B"; // Escolha correta
        cenaAgora = 6;
        tempoInicio = millis();
      }
    }

    // Continuar se escolha2 foi correta
    if (cenaAgora === 6 && escolha2 === "B" && key === ' ') {
      cenaAgora = 8;
      tempoInicio = millis();
      faseEncerrada = false;
    }

    // FASE 3 - Terceira escolha
    if (cenaAgora === 8 && escolha3 === "") {
      if (key === 'a' || key === 'A') {
        escolha3 = "A"; // Escolha correta
        cenaAgora = 9;
        tempoInicio = millis();
      } else if (key === 'b' || key === 'B') {
        escolha3 = "B";
        cenaAgora = 9;
        tempoInicio = millis();
      }
    }

    // Continuar se escolha3 foi correta
    if (cenaAgora === 9 && escolha3 === "A" && key === ' ') {
      cenaAgora = 11;
      tempoInicio = millis();
      faseEncerrada = false;
    }

    // FASE 4 - Quarta escolha
    if (cenaAgora === 11 && escolha4 === "") {
      if (key === 'a' || key === 'A') {
        escolha4 = "A";
        cenaAgora = 12;
        tempoInicio = millis();
      } else if (key === 'b' || key === 'B') {
        escolha4 = "B"; // Escolha correta
        cenaAgora = 12;
        tempoInicio = millis();
      }
    }

    // Continuar se escolha4 foi correta
    if (cenaAgora === 12 && escolha4 === "B" && key === ' ') {
      cenaAgora = 14;
      tempoInicio = millis();
      faseEncerrada = false;
    }

    // FASE 5 - Quinta escolha
    if (cenaAgora === 14 && escolha5 === "") {
      if (key === 'a' || key === 'A') {
        escolha5 = "A"; // Escolha correta
        cenaAgora = 15;
        tempoInicio = millis();
      } else if (key === 'b' || key === 'B') {
        escolha5 = "B";
        cenaAgora = 15;
        tempoInicio = millis();
      }
    }

    // Continuar se escolha5 foi correta
    if (cenaAgora === 15 && escolha5 === "A" && key === ' ') {
      cenaAgora = 17;
      tempoInicio = millis();
      faseEncerrada = false;
    }

    // FASE 6 - Escolha final
    if (cenaAgora === 17 && escolha6 === "") {
      if (key === 'a' || key === 'A') {
        escolha6 = "A"; // Escolha correta
        cenaAgora = 18;
        tempoInicio = millis();
      } else if (key === 'b' || key === 'B') {
        escolha6 = "B";
        cenaAgora = 18;
        tempoInicio = millis();
      }
    }

    // VITÓRIA - Se chegou até aqui com escolha correta
    if (cenaAgora === 18 && escolha6 === "A" && key === ' ') {
      cenaAtual = 4; // Vai para tela de vitória
    }

    // SISTEMA DE RESET PARA TELAS DE DERROTA
    // Reinicia desafio se player fez escolha errada
    if (key === ' ' && 
        ((cenaAgora === 3 && escolha1 !== "B") ||
         (cenaAgora === 6 && escolha2 !== "B") ||
         (cenaAgora === 9 && escolha3 !== "A") ||
         (cenaAgora === 12 && escolha4 !== "B") ||
         (cenaAgora === 15 && escolha5 !== "A") ||
         (cenaAgora === 18 && escolha6 !== "A"))) {
      // Reset completo das variáveis do desafio
      cenaAgora = 0;
      escolha1 = "";
      escolha2 = "";
      escolha3 = "";
      escolha4 = "";
      escolha5 = "";
      escolha6 = "";
      iniciouDesafio = false;
      faseEncerrada = false;
      cenaAtual = 3;
      tempoInicio = millis();
    }
  }
}

// FUNÇÃO DE CONTROLE DO MOUSE
function mousePressed() {
  // BOTÃO DE AJUDA NA FAZENDA
  // Calcula distância do clique ao botão de ajuda
  let d = dist(mouseX, mouseY, width - 30, 30);
  if (d < 15 && cenaAtual === 2) {
    mostrarAjuda = !mostrarAjuda; // Toggle do modal de ajuda
  }

  // Placeholder para outros controles de mouse
  if (cenaAtual === 3) {
    // Controles específicos do desafio com mouse podem ser adicionados aqui
  }
}

// FUNÇÃO PARA DESENHAR CAIXAS DE OPÇÃO (INTERFACE)
function drawOptionBox(texto, x, y) {
  // Caixa escura com borda clara
  fill(40);
  stroke(200);
  strokeWeight(2);
  rectMode(CENTER);
  rect(x, y, 600, 60, 12); // Retângulo com bordas arredondadas

  // Texto branco centralizado
  noStroke();
  fill(255);
  textSize(26);
  text(texto, x, y);
}

// FUNÇÃO PARA DESENHAR CENA FINAL DE VITÓRIA
function drawCenaFinal() {
  drawCasteloSimples(); // Desenha cenário do castelo

  // PERSONAGENS ALINHADOS
  // Guarda, rainha e guardiã no chão do castelo
  textAlign(CENTER, CENTER);
  textSize(130);
  text("💂🏿", 320, 420);      // Guarda esquerda
  text("👸🏼", 400, 420);    // Rainha (protagonista)
  text("💂🏻‍♀️", 480, 420); // Guardiã direita

  // BALÃO DE FALA DA VITÓRIA
  fill(255);
  stroke(0);
  strokeWeight(2);
  ellipse(400, 280, 270, 90); // Balão oval
  
  // Texto da fala - aqui você está definindo o texto final da aventura
fill(0);   // Define a cor do texto como preto
noStroke();   // Remove bordas do texto
textSize(16);   // Define o tamanho da fonte como 16 pixels
text("Foi uma aventura e tanto pelo campo!\nObrigada por me ajudar!", 400, 280);   // Exibe o texto de agradecimento na posição x=400, y=280. O \n cria uma quebra de linha

// Instrução final - mostra como reiniciar o jogo
fill(255);   // Muda a cor do texto para branco
textFont("Times New Roman");   // Define a fonte como Times New Roman
textSize(18);   // Aumenta o tamanho da fonte para 18 pixels
textAlign(CENTER, BOTTOM);   // Alinha o texto ao centro horizontalmente e na parte inferior verticalmente
text("Pressione R para jogar novamente", width / 2, height - 20);   // Exibe a instrução de reiniciar centralizada na parte inferior da tela

}

function drawCasteloSimples() {
  // Céu azul - desenha o fundo do cenário
  background("rgb(135,206,235)");   // Define a cor de fundo como azul claro (cor do céu)
  
  // 🌿 Grama (centralizada, como você mandou)
  fill("rgb(34,139,34)");   // Define a cor como verde escuro para representar a grama
  rect(400, 435, width, 170);   // Desenha um retângulo para a grama: x=400, y=435 (ponto de chão), largura=width (toda a largura da tela), altura=170 pixels
  // ponto de chão (y = 435) - esta é a linha de referência do chão onde os objetos ficam "apoiados"
  
  textAlign(CENTER, CENTER);   // Alinha o emoji do castelo ao centro tanto horizontal quanto verticalmente
  textSize(450);   // Define um tamanho muito grande (450 pixels) para o emoji do castelo
  text("🏰", 400, 200);   // Desenha o emoji do castelo na posição x=400, y=200, criando um castelo grande e centralizado
}

//O objetivo deste jogo é promover o entendimento sobre as práticas agrícolas e pecuárias, enfatizando a importância da produção de alimentos e do cuidado com os animais. Através da narrativa em que a apresentadora é sequestrada e precisa realizar tarefas como ordenhar uma vaca e cultivar plantas, os jogadores aprendem sobre o ciclo de produção no campo, desenvolvendo habilidades de pensamento computacional ao resolver desafios e responder perguntas relacionadas à vida rural.
