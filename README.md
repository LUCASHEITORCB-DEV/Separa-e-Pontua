# 🌱 EcoHeroes: Missão Reciclagem

Uma aplicação móvel gamificada para conscientizar e educar alunos sobre coleta seletiva e descarte correto de resíduos.

## 📋 Sobre o Projeto

EcoHeroes é uma aplicação educacional voltada para alunos de 12 a 18 anos que utiliza elementos de gamificação para ensinar sobre sustentabilidade e reciclagem. O projeto combina diversão e aprendizado através de missões, mini-jogos e um sistema de recompensas.

## 🎯 Objetivos

- Conscientizar jovens sobre a importância da coleta seletiva
- Ensinar o descarte correto de diferentes tipos de resíduos
- Motivar através de elementos de gamificação
- Facilitar o acompanhamento do progresso pelos professores

## 🚀 Funcionalidades

### Para Alunos
- **Sistema de Pontos e Níveis**: Ganhe pontos completando missões e suba de nível
- **Insígnias e Conquistas**: Desbloqueie badges especiais por suas realizações
- **Mini-jogo "Separa e Recicla"**: Jogo interativo para aprender sobre separação de materiais
- **Missões Diversificadas**: Atividades de coleta, projetos de upcycling e educação ambiental
- **Acompanhamento de Progresso**: Visualize seu desempenho em tempo real

### Para Professores
- **Painel de Controle**: Interface para gerenciar e aprovar missões
- **Validação de Atividades**: Aprovação de tarefas submetidas pelos alunos
- **Relatórios de Progresso**: Acompanhe o desenvolvimento de cada estudante
- **Gestão de Turmas**: Organize e monitore múltiplos alunos

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React.js
- **Estilização**: Tailwind CSS
- **Gestão de Estado**: React Hooks (useState, useEffect, useRef)
- **Animações**: CSS Transitions e Tailwind utilities

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── HomePage.js          # Tela inicial com perfil e visão geral
│   ├── GamePage.js          # Mini-jogo "Separa e Recicla"
│   ├── MissionsPage.js      # Lista de missões do usuário
│   └── TeacherDashboard.js  # Painel de controle do professor
├── App.js                   # Componente principal com roteamento
├── index.css               # Estilos globais e configurações do Tailwind
└── index.js                # Ponto de entrada da aplicação
```

## 🎮 Mini-jogo: Separa e Recicla

O jogo principal da aplicação onde os alunos aprendem sobre separação de materiais:

- **Objetivo**: Classificar corretamente diferentes tipos de resíduos
- **Mecânica**: Clique na lixeira correta para cada item
- **Sistema de Pontuação**: 10 pontos por acerto
- **Tempo Limite**: 30 segundos por partida
- **Vidas**: 3 tentativas por jogo
- **Progressão**: Missão desbloqueada com 500 pontos

### Categorias de Materiais:
- 🔴 **Plástico**: Garrafas PET, sacolas plásticas
- 🔵 **Papel**: Jornais, revistas, papelão
- 🟡 **Metal**: Latas de alumínio, tampas metálicas
- 🟢 **Vidro**: Garrafas, potes de vidro

## 📊 Sistema de Gamificação

### Pontuação
- Completar missões: 100 pontos
- Jogar mini-jogo: pontos variáveis (baseado no desempenho)
- Aprovação do professor: pontos bonus

### Níveis
- Cada 250 pontos = 1 nível
- Níveis desbloqueiam novas missões e conquistas

### Conquistas
- Reciclador Iniciante
- Separador Expert  
- Eco-Herói
- Conquistas específicas por número de missões

## 🎯 Tipos de Missões

### 🎮 Mini-jogos
Atividades interativas para aprender conceitos de forma divertida

### ♻️ Coleta Seletiva
Missões práticas de coleta e separação de materiais no mundo real

### 🎨 Projetos de Upcycling
Criação de objetos úteis a partir de materiais recicláveis

### 📚 Educação Ambiental
Atividades de conscientização e compartilhamento de conhecimento

## 🚀 Como Executar o Projeto

1. **Instalar dependências**
```bash
npm install
```

2. **Executar em modo de desenvolvimento**
```bash
npm start
```

3. **Acessar a aplicação**
```
http://localhost:3000
```

## 📱 Navegação da Aplicação

### Tela Inicial (HomePage)
- Visualização do perfil do usuário
- Progresso geral e conquistas
- Acesso rápido ao jogo e missões

### Mini-jogo (GamePage)  
- Interface de jogo interativa
- Sistema de pontuação em tempo real
- Feedback visual para acertos e erros

### Missões (MissionsPage)
- Lista completa de missões disponíveis
- Acompanhamento de progresso individual
- Status de aprovação das atividades

### Painel Professor (TeacherDashboard)
- Gestão de missões pendentes
- Aprovação de atividades dos alunos
- Relatórios de atividade recente

## 🎨 Design e UX

- **Cores Principais**: Verde (sustentabilidade), Azul (educação), tons vibrantes
- **Tipografia**: Fonte "game" (Comic Sans MS) para elementos lúdicos
- **Ícones**: Emojis para interface amigável e universal
- **Responsividade**: Design adaptado para dispositivos móveis e desktop
- **Animações**: Transições suaves e feedback visual

## 🔮 Próximos Passos

### Melhorias Planejadas
- [ ] Integração com banco de dados real (Firebase/Supabase)
- [ ] Sistema de autenticação de usuários
- [ ] Funcionalidade de criação de missões pelo professor
- [ ] Mais mini-jogos educativos
- [ ] Sistema de ranking entre alunos
- [ ] Notificações para lembrar de missões

### Recursos Técnicos
- [ ] Testes automatizados
- [ ] PWA (Progressive Web App)
- [ ] Otimização de performance
- [ ] Acessibilidade melhorada

---

**Desenvolvido com 💚 para um futuro mais sustentável** 🌍
