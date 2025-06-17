# CheckList Berrante-ng

## Análise de Interface - Berrante-ng

O presente documento tem como objetivo formalizar a análise da interface do sistema **Berrante-ng**, desenvolvido em Angular e TypeScript.  
Esta análise se concentra exclusivamente na camada de apresentação (_front-end_), considerando:

- Aspectos visuais
- Estruturais
- Navegação
- Usabilidade
- Acessibilidade
- Aderência às boas práticas de desenvolvimento de interfaces

---

## Metodologia Aplicada

A análise foi realizada por meio de inspeção visual detalhada, utilizando o sistema em ambiente real. Foram avaliados:

- Funcionamento
- Comportamento dos componentes
- Navegação
- Organização da informação
- Conformidade com princípios de design de interface

### Critérios Avaliados

- ✅ Consistência visual  
- ✅ Organização estrutural e hierarquia dos componentes  
- ✅ Aderência a padrões de design e UX/UI  
- ✅ Feedback visual e operacional ao usuário  
- ✅ Acessibilidade mínima (A11Y)  
- ✅ Responsividade e adaptação para dispositivos diversos  

---

## Top-bar

Seção superior fixa do sistema, oferecendo:

- Perfil do usuário  
- Notificações  
- Logout  
- Atalhos e campo de busca global  

---

## Side-bar (Menu Lateral)

Menu lateral persistente com acesso às funcionalidades principais, estruturado em:

- Categorias
- Subcategorias
- Acesso direto aos módulos operacionais

---

## Relatórios

Submenu dedicado à visualização de dados operacionais, produtivos, zootécnicos e financeiros.

### Produtividade


| Funcionalidade                           | Status   | Observações                   |
| ---------------------------------------- | -------- | ------------------------------|
| Estoque por categoria                    | ⚠️       | ❌ ⚠️                         |
| Estoque por faixa etária                 | ⚠️       | ❌ ⚠️                         |
| Estoque por localidade                   | ⚠️       | ✔️ ❌ ⚠️                      |
| Consulta de animal                       | ✅⚠️     | ✔️ ❌                         |
| Consulta de pesagem                      | ⚠️       | ❌ ⚠️                         |
| Identificações do animal                 | ✅⚠️     | ✔️ ❌                         |
| Consulta por faixa de peso               | ⚠️       | ❌ ⚠️                         |
| Contagem de rebanho                      | ⚠️       | ❌ ⚠️                         |
| Consumo de suplementação                 | ⚠️       | ❌ ⚠️                         |
| Consulta de chuva                        | ✅⚠️     | ✔️ ❌ ⚠️                      |
| Movimentação do rebanho                  | ✅⚠️     | ✔️ ❌ ⚠️                      |

- ✔️ Conteúdo similar ou idêntico ao Farmtech
- ❌ Sem exportação de arquivos por usuário
- ⚠️ Inconsistência visual no frame que referencia o Farmtech

### Reprodução

> Funcionalidades para gestão do ciclo reprodutivo dos animais.

| Funcionalidade           | Status  | Observações |
| ------------------------ | ------- |-------------|
| Gestação                 | ✅⚠️⚠️  | |
| Descarte                 | ✅⚠️⚠️  | |
| Desmame                  | ✅⚠️⚠️  | |
| Diagnóstico de gestação  | ✅⚠️⚠️  | |
| Inseminação              | ✅⚠️⚠️  | |
| Nascimento               | ✅⚠️⚠️  | |
| Previsão de parto        | ✅⚠️⚠️  | |
| Protocolo reprodutivo    | ✅⚠️⚠️  | |


- ✔️ Conteúdo similar ou idêntico ao Farmtech  
- ❌ Sem exportação de arquivos por usuário  
- ⚠️ Inconsistência visual no frame que referencia o Farmtech  


### SISBOV

> Controle sanitário e rastreabilidade do rebanho conforme SISBOV.

| Funcionalidade                      | Status   | Observações                              |
| ------------------------------------ | -------- | ----------------------------------------- |
| Planilha de identificações           | ✅⚠️     | ✔️ Similar ao Farmtech<br>❌ Sem exportação |
| Comunicado de entrada de animais     | ✅⚠️     |                                           |
| Comunicado de nascimento de animais  | ✅⚠️     |                                           |
| Comunicado de saída de animais       | ✅⚠️     |                                           |
| Comunicado de morte de animais       | ✅⚠️     |                                           |
| Comunicado de reidentificação        | ⚠️       | ❌ Sem exportação<br>⚠️ Difere do Farmtech |
| Dia eletrônico                       | ✅⚠️     |                                           |
| Solicitação de alteração de animais  | ✅⚠️     |                                           |


### Financeiro

| Funcionalidade               | Status   | Observações                              |
| ---------------------------- | -------- | ----------------------------------------- |
| Compra de animais            | ⚠️       | ❌ Sem exportação<br>⚠️ Difere do Farmtech |
| Venda de animais             | ⚠️       | ❌ Sem exportação<br>⚠️ Difere do Farmtech |
| Fluxo de caixa               | ⚠️       | ❌ Sem exportação<br>⚠️ Difere do Farmtech |
| Consulta de lançamentos      | ✅⚠️⚠️  | ✔️ Similar ao Farmtech<br>❌ Sem exportação<br>⚠️ Inconsistência frame Farmtech |
| Extrato de lançamentos       | ✅⚠️⚠️  | idem acima                                |
| Meta versus realizado        | ✅⚠️⚠️  | idem acima                                |
| Previsão final de caixa      | ✅⚠️⚠️  | idem acima                                |
| Consulta de estoque          | ✅⚠️⚠️  | idem acima                                |
| Análise de custeio           | ✅⚠️⚠️  | idem acima                                |
| Análise financeira           | ✅⚠️⚠️  | idem acima                                |
| Balance (BETA)               | ✅⚠️⚠️  | idem acima                                |

---

## Legenda

- ✅ Conteúdo similar ou idêntico ao Farmtech  
- ⚠️ Problemas identificados (exportação, inconsistências visuais, ou divergências de conteúdo)  
- ❌ Funcionalidade não implementada ou não operacional (exportação, relatórios, etc.)  

---
