import React from 'react';

const HomePage = ({ user, missions, onNavigate }) => {
  const completedMissions = missions.filter(mission => mission.completed && !mission.pending);
  const progressPercentage = (completedMissions.length / missions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 p-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-green-600 font-game">🌱 EcoHeroes</h1>
            <p className="text-gray-600 mt-1">Missão Reciclagem</p>
          </div>
          <button
            onClick={() => onNavigate('teacher')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
          >
            👨‍🏫 Painel Professor
          </button>
        </div>
      </div>

      {/* User Profile Card */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center text-2xl">
            🦸‍♂️
          </div>
          <div className="ml-4">
            <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
            <div className="flex items-center space-x-4">
              <span className="text-green-600 font-semibold">Nível {user.level}</span>
              <span className="text-blue-600 font-semibold">{user.points} pontos</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Progresso Geral</span>
            <span>{Math.round(progressPercentage)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Badges */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">🏆 Conquistas</h3>
          <div className="flex flex-wrap gap-2">
            {user.badges.map((badge, index) => (
              <span 
                key={index}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-green-500 text-white rounded-xl p-4 text-center">
          <div className="text-3xl font-bold">{completedMissions.length}</div>
          <div className="text-green-100">Missões Concluídas</div>
        </div>
        <div className="bg-blue-500 text-white rounded-xl p-4 text-center">
          <div className="text-3xl font-bold">{user.points}</div>
          <div className="text-blue-100">Pontos Totais</div>
        </div>
        <div className="bg-purple-500 text-white rounded-xl p-4 text-center">
          <div className="text-3xl font-bold">{user.level}</div>
          <div className="text-purple-100">Nível Atual</div>
        </div>
      </div>

      {/* Mission Preview */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">📋 Missões Recentes</h3>
        <div className="space-y-3">
          {missions.slice(0, 3).map((mission) => (
            <div key={mission.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">
                    {mission.type === 'game' ? '🎮' : 
                     mission.type === 'collection' ? '♻️' : 
                     mission.type === 'project' ? '🎨' : '📚'}
                  </span>
                  <h4 className="font-semibold text-gray-800">{mission.title}</h4>
                </div>
                <div className="mt-1">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${mission.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="ml-4">
                {mission.completed ? (
                  mission.pending ? (
                    <span className="text-yellow-500 font-semibold">🕐 Pendente</span>
                  ) : (
                    <span className="text-green-500 font-semibold">✅ Aprovada</span>
                  )
                ) : (
                  <span className="text-gray-500">{mission.progress}%</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={() => onNavigate('game')}
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
        >
          <div className="text-4xl mb-2">🎮</div>
          <h3 className="text-xl font-bold">Jogar Separa e Recicla</h3>
          <p className="text-green-100 mt-1">Teste seus conhecimentos!</p>
        </button>

        <button
          onClick={() => onNavigate('missions')}
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
        >
          <div className="text-4xl mb-2">📋</div>
          <h3 className="text-xl font-bold">Ver Todas as Missões</h3>
          <p className="text-blue-100 mt-1">Acompanhe seu progresso</p>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
