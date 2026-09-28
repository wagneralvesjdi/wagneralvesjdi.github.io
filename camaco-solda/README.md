# Compilador de Indicadores — WhatsApp

Aplicação web local (arquivo único, sem instalação nem servidor) que lê o
export de um grupo do WhatsApp — **texto, fotos e vídeos** — e gera:

- uma planilha `.xlsx` com as intervenções organizadas por **processo**,
  **atividade**, **quem reportou**, **status**, **local/unidade**,
  **severidade**, **semana**, **mês** e **ano**, com as fotos/vídeos de
  cada linha já casados e linkados automaticamente;
- um **painel visual de indicadores** (KPIs e gráficos) direto na tela.

Tudo roda no navegador — nenhuma mensagem, foto ou vídeo é enviada para
fora da sua máquina. É o **mesmo arquivo `index.html`** tanto no
computador quanto no celular — não tem versão separada nem servidor
para instalar.

## Deixar pronto no computador

1. Baixe/copie o arquivo `index.html` desta pasta para o computador.
2. Dê duplo clique nele — abre no navegador padrão e já está pronto pra
   usar. Não precisa instalar nada, não precisa rodar servidor.
3. (Opcional) Salve como favorito no navegador para achar rápido da
   próxima vez.

## Deixar pronto no celular

O mesmo arquivo funciona igual no navegador do celular (Chrome/Safari),
incluindo carregar o `.zip` exportado do próprio WhatsApp. O único passo
extra é colocar o arquivo `index.html` no celular, já que ele não vem
instalado por padrão. Formas mais simples de fazer isso:

- **E-mail para você mesmo**: anexe `index.html`, abra o e-mail no
  celular e toque no anexo para abrir no navegador.
- **Google Drive / Dropbox**: suba o arquivo, abra pelo app no celular e
  escolha "abrir com" o navegador.
- **Link direto**: se preferir não transferir arquivo nenhum, hospede
  este HTML em algum lugar (ex: GitHub Pages) e apenas abra a URL no
  celular — mas isso deixa a página publicamente acessível por esse
  link, então só faça isso se estiver de acordo com isso (o
  processamento do WhatsApp continua 100% local, só a própria página
  em branco fica pública).

Depois de aberto uma vez, para ter um "ícone de app" na tela inicial:
- **Android (Chrome)**: menu ⋮ → **Adicionar à tela inicial**.
- **iPhone (Safari)**: botão de compartilhar → **Adicionar à Tela de
  Início**.

Isso cria um atalho com ícone próprio que abre direto nessa página,
sem precisar navegar pelos arquivos toda vez.

## Levar o .zip exportado do celular até o computador do trabalho

Se a empresa bloqueia o WhatsApp Web, você ainda consegue rodar tudo no
computador do trabalho — só precisa tirar o `.zip` exportado do celular
até lá por outro caminho. Como o Microsoft Teams normalmente é liberado
nas empresas (diferente do WhatsApp Web), dá pra usar ele só como
"correio" do arquivo:

1. No celular, depois de exportar a conversa (⋮ → Mais → Exportar
   conversa → Anexar mídia), o WhatsApp abre a tela de compartilhar.
   Escolha **Microsoft Teams**.
2. Envie o arquivo para você mesmo — o Teams tem uma opção de
   "conversa comigo mesmo" (ou envie num canal/chat que só você usa) —
   ou para qualquer chat que você acesse depois no computador.
3. No computador do trabalho, abra o Teams (desktop ou web) e baixe o
   `.zip` anexado na mensagem.
4. Carregue esse arquivo na aplicação (`index.html`), normalmente, como
   no passo 1 abaixo.

O Teams aqui só transporta o arquivo de um aparelho para o outro — o
processamento continua 100% local, nada do conteúdo do WhatsApp passa
por servidor nenhum além do próprio Teams durante esse transporte (o
que também acontece com e-mail, Drive ou qualquer outro meio que você
use para o mesmo fim).

## Como usar

1. Abra `index.html` (no computador ou no celular, como acima).
   > É necessário estar conectado à internet na primeira vez que abrir,
   > pois a página carrega duas bibliotecas via CDN: SheetJS (planilhas)
   > e JSZip (leitura/geração de `.zip`).
2. No WhatsApp, exporte o grupo: **⋮ → Mais → Exportar conversa →
   Anexar mídia** e salve o `.zip`. Essa é uma única ação que já traz
   todo o histórico (texto + fotos + vídeos) — não é preciso salvar
   mídia por mídia. Se o grupo tiver histórico muito grande, o WhatsApp
   pode limitar o que entra no export; nesse caso, repita a exportação
   periodicamente (ex: uma vez por mês).
