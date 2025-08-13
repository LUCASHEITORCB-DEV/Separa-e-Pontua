import React from 'react';

const MissionsPage = ({ missions, onNavigate }) => {
  const getMissionIcon = (type) => {
    switch (type) {
      case 'game': return '🎮';
      case 'collection': return '♻️';
      case 'project': return '🎨';
      case 'education': return '📚';
      default: return '📋';
    }
  };

  const getMissionTypeColor = (type) => {
    switch (type) {
      case 'game': return 'bg-purple-500';
      case 'collection': return 'bg-green-500';
      case 'project': return 'bg-orange-500';
      case 'education': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusBadge = (mission) => {
    if (mission.completed) {
      if (mission.pending) {
        return (
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
            🕐 Aguardando Aprovação
          </span>
        );
      } else {
        return (
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            ✅ Aprovada
          </span>
        );
      }
    } else {
      return (
        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
          🔄 Em Progresso
        </span>
      );
    }
  };

  const activeMissions = missions.filter(m => !m.completed);
  const completedMissions = missions.filter(m => m.completed);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 p-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 font-game">📋 Minhas Missões</h1>
            <p className="text-gray-600 mt-1">Acompanhe seu progresso nas atividades</p>
          </div>
          <button
            onClick={() => onNavigate('home')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors duration-200"
          >
            ← Voltar
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-500 text-white rounded-xl p-4 text-center">
          <div className="text-3xl font-bold">{missions.length}</div>
          <div className="text-blue-100">Total de Missões</div>
        </div>
        <div className="bg-green-500 text-white rounded-xl p-4 text-center">
          <div className="text-3xl font-bold">{completedMissions.length}</div>
          <div className="text-green-100">Concluídas</div>
        </div>
        <div className="bg-orange-500 text-white rounded-xl p-4 text-center">
          <div className="text-3xl font-bold">{activeMissions.length}</div>
          <div className="text-orange-100">Ativas</div>
        </div>
      </div>

      {/* Active Missions */}
      {activeMissions.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 Missões Ativas</h2>
          <div className="space-y-4">
            {activeMissions.map((mission) => (
              <div key={mission.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 ${getMissionTypeColor(mission.type)} rounded-lg flex items-center justify-center text-white text-xl`}>
                      {getMissionIcon(mission.type)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{mission.title}</h3>
                      <p className="text-gray-600 text-sm">{mission.description}</p>
                    </div>
                  </div>
                  {getStatusBadge(mission)}
                </div>
                
                <div className="mt-3">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progresso</span>
                    <span>{mission.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all duration-300 ${
                        mission.progress >= 100 ? 'bg-green-500' : 
                        mission.progress >= 50 ? 'bg-yellow-500' : 'bg-blue-500'
                      }`}
                      style={{ width: `${mission.progress}%` }}
                    ></div>
                  </div>
                </div>

                {mission.type === 'game' && (
                  <div className="mt-3">
                    <button
                      onClick={() => onNavigate('game')}
                      className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-200"
                    >
                      🎮 Jogar Agora
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Completed Missions */}
      {completedMissions.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🏆 Missões Concluídas</h2>
          <div className="space-y-4">
            {completedMissions.map((mission) => (
              <div key={mission.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 ${getMissionTypeColor(mission.type)} rounded-lg flex items-center justify-center text-white text-xl opacity-75`}>
                      {getMissionIcon(mission.type)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">{mission.title}</h3>
                      <p className="text-gray-500 text-sm">{mission.description}</p>
                    </div>
                  </div>
                  {getStatusBadge(mission)}
                </div>
                
                <div className="mt-3">
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full w-full"></div>
                  </div>
                  <div className="text-right text-sm text-gray-500 mt-1">100% Concluída</div>
                </div>

                {mission.pending && (
                  <div className="mt-3 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <p className="text-yellow-700 text-sm">
                      ⏳ Esta missão está aguardando aprovação do professor. 
                      Você receberá os pontos assim que for aprovada.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mission Types Legend */}
      <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">🏷️ Tipos de Missões</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white">🎮</div>
            <span className="text-gray-700">Mini-jogos</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white">♻️</div>
            <span className="text-gray-700">Coleta Seletiva</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white">🎨</div>
            <span className="text-gray-700">Projetos</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white">📚</div>
            <span className="text-gray-700">Educação</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionsPage;
