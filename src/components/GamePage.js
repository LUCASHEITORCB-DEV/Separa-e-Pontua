import React, { useState, useEffect, useRef } from 'react';

const GamePage = ({ onUpdatePoints, onNavigate, onCompleteMission }) => {
  const [gameState, setGameState] = useState('menu'); // 'menu', 'playing', 'gameOver'
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [currentItem, setCurrentItem] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameItems, setGameItems] = useState([]);
  const gameLoopRef = useRef(null);
  const timerRef = useRef(null);

  // Itens do jogo com suas categorias corretas
  const items = [
    { id: 1, name: 'Garrafa PET', category: 'plastic', emoji: '🍼', color: 'text-red-500' },
    { id: 2, name: 'Jornal', category: 'paper', emoji: '📰', color: 'text-blue-500' },
    { id: 3, name: 'Lata de Alumínio', category: 'metal', emoji: '🥤', color: 'text-yellow-500' },
    { id: 4, name: 'Pote de Vidro', category: 'glass', emoji: '🍯', color: 'text-green-500' },
    { id: 5, name: 'Revista', category: 'paper', emoji: '📖', color: 'text-blue-500' },
    { id: 6, name: 'Sacola Plástica', category: 'plastic', emoji: '🛍️', color: 'text-red-500' },
    { id: 7, name: 'Garrafa de Vidro', category: 'glass', emoji: '🍾', color: 'text-green-500' },
    { id: 8, name: 'Tampa de Metal', category: 'metal', emoji: '🔘', color: 'text-yellow-500' }
  ];

  const categories = {
    plastic: { name: 'Plástico', color: 'bg-red-500', emoji: '🔴' },
    paper: { name: 'Papel', color: 'bg-blue-500', emoji: '🔵' },
    metal: { name: 'Metal', color: 'bg-yellow-500', emoji: '🟡' },
    glass: { name: 'Vidro', color: 'bg-green-500', emoji: '🟢' }
  };

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setLives(3);
    setTimeLeft(30);
    generateNewItem();
    
    // Timer do jogo
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          endGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const generateNewItem = () => {
    const randomItem = items[Math.floor(Math.random() * items.length)];
    setCurrentItem(randomItem);
  };

  const handleCategoryClick = (category) => {
    if (!currentItem || gameState !== 'playing') return;

    if (currentItem.category === category) {
      // Resposta correta
      setScore(prev => prev + 10);
      generateNewItem();
      
      // Verificar se completou a missão (500 pontos)
      if (score + 10 >= 500) {
        onCompleteMission(2); // ID da missão do jogo
      }
    } else {
      // Resposta incorreta
      setLives(prev => {
        const newLives = prev - 1;
        if (newLives <= 0) {
          endGame();
        }
        return newLives;
      });
      generateNewItem();
    }
  };

  const endGame = () => {
    setGameState('gameOver');
    clearInterval(timerRef.current);
    
    // Adicionar pontos ao usuário
    onUpdatePoints(score);
  };

  const resetGame = () => {
    setGameState('menu');
    setScore(0);
    setLives(3);
    setTimeLeft(30);
    setCurrentItem(null);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  if (gameState === 'menu') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center p-6">
        <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="text-6xl mb-4">🎮</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4 font-game">Separa e Recicla</h1>
          <p className="text-gray-600 mb-6">
            Ajude a separar corretamente os materiais recicláveis! 
            Clique na lixeira certa para cada item.
          </p>
          
          <div className="bg-gray-100 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Como Jogar:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Observe o item que aparece</li>
              <li>• Clique na lixeira correta</li>
              <li>• Ganhe 10 pontos por acerto</li>
              <li>• Você tem 3 vidas e 30 segundos</li>
            </ul>
          </div>

          <button
            onClick={startGame}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transform hover:scale-105 transition-all duration-200 mb-4"
          >
            🚀 Começar Jogo
          </button>

          <button
            onClick={() => onNavigate('home')}
            className="block w-full bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg transition-colors duration-200"
          >
            ← Voltar ao Início
          </button>
        </div>
      </div>
    );
  }

  if (gameState === 'playing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 p-6">
        {/* Header do Jogo */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="text-lg font-semibold">
                🏆 Pontos: <span className="text-green-600">{score}</span>
              </div>
              <div className="text-lg font-semibold">
                ❤️ Vidas: <span className="text-red-600">{lives}</span>
              </div>
              <div className="text-lg font-semibold">
                ⏰ Tempo: <span className="text-blue-600">{timeLeft}s</span>
              </div>
            </div>
            <button
              onClick={() => onNavigate('home')}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Sair
            </button>
          </div>
        </div>

        {/* Item Atual */}
        {currentItem && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Onde descartar este item?</h2>
            <div className="text-8xl mb-4">{currentItem.emoji}</div>
            <h3 className={`text-2xl font-bold ${currentItem.color} font-game`}>
              {currentItem.name}
            </h3>
          </div>
        )}

        {/* Lixeiras */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => handleCategoryClick(key)}
              className={`${category.color} hover:opacity-80 text-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 drop-zone`}
            >
              <div className="text-4xl mb-2">{category.emoji}</div>
              <div className="text-lg font-bold">{category.name}</div>
            </button>
          ))}
        </div>

        {/* Progresso da Missão */}
        <div className="bg-white rounded-xl shadow-lg p-4 mt-6">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Progresso da Missão (500 pontos)</span>
            <span>{Math.min(score, 500)}/500</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${Math.min((score / 500) * 100, 100)}%` }}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'gameOver') {
    const finalMessage = score >= 500 ? 
      "🎉 Parabéns! Você completou a missão!" : 
      score >= 200 ? "👍 Muito bem! Continue praticando!" : 
      "💪 Não desista! Tente novamente!";

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center p-6">
        <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="text-6xl mb-4">
            {score >= 500 ? "🏆" : score >= 200 ? "🎯" : "💪"}
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4 font-game">Fim de Jogo!</h1>
          
          <div className="bg-gray-100 rounded-lg p-6 mb-6">
            <div className="text-3xl font-bold text-green-600 mb-2">{score} pontos</div>
            <p className="text-gray-600 mb-4">{finalMessage}</p>
            
            {score >= 500 && (
              <div className="bg-green-100 border border-green-300 rounded-lg p-3">
                <p className="text-green-700 font-semibold">✅ Missão "Jogo Separa e Recicla" Concluída!</p>
              </div>
            )}
          </div>

          <div className="space-y-3">
            <button
              onClick={startGame}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-200"
            >
              🔄 Jogar Novamente
            </button>
            
            <button
              onClick={() => onNavigate('home')}
              className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-3 rounded-lg transition-colors duration-200"
            >
              🏠 Voltar ao Início
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default GamePage;
