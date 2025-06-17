# CheckList Berrante-ng

## Análise de Interface - berrante-ng

O presente documento tem como objetivo formalizar a análise da interface do sistema **berrante-ng**, desenvolvido em Angular e TypeScript. Esta análise se concentra exclusivamente na camada de apresentação (_front-end_), considerando aspectos visuais, estruturais, de navegação, usabilidade, acessibilidade e aderência às boas práticas de desenvolvimento de interfaces.

---

## Metodologia Aplicada

O processo de análise foi realizado por meio de inspeção visual detalhada, utilizando o sistema em ambiente real. Foram observados aspectos de funcionamento, comportamento dos componentes, navegação, organização da informação e conformidade com princípios de design de interface.

A verificação foi segmentada em seis pilares principais:

- Consistência visual;
- Organização estrutural e hierarquia dos componentes;
- Aderência a padrões de design e boas práticas de UX/UI;
- Feedback visual e operacional ao usuário;
- Acessibilidade mínima recomendada (A11Y);
- Responsividade e adaptação para diferentes dispositivos.

A estrutura do checklist foi organizada em tópicos que representam as principais áreas e componentes da interface, permitindo uma análise clara, objetiva e rastreável.

---

## Top-bar

> Seção superior fixa do sistema, responsável por fornecer acesso rápido a funções globais, como:

- Perfil do usuário;
- Notificações;
- Logout;
- Eventuais atalhos ou campo de busca global.
 
---

## Side-bar (Menu Lateral)

> Menu de navegação lateral persistente que centraliza o acesso às funcionalidades principais do sistema. Estruturado em categorias e subcategorias, oferecendo acesso direto aos módulos operacionais.

---

### Relatórios

> Submenu dedicado à visualização de dados operacionais, produtivos, zootécnicos e financeiros.

#### Produtividade

- [x] Estoque de animais por categoria;
  > [!WARNING] Não apresenta funcionalidades para exportação de relatório;
  > Conteúdo difere do apresentado em farmtech.

- [x] Estoque de animais por faixa etária;
  > [!WARNING] Não apresenta funcionalidades para exportação de relatório;
  > Conteúdo difere do apresentado em farmtech.

- [x] Estoque de animais por localidade;
  > [!WARNING] Apresenta seletor e checkbox;
  > Não apresenta função para gerar relatório;
  > Conteúdo difere do apresentado em farmtech.

- [x] Consulta de animal;
  > [!SUCCESS] Conteúdo similar ou idêntico ao apresentado em farmtech;

  > [!WARNING] Sistema não realiza exportação de arquivos do usuário logado ou não é capaz de identificar os dados relacionados ao usuário.

- [x] Consulta de pesagem;
  > [!WARNING] Não apresenta funcionalidades para exportação de relatório;
  > Conteúdo difere do apresentado em farmtech.

- [x] Identificações do animal;
  > [!SUCCESS] Conteúdo similar ou idêntico ao apresentado em farmtech;

  > [!WARNING] Sistema não realiza exportação de arquivos do usuário logado ou não é capaz de identificar os dados relacionados ao usuário.

- [x] Consulta por faixa de peso;
  > [!WARNING] Não apresenta funcionalidades para exportação de relatório;
  > Conteúdo difere do apresentado em farmtech.

- [x] Contagem de rebanho;
  > [!WARNING] Não apresenta funcionalidades para exportação de relatório;
  > Conteúdo difere do apresentado em farmtech.

- [x] Consumo de suplementação;
  > [!WARNING] Não apresenta funcionalidades para exportação de relatório;
  > Conteúdo difere do apresentado em farmtech.

- [x] Consulta de chuva;
  > [!SUCCESS] Conteúdo similar ou idêntico ao apresentado em farmtech;

  > [!WARNING] Sistema não realiza exportação de arquivos do usuário logado ou não é capaz de identificar os dados relacionados ao usuário;

  > [!WARNING] inconsistência visual no componente frame que referencia o sistema farmtech.

- [x] Movimentação do rebanho;
  > [!SUCCESS] Conteúdo similar ou idêntico ao apresentado em farmtech;

  > [!WARNING] Sistema não realiza exportação de arquivos do usuário logado ou não é capaz de identificar os dados relacionados ao usuário;

  > [!WARNING] inconsistência visual no componente frame que referencia o sistema farmtech.