3. Na aplicação, carregue esse `.zip` (botão de arquivo). Se não tiver
   mídia, também é possível colar o `.txt` exportado diretamente na
   caixa de texto.
4. (Opcional) Abra **"Configurar palavras-chave..."** e ajuste as listas
   de Processos, Atividades, Local/Unidade, Severidade e palavras que
   indicam "Resolvido", para refletir a realidade do seu time. Fica
   salvo no navegador para as próximas vezes.
5. Clique em **Processar mensagens**. A aplicação:
   - identifica cada mensagem (data, hora, autor, texto) e casa cada
     foto/vídeo/áudio anexado com a mensagem correspondente;
   - sugere automaticamente **Processo**, **Atividade**, **Local** e
     **Severidade**, e classifica **Status** (Aberto/Resolvido), tudo
     com base nas palavras-chave configuradas;
   - marca como "incluir" as mensagens com mídia anexada, ou que contêm
     alguma palavra-gatilho/palavra-chave configurada.
6. Revise a tabela: marque/desmarque quais mensagens são realmente
   intervenções, ajuste os campos sugeridos (com sugestões automáticas
   via autocomplete) e clique na célula de mídia para pré-visualizar a
   foto/vídeo/áudio antes de decidir.
7. Confira o **painel de indicadores** (KPIs, top processos, top
   técnicos, tendência por semana, status).
8. Gere o resultado no formato que precisar:
   - **Gerar e baixar pacote (.zip)** — planilha completa + mídia, para
     análise/arquivo detalhado.
   - **Gerar relatório em PDF** — um resumo (KPIs, gráficos e tabela das
     intervenções incluídas, sem mídia) pronto para compartilhar. Veja a
     seção abaixo.

## Relatório em PDF (para enviar por e-mail corporativo)

Muita empresa bloqueia anexos `.zip` por padrão nos filtros de e-mail —
PDF quase nunca é bloqueado. Por isso a ferramenta também gera um
relatório em PDF, usando a função nativa de impressão do navegador (sem
depender de nenhum serviço externo que o TI possa bloquear).

Como gerar:
1. Clique em **"Gerar relatório em PDF"** (painel 5, depois de revisar
   a tabela).
2. **Android (Chrome)**: na tela de impressão que abre, em "Destino"
   escolha **Salvar como PDF** → Salvar. O arquivo vai para a pasta de
   Downloads do celular.
3. **iPhone (Safari)**: na pré-visualização de impressão, toque no
   ícone de compartilhar (□↑) → **Salvar em Arquivos** (ou compartilhe
   direto por e-mail a partir dali).
4. Compartilhe o PDF salvo do jeito que preferir — anexar num e-mail,
   mandar pelo Teams, etc.

O relatório traz: total de intervenções, % resolvidas, processo/técnico
mais recorrentes, gráficos por processo e por técnico, e uma tabela com
todas as intervenções marcadas para incluir (data, autor, processo,
atividade, local, severidade, status e descrição). Não inclui fotos/
vídeos — para isso, use o pacote `.zip`.

### Se o TI bloquear a página no computador do trabalho

Tudo aqui roda 100% no navegador, sem servidor — mas a página carrega
duas bibliotecas de um CDN (`cdnjs.cloudflare.com`) na primeira vez que
abre, e alguns firewalls corporativos bloqueiam domínios de CDN não
listados. Se isso acontecer, a solução mais simples é abrir a página no
**celular**, usando dados móveis (fora da rede/firewall da empresa) em
vez do computador do trabalho — todo o fluxo (carregar o `.zip`,
revisar, gerar o relatório em PDF) funciona igual no celular, como
descrito em "Deixar pronto no celular" acima.

## Como a classificação automática funciona

Como as mensagens são texto livre (sem campos padronizados), a
aplicação usa **regras de palavra-chave configuráveis** em vez de tentar
"adivinhar" com IA:

```
palavra-chave => Valor
```

Por exemplo, `subestacao => Subestação A` faz com que qualquer mensagem
contendo "subestacao" (sem acento, sem diferenciar maiúsculas/
minúsculas) seja sugerida como Local "Subestação A". A primeira regra
que combinar com o texto é usada. Mesma lógica para Processo, Atividade
e Severidade.

**Cuidado com palavras-chave curtas**: a comparação é por substring em
qualquer parte do texto — uma regra como `ti => TI` também combina
dentro de "crí**ti**ca". Prefira palavras-chave específicas (5+ letras)
para reduzir falsos positivos.

