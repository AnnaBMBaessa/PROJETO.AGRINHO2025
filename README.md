Pular para o conteúdo
Histórico de chats

Você disse:
style.css
Arquivo
sketch.js
JavaScript
p5.sound.min.js
JavaScript
p5.js
JavaScript
index.html
Arquivo
Faça uma descrição sobre o projeto realizado com os códigos de cada arquivo, detalhando os seguintes tópicos: objetivo, descrição e instruções, faça o mais detalhado possível 
O ChatGPT disse:
Claro! Aqui está uma descrição detalhada do projeto, com objetivo, funcionamento e organização de cada arquivo:

🎯 OBJETIVO DO PROJETO
O projeto “In Your Hands”, criado por Anna Beatriz Mott Baessa (1º C - CAP/UEM), foi desenvolvido como parte do Projeto Agrinho 2025, com o tema “Festejando a conexão do campo e a cidade”.

O jogo tem como objetivo sensibilizar os jogadores sobre a importância da agricultura consciente, mostrando a conexão entre desastres ambientais, trabalho no campo e as decisões que impactam a produção de alimentos e a saúde das pessoas. Tudo isso por meio de uma narrativa interativa com fases, diálogos, coleta de itens e um minigame inspirado em Saw Game com perguntas e decisões morais.

🎮 DESCRIÇÃO DO JOGO
Estrutura narrativa:
Cena 0 - Jornal Real
A rainha apresenta um telejornal com notícias sobre queimadas. Após os diálogos, ninjas aparecem e a sequestram.

Cena 1 - Incêndio
Um minigame de bombeiro onde o jogador ajuda a apagar o fogo da floresta com um caminhão e helicóptero.

Cena 2 - Sequestro
Os ninjas falam com o público e levam a rainha para o celeiro.

Cena 3 - Celeiro (fase principal)
A rainha acorda em um celeiro e precisa:

Coletar objetos como escada e balde;

Ordenhar a vaca com o balde para conseguir leite;

Entregar o leite à fazendeira, que dá uma muda de planta;

Plantar a muda, que gera uma chave;

Usar a chave na porta, que leva ao próximo desafio.

Cena 4 - Saw Game (Desafio Moral com Contagem Regressiva)
A jogadora precisa responder corretamente a 6 perguntas, cada uma com tempo limitado (15 segundos), usando as teclas A ou B. As perguntas envolvem dilemas sobre responsabilidade na agricultura.

Cena 5 - Final
Se tudo for feito corretamente, a cena final mostra a rainha com os guardas agradecendo a ajuda, em frente ao fundo do jornal.

🕹️ INSTRUÇÕES DE JOGO
Controles:
W, A, S, D: Movimentar a rainha

E: Interagir com objetos/personagens

A / B: Escolhas nas perguntas do minigame

ESPACO: Avançar falas ou confirmar ações

Dicas:
Explore o celeiro e interaja com todos os elementos.

Pegue itens e entregue corretamente para liberar a próxima ação.

Preste atenção às perguntas do minigame, pois cada erro pode levar ao reinício.

📁 ARQUIVOS DO PROJETO
1. index.html
Responsável por carregar o jogo no navegador.
Inclui os arquivos principais:

Biblioteca p5.js

Biblioteca de som p5.sound

Estilo CSS

Script principal sketch.js

<script src="https://cdn.jsdelivr.net/npm/p5@1.11.7/lib/p5.js"></script>
<script src="https://cdn.jsdelivr.net/npm/p5@1.11.7/lib/addons/p5.sound.min.js"></script>
<link rel="stylesheet" type="text/css" href="style.css">
<script src="sketch.js"></script>
2. style.css
Define o estilo da página HTML onde o jogo é exibido.

html, body {
  margin: 0;
  padding: 0;
}
canvas {
  display: block;
}
Essas regras removem margens e fazem com que o canvas ocupe a tela corretamente.

3. sketch.js
Arquivo principal do projeto. Contém todo o código do jogo, incluindo:

🔸 Variáveis:
Itens: balde, escada, planta, chave, copoDeLeite

Personagens: rainha, vaca, fazendeira, ninjas

Sistema de fala: mostra balões de texto nos momentos certos

Inventário: mochila[] guarda os itens coletados

🔸 Cenas e mecânicas:
cenaAtual: controla a fase ativa (jornal, incêndio, celeiro, desafio)

desenhos: funções como drawRainha(), drawCortinas(), drawStage()

movimentação: usando keyIsDown() para mover a rainha

interação com itens: usando E próximo aos objetos

minigame estilo Saw: perguntas com tempoInicio, tempoRestante, escolha1 até escolha6

4. p5.js
Biblioteca principal para desenhar na tela, controlar som, movimento, interações, etc.

5. p5.sound.min.js
Biblioteca para trabalhar com áudio, caso sons sejam usados no jogo.

✅ RESUMO FINAL
Item	Detalhes
Nome do Projeto	In Your Hands
Tema	Conexão entre campo e cidade (Agrinho 2025)
Autora	Anna Beatriz Mott Baessa (1º C - CAP/UEM)
Ferramenta	p5.js
Destaques	Movimento livre, interações com objetos, inventário, falas, minigame com dilemas agrícolas
Instruções	WASD para mover, E para interagir, A/B para decisões
Se quiser, posso montar isso num PDF bonito com capa, sumário e tudo ❤️
Quer que eu faça isso?


Fontes



Nenhum arquivo escolhidoNenhum arquivo escolhido
O ChatGPT pode cometer erros. Considere verificar informações importantes.