#### Reprodução

> Funcionalidades relacionadas à gestão do ciclo reprodutivo dos animais.

- [x] Gestação;
  > [!SUCCESS] Conteúdo similar ou idêntico ao apresentado em farmtech;

  > [!WARNING] Sistema não realiza exportação de arquivos do usuário logado ou não é capaz de identificar os dados relacionados ao usuário;

  > [!WARNING] inconsistência visual no componente frame que referencia o sistema farmtech.


- [x] Descarte;
  > [!SUCCESS] Conteúdo similar ou idêntico ao apresentado em farmtech;

  > [!WARNING] Sistema não realiza exportação de arquivos do usuário logado ou não é capaz de identificar os dados relacionados ao usuário;

  > [!WARNING] inconsistência visual no componente frame que referencia o sistema farmtech.


- [x] Desmame;
  > [!SUCCESS] Conteúdo similar ou idêntico ao apresentado em farmtech;

  > [!WARNING] Sistema não realiza exportação de arquivos do usuário logado ou não é capaz de identificar os dados relacionados ao usuário;

  > [!WARNING] inconsistência visual no componente frame que referencia o sistema farmtech.


- [x] Diagnóstico de gestação;
  > [!SUCCESS] Conteúdo similar ou idêntico ao apresentado em farmtech;

  > [!WARNING] Sistema não realiza exportação de arquivos do usuário logado ou não é capaz de identificar os dados relacionados ao usuário;

  > [!WARNING] inconsistência visual no componente frame que referencia o sistema farmtech.


- [x] Inseminação;
  > [!SUCCESS] Conteúdo similar ou idêntico ao apresentado em farmtech;

  > [!WARNING] Sistema não realiza exportação de arquivos do usuário logado ou não é capaz de identificar os dados relacionados ao usuário;

  > [!WARNING] inconsistência visual no componente frame que referencia o sistema farmtech.


- [x] Nascimento;
  > [!SUCCESS] Conteúdo similar ou idêntico ao apresentado em farmtech;

  > [!WARNING] Sistema não realiza exportação de arquivos do usuário logado ou não é capaz de identificar os dados relacionados ao usuário;

  > [!WARNING] inconsistência visual no componente frame que referencia o sistema farmtech.


- [x] Previsão de parto;
  > [!SUCCESS] Conteúdo similar ou idêntico ao apresentado em farmtech;

  > [!WARNING] Sistema não realiza exportação de arquivos do usuário logado ou não é capaz de identificar os dados relacionados ao usuário;

  > [!WARNING] inconsistência visual no componente frame que referencia o sistema farmtech.


- [x] Protocolo reprodutivo;
  > [!SUCCESS] Conteúdo similar ou idêntico ao apresentado em farmtech;

  > [!WARNING] Sistema não realiza exportação de arquivos do usuário logado ou não é capaz de identificar os dados relacionados ao usuário;

  > [!WARNING] inconsistência visual no componente frame que referencia o sistema farmtech.

#### SISBOV

> Funcionalidades vinculadas ao controle sanitário e rastreabilidade do rebanho conforme as diretrizes do SISBOV.

- [x] Planilha de identificações;
  > [!SUCCESS] Conteúdo similar ou idêntico ao apresentado em farmtech;

  > [!WARNING] Sistema não realiza exportação de arquivos do usuário logado ou não é capaz de identificar os dados relacionados ao usuário;

- [x] Comunicado de entrada de animais;
  > [!SUCCESS] Conteúdo similar ou idêntico ao apresentado em farmtech;

  > [!WARNING] Sistema não realiza exportação de arquivos do usuário logado ou não é capaz de identificar os dados relacionados ao usuário;

- [x] Comunicado de nascimento de animais;
  > [!SUCCESS] Conteúdo similar ou idêntico ao apresentado em farmtech;

  > [!WARNING] Sistema não realiza exportação de arquivos do usuário logado ou não é capaz de identificar os dados relacionados ao usuário;

- [x] Comunicado de saída de animais;
  > [!SUCCESS] Conteúdo similar ou idêntico ao apresentado em farmtech;

  > [!WARNING] Sistema não realiza exportação de arquivos do usuário logado ou não é capaz de identificar os dados relacionados ao usuário;

