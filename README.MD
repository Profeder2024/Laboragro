# 🌱 LaborAGRO - Torre Hidropônica Inteligente

Bem-vindo ao **LaborAGRO**, uma simulação web interativa de uma torre de cultivo hidropônico inteligente. Este projeto permite o monitoramento e gerenciamento virtual de uma torre contendo 30 alfaces em espiral, controlando parâmetros cruciais para a sobrevivência das plantas: Fluxo de Água, pH e TDS (Sólidos Totais Dissolvidos).

## 📖 Sobre o Projeto

O projeto foi desenvolvido para demonstrar o funcionamento de um sistema de automação agrícola. O dashboard recebe dados simulados através de controles interativos (sliders) e reage às variações em tempo real. Se as condições ideais de cultivo não forem atendidas, o sistema ativa alertas visuais (as plantas ficam com aspecto de "doentes") e dispara um alerta sonoro.

## 🚀 Funcionalidades

* **Monitoramento Interativo:** Acompanhe e ajuste o fluxo de água (%), nível de pH e TDS (ppm) através de uma interface intuitiva.
* **Feedback Visual e Sonoro:** Alertas em tempo real indicam se as plantas correm risco.
* **Modo Automático (🤖):** Um sistema de correção inteligente que ajusta sozinho as variáveis quando saem do padrão de segurança.
* **Simulação Dinâmica:** Variações automáticas no fluxo de água ocorrem para simular o comportamento de bombas d'água no mundo real.
* **Acessibilidade:** Botão de **Alto Contraste** para melhorar a legibilidade e acessibilidade visual do painel.
* **Controle de Alarme:** Opção de silenciar os alertas sonoros (🔇).

## 📊 Parâmetros Ideais do Sistema

Para manter as alfaces saudáveis, os medidores devem operar dentro das seguintes faixas:
* **Fluxo de Água:** Igual ou superior a **60%**
* **Nível de pH:** Entre **5.5** e **6.5**
* **TDS (Nutrientes):** Entre **700 ppm** e **1200 ppm**

## 💻 Tecnologias Utilizadas

* **HTML5:** Estrutura semântica da página e controles de input.
* **CSS3:** Estilização da interface, classes dinâmicas de alerta e modo de alto contraste.
* **JavaScript (Vanilla):** Lógica principal da aplicação, renderização matemática das alfaces em espiral, validação de regras de cultivo e simulação de dados.

## 📂 Estrutura de Arquivos

* `index.html` — Arquivo principal contendo a interface.
* `style.css` — Estilos, regras visuais e feedbacks de interface (plantas doentes, alertas, etc).
* `script.js` — Lógica do sistema e rotinas de automação (`setInterval`).
* `README.MD` — Esta documentação.

## 🛠️ Como Executar

1. Clone este repositório em sua máquina:
   ```bash
   git clone [https://github.com/Profeder2024/Laboragro.git](https://github.com/Profeder2024/Laboragro.git)
