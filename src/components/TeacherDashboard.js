import React, { useState } from 'react';

const TeacherDashboard = ({ pendingMissions, onApproveMission, onNavigate }) => {
  const [selectedMission, setSelectedMission] = useState(null);
  const [showApprovalModal, setShowApprovalModal] = useState(false);

  const handleApproveMission = (missionId) => {
    onApproveMission(missionId);
    setShowApprovalModal(false);
    setSelectedMission(null);
  };

  const openApprovalModal = (mission) => {
    setSelectedMission(mission);
    setShowApprovalModal(true);
  };

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-blue-600 font-game">👨‍🏫 Painel do Professor</h1>
            <p className="text-gray-600 mt-1">Gerencie e aprove as missões dos alunos</p>
          </div>
          <button
            onClick={() => onNavigate('home')}
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors duration-200"
          >
            ← Voltar ao App
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-yellow-500 text-white rounded-xl p-4 text-center">
          <div className="text-3xl font-bold">{pendingMissions.length}</div>
          <div className="text-yellow-100">Missões Pendentes</div>
        </div>
        <div className="bg-green-500 text-white rounded-xl p-4 text-center">
          <div className="text-3xl font-bold">12</div>
          <div className="text-green-100">Alunos Ativos</div>
        </div>
        <div className="bg-blue-500 text-white rounded-xl p-4 text-center">
          <div className="text-3xl font-bold">45</div>
          <div className="text-blue-100">Missões Aprovadas</div>
        </div>
      </div>

      {/* Pending Missions */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🕐 Missões Aguardando Aprovação</h2>
        
        {pendingMissions.length === 0 ? (
          <div className="text-center py-8">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Nenhuma missão pendente</h3>
            <p className="text-gray-500">Todas as missões foram aprovadas ou ainda estão em progresso.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {pendingMissions.map((mission) => (
              <div key={mission.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${getMissionTypeColor(mission.type)} rounded-lg flex items-center justify-center text-white text-xl`}>
                      {getMissionIcon(mission.type)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800">{mission.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{mission.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>Aluno: João Silva</span>
                        <span>Concluída em: 12/08/2025</span>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded">100% Completa</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => openApprovalModal(mission)}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
                    >
                      ✅ Aprovar
                    </button>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium">
                      👁️ Revisar
                    </button>
                  </div>
                </div>

                {/* Mission Details */}
                <div className="mt-4 bg-gray-50 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-700 mb-2">Evidências Submetidas:</h4>
                  {mission.type === 'project' && (
                    <div className="text-sm text-gray-600">
                      <p>• Fotos do projeto de upcycling concluído</p>
                      <p>• Descrição dos materiais utilizados</p>
                      <p>• Explicação do processo de criação</p>
                    </div>
                  )}
                  {mission.type === 'collection' && (
                    <div className="text-sm text-gray-600">
                      <p>• 12 itens de papel coletados e fotografados</p>
                      <p>• Registro diário de coleta durante 7 dias</p>
                      <p>• Comprovante de entrega no ponto de coleta</p>
                    </div>
                  )}
                  {mission.type === 'game' && (
                    <div className="text-sm text-gray-600">
                      <p>• Pontuação alcançada: 580 pontos</p>
                      <p>• Meta da missão: 500 pontos</p>
                      <p>• Status: Meta atingida com sucesso</p>
                    </div>
                  )}
                  {mission.type === 'education' && (
                    <div className="text-sm text-gray-600">
                      <p>• Vídeos de conversas educativas</p>
                      <p>• Formulários preenchidos pelas pessoas</p>
                      <p>• Relatório das atividades realizadas</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📈 Atividade Recente</h2>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
            <div className="flex-1">
              <p className="text-gray-800">Missão "Projeto de Upcycling" aprovada para Maria Santos</p>
              <p className="text-gray-500 text-sm">2 horas atrás</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">📝</div>
            <div className="flex-1">
              <p className="text-gray-800">Pedro Lima submeteu evidências para "Coleta de Vidro"</p>
              <p className="text-gray-500 text-sm">4 horas atrás</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm">🎮</div>
            <div className="flex-1">
              <p className="text-gray-800">Ana Costa completou o jogo "Separa e Recicla" com 720 pontos</p>
              <p className="text-gray-500 text-sm">6 horas atrás</p>
            </div>
          </div>
        </div>
      </div>

      {/* Approval Modal */}
      {showApprovalModal && selectedMission && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Aprovar Missão</h3>
            <p className="text-gray-600 mb-6">
              Você tem certeza que deseja aprovar a missão "{selectedMission.title}" do aluno João Silva?
            </p>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-green-800 mb-2">Ao aprovar esta missão:</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• O aluno receberá 100 pontos</li>
                <li>• A missão será marcada como concluída</li>
                <li>• O aluno poderá avançar para próximas missões</li>
                <li>• Uma nova conquista pode ser desbloqueada</li>
              </ul>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => handleApproveMission(selectedMission.id)}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
              >
                ✅ Confirmar Aprovação
              </button>
              <button
                onClick={() => setShowApprovalModal(false)}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tools Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🛠️ Ferramentas do Professor</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200 text-left">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-semibold text-gray-800">Relatórios</h3>
            <p className="text-gray-600 text-sm">Ver estatísticas detalhadas</p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200 text-left">
            <div className="text-2xl mb-2">➕</div>
            <h3 className="font-semibold text-gray-800">Nova Missão</h3>
            <p className="text-gray-600 text-sm">Criar nova atividade</p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200 text-left">
            <div className="text-2xl mb-2">👥</div>
            <h3 className="font-semibold text-gray-800">Gerenciar Alunos</h3>
            <p className="text-gray-600 text-sm">Ver perfis e progressos</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