- [x] Comunicado de morte de animais;
  > [!SUCCESS] Conteúdo similar ou idêntico ao apresentado em farmtech;

  > [!WARNING] Sistema não realiza exportação de arquivos do usuário logado ou não é capaz de identificar os dados relacionados ao usuário;

- [x] Comunicado de reidentificação;
  > [!WARNING] Não apresenta funcionalidades para exportação de relatório;
  > Conteúdo difere do apresentado em farmtech.

- [x] Dia eletrônico;
  > [!SUCCESS] Conteúdo similar ou idêntico ao apresentado em farmtech;

  > [!WARNING] Sistema não realiza exportação de arquivos do usuário logado ou não é capaz de identificar os dados relacionados ao usuário;


- [x] Solicitação de alteração de animais;
  > [!SUCCESS] Conteúdo similar ou idêntico ao apresentado em farmtech;

  > [!WARNING] Sistema não realiza exportação de arquivos do usuário logado ou não é capaz de identificar os dados relacionados ao usuário;


#### Financeiro

> Gestão financeira voltada às operações do rebanho e da propriedade.

- [x] Compra de animais;
  > [!WARNING] Não apresenta funcionalidades para exportação de relatório;
  > Conteúdo difere do apresentado em farmtech.

- [x] Venda de animais;
  > [!WARNING] Não apresenta funcionalidades para exportação de relatório;
  > Conteúdo difere do apresentado em farmtech.

- [x] Fluxo de caixa;
  > [!WARNING] Não apresenta funcionalidades para exportação de relatório;
  > Conteúdo difere do apresentado em farmtech.

- [x] Consulta de lançamentos;
  > [!SUCCESS] Conteúdo similar ou idêntico ao apresentado em farmtech;

  > [!WARNING] Sistema não realiza exportação de arquivos do usuário logado ou não é capaz de identificar os dados relacionados ao usuário;

  > [!WARNING] inconsistência visual no componente frame que referencia o sistema farmtech.

- [x] Extrato de lançamentos;
  > [!SUCCESS] Conteúdo similar ou idêntico ao apresentado em farmtech;

  > [!WARNING] Sistema não realiza exportação de arquivos do usuário logado ou não é capaz de identificar os dados relacionados ao usuário;

  > [!WARNING] inconsistência visual no componente frame que referencia o sistema farmtech.

- [x] Meta versus realizado;
  > [!SUCCESS] Conteúdo similar ou idêntico ao apresentado em farmtech;

  > [!WARNING] Sistema não realiza exportação de arquivos do usuário logado ou não é capaz de identificar os dados relacionados ao usuário;

  > [!WARNING] inconsistência visual no componente frame que referencia o sistema farmtech.

- [x] Previsão final de caixa;
  > [!SUCCESS] Conteúdo similar ou idêntico ao apresentado em farmtech;

  > [!WARNING] Sistema não realiza exportação de arquivos do usuário logado ou não é capaz de identificar os dados relacionados ao usuário;

  > [!WARNING] inconsistência visual no componente frame que referencia o sistema farmtech.

- [x] Consulta de estoque;
  > [!SUCCESS] Conteúdo similar ou idêntico ao apresentado em farmtech;

  > [!WARNING] Sistema não realiza exportação de arquivos do usuário logado ou não é capaz de identificar os dados relacionados ao usuário;

  > [!WARNING] inconsistência visual no componente frame que referencia o sistema farmtech.

- [x] Análise de custeio;
  > [!SUCCESS] Conteúdo similar ou idêntico ao apresentado em farmtech;

  > [!WARNING] Sistema não realiza exportação de arquivos do usuário logado ou não é capaz de identificar os dados relacionados ao usuário;

  > [!WARNING] inconsistência visual no componente frame que referencia o sistema farmtech.

- [x] Análise financeira;
  > [!SUCCESS] Conteúdo similar ou idêntico ao apresentado em farmtech;

  > [!WARNING] Sistema não realiza exportação de arquivos do usuário logado ou não é capaz de identificar os dados relacionados ao usuário;

  > [!WARNING] inconsistência visual no componente frame que referencia o sistema farmtech.

