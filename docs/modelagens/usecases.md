## 2.3 Casos de uso

Objetivo: mostrar interações entre o usuário e o sistema. É mais técnico.

### **→ Gerar trilha de aprendizado**

- **Ator:** Usuário
- **Pré-condição:** Formulários totalmente preenchidos
- **Fluxo principal:**
    - Usuário acessa o site
    - Usuário preenche o primeiro formulário
    - Sistema armazena os dados do primeiro formulário (Pinia)
    - Usuário preenche o segundo formulário
    - Sistema monta um prompt com as respostas do usuário e envia os dados para a API do ChatGPT
    - Sistema recebe a trilha, estrutura em html e exibe na tela
    - Usuário pode salvar, gerar novamente ou baixar a trilha
    - Se o usuário quiser salvar a trilha, deve criar uma conta ou estar logado

### → Gerar a trilha novamente

- **Ator:** Usuário
- **Pré-condição:** Ter acabado de gerar uma trilha
- **Fluxo principal**
    - Com as informações já fornecidas, o sistema NÃO pede que o usuário insira todas as informações novamente
    - O usuário clica em "gerar novamente” e o prompt será reenviado a API do ChatGPT
    - O sistema exibirá a nova trilha na tela

### → Envio de feedback

- **Ator:** Usuário
- **Pré-condição:** Nenhuma
- **Fluxo principal:**
    - O usuário pode enviar feedback a qualquer momento (quando a trilha é gerada ou dentro do sistema)

### → Visualizar as trilhas de aprendizado

- **Ator:** Usuário
- **Pré-condição:** Estar logado no sistema
- **Fluxo principal:**
    - Usuário já vê as trilhas assim que entra no sistema

### → Editar trilha de aprendizado

- **Ator**: Usuário
- **Pré-condição:** Estar logado no sistema
- **Fluxo principal:**
    - Usuário escolhe na lista de trilhas a que ele quer editar
    - Usuário fornece as novas informações e salva
    

### → Cadastrar-se no sistema

- **Ator:** Usuário
- **Pré-condição:** Nenhuma
- **Fluxo principal:**
    - Usuário gera sua trilha e para que possa salvar, deve clicar em “cadastrar-se”
    - Usuário preenche um formulário breve
    - Usuário é redirecionado para a tela principal do sistema
    

### → Excluir trilha de aprendizado

- **Ator**: Usuário
- **Pré-condição:** Estar logado no sistema
- **Fluxo principal:**
    - Usuário escolhe na lista de trilhas a que ele quer excluir
    - Usuário confirma exclusão
    

### → Fazer login no sistema

- **Ator:** Usuário
- **Pré-condição:** Já ter cadastro no sistema
- **Fluxo principal:**
    - Usuário preenche um formulário breve
    - Usuário é redirecionado para a tela principal do sistema