**Status** usa uma lista separada de palavras que indicam conclusão
("resolvido", "concluído" etc.). A aplicação reconhece negação simples
("**ainda não** resolvido", "**sem** solução") e nesses casos mantém o
Status como "Aberto" em vez de marcar como resolvido incorretamente.
Mesmo assim, revise o Status na tabela antes de exportar — é só um
apoio, não um substituto da checagem manual.

Quando uma mensagem só tem foto/vídeo sem legenda, os campos ficam em
branco para preenchimento manual na revisão — é o esperado, já que não
há texto para classificar.

## Mídia anexada automaticamente

Cada foto/vídeo/áudio referenciado no `.txt` exportado é localizado
dentro do `.zip` pelo nome do arquivo e associado à linha certa —
sem arrastar nada manualmente. No pacote final:

- a planilha ganha uma coluna **Mídia** com um link clicável
  (`🖼 Abrir imagem`, `🎬 Abrir vídeo`, `🔊 Abrir áudio`) apontando para
  o arquivo correspondente;
- os arquivos originais são copiados para uma pasta **midias/** ao lado
  da planilha, renomeados com um prefixo numérico para evitar colisão
  de nomes.
- Os links são caminhos relativos — funcionam quando a planilha e a
  pasta `midias/` são extraídas juntas do `.zip`, no mesmo diretório.
- Se preferir uma planilha mais leve (sem copiar os arquivos originais,
  só o texto indicando o tipo de mídia), desmarque **"Incluir arquivos
  de mídia originais no pacote exportado"** nas configurações.
- Uma mídia referenciada no texto mas que não foi encontrada no `.zip`
  (por exemplo, se o WhatsApp cortou parte do histórico no export)
  aparece marcada com ⚠ na tabela e na planilha.

Na tela de revisão, clique na miniatura/ícone de qualquer linha para
pré-visualizar a foto, tocar o vídeo/áudio ou baixar o arquivo, antes
mesmo de gerar o pacote final.

## Painel de indicadores

Calculado em tempo real a partir das linhas marcadas para incluir:

- KPIs: total de intervenções, % resolvidas, processo mais recorrente,
  técnico mais atuante;
- Intervenções por Processo e por Técnico (top 8);
- Tendência de intervenções por semana;
- Distribuição por Status (Aberto/Resolvido).

Use **"Atualizar painel com os ajustes da tabela"** depois de revisar/
corrigir linhas para recalcular os números.

## Estrutura da planilha gerada

- **Intervenções**: uma linha por mensagem incluída, com Data, Hora,
  Ano, Mês, Trimestre, Semana (ISO, ex: `2024-S38`), Autor, Processo,
  Atividade, Local/Unidade, Severidade, Status, Mídia (link) e
  Descrição.
- **Resumo por Ano / Mês / Semana**: contagem de intervenções por
  período.
- **Resumo por Processo / Atividade / Local / Severidade / Status**:
  contagem de intervenções por categoria.
- **Processo x Mês** e **Atividade x Mês**: tabelas cruzadas com a
  contagem de intervenções por processo/atividade em cada mês.

## Formatos de export do WhatsApp suportados

- Android: `dd/mm/aaaa hh:mm - Nome: mensagem` (com ou sem segundos, com
  ou sem vírgula após a data).
- iPhone: `[dd/mm/aaaa, hh:mm:ss] Nome: mensagem`.
- Mensagens de várias linhas (incluindo legendas de mídia) são
  automaticamente reagrupadas em uma única intervenção.
- Notificações de sistema (ex: "Fulano entrou no grupo") são
  descartadas automaticamente.
- Referências de mídia no formato `NOME.ext (arquivo anexado)` (e
  variações em inglês) são reconhecidas e casadas com os arquivos do
  `.zip`.

## Por que exportação manual e não um bot conectado ao grupo?

Ler um grupo do WhatsApp "ao vivo" exigiria um serviço rodando 24/7
conectado via WhatsApp Web usando bibliotecas não-oficiais (o WhatsApp
não oferece API oficial para grupos comuns), o que traz risco real de
bloqueio do número e viola os termos de uso do WhatsApp. A exportação
manual com mídia é uma única ação dentro do próprio WhatsApp, cobre
todo o histórico de uma vez, não depende de servidor e não tem esse
risco — por isso é o caminho usado aqui.

## Privacidade

Todo o processamento acontece localmente, no navegador — inclusive a
leitura do `.zip` e a geração do pacote final. Nenhuma mensagem, foto,
vídeo ou arquivo é enviado para qualquer servidor; as únicas conexões
externas são o carregamento das bibliotecas (SheetJS e JSZip) via CDN.