- [x] Balance (BETA);
> [!SUCCESS] Conteúdo similar ou idêntico ao apresentado em farmtech;

  > [!WARNING] Sistema não realiza exportação de arquivos do usuário logado ou não é capaz de identificar os dados relacionados ao usuário;

  > [!WARNING] inconsistência visual no componente frame que referencia o sistema farmtech.

---

## Main-content (Área de Conteúdo)

> Área dinâmica da interface onde os dados, relatórios e funcionalidades são exibidos. Deve garantir clareza, boa hierarquia de informações e uma disposição visual coerente com cada módulo acessado via sidebar.

---

## Componentes Visuais

> Análise dos elementos gráficos e da identidade visual aplicada ao sistema, considerando padronização, legibilidade e coerência estética.

### Tipografia

- [ ] Fontes padronizadas em todo o sistema;
- [ ] Tamanhos consistentes (título, subtítulo, texto);
- [ ] Contraste adequado entre texto e fundo;

### Paleta de Cores

- [ ] Cores seguem o manual de identidade visual da marca;
- [ ] Elementos ativos, selecionados ou interativos possuem destaque visual claro;
- [ ] Alertas (sucesso, erro, aviso) são bem diferenciados visualmente;

### Botões e Interatividade

- [ ] Feedback visual para estados (hover, active, disabled);
- [ ] Ícones coerentes com suas funções;
- [ ] Labels dos botões são claros, diretos e objetivos;

---

## Layout e Responsividade

> Avaliação da estrutura adaptativa da interface para diferentes tamanhos e dispositivos.

### Estrutura Geral

- [ ] Layout fluido e responsivo;
- [ ] Ausência de scrolls horizontais desnecessários;
- [ ] Comportamento correto nos principais breakpoints (desktop, tablet, mobile);

### Grid e Alinhamento

- [ ] Componentes corretamente alinhados;
- [ ] Uso consistente de margens, paddings e espaçamentos;
- [ ] Evita sobrecarga visual (informação excessiva numa mesma tela);

---

## Usabilidade e Experiência (UX)

> Análise da navegabilidade, clareza das interações e qualidade do feedback entregue ao usuário.

### Navegação

- [ ] Menus intuitivos e de fácil localização;
- [ ] Itens de maior prioridade recebem destaque;
- [ ] URLs são limpas, amigáveis e refletem corretamente as rotas;

### Feedback de Ações

- [ ] Mensagens claras após ações (sucesso, erro, confirmação);
- [ ] Indicadores de carregamento sempre presentes quando necessário;
- [ ] Validações de formulário visíveis, claras e bem posicionadas;

---

## Acessibilidade (A11Y)

> Avaliação dos critérios mínimos para garantir que o sistema seja utilizável por pessoas com deficiência e que siga as boas práticas universais de acessibilidade.

- [ ] Navegação completa via teclado;
- [ ] Compatibilidade básica com leitores de tela;
- [ ] Imagens, botões e ícones possuem textos alternativos (`alt`) apropriados;
- [ ] Uso correto de semântica HTML (`<button>`, `<nav>`, `<main>`, `<section>`, etc.);

---

## Observações Gerais

> Espaço destinado para apontamentos específicos que não se enquadram nas categorias anteriores, como bugs visuais, incoerências ou sugestões de melhoria.

> [!WARNING] Ao tentar login com diferentes usuários o sistema direciona para o mesmo usuário sempre, todavia foi realizado a validação de login e senha e há a validação de tentativa de acesso.

> [!WARNING] Trechos específicos do sistema apresentam inconsistências visuais como o drop-menu das configurações do usuário (top-bar>profile-btn>drop-menu).

> [!WARNING] Seção faltante em Relatórios > Reprodução: Relatório de Genealogia Animal.

> ![WARNING] Trechos do sistema apresentam log de erro: "Method not found", exemplo em Relatórios > SISBOV > Planilha de Identificação (botão de reload) onde é observado o log de erro: "Method not found: br.com.biox.bovitech.controller.PlanilhaIdentificacaoBean@d8020cb.baixarPlanilhas()"

---

## Conclusão

Este checklist tem como objetivo proporcionar uma visão detalhada e estruturada sobre os pontos fortes, as inconsistências e as oportunidades de melhoria na interface do sistema **berrante-ng**.

Ele serve como base para alinhamento entre as equipes de desenvolvimento, design e gestão, viabilizando tomadas de decisão mais assertivas para evolução do produto.
