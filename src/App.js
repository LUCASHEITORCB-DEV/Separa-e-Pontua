import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import GamePage from './components/GamePage';
import MissionsPage from './components/MissionsPage';
import TeacherDashboard from './components/TeacherDashboard';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentUser, setCurrentUser] = useState({
    id: 1,
    name: 'João Silva',
    level: 5,
    points: 1250,
    badges: ['Reciclador Iniciante', 'Separador Expert', 'Eco-Herói'],
    missionsCompleted: 8
  });

  const [missions, setMissions] = useState([
    {
      id: 1,
      title: 'Separação de Papel',
      description: 'Colete e separe 10 itens de papel durante uma semana',
      progress: 80,
      completed: false,
      type: 'collection',
      pending: false
    },
    {
      id: 2,
      title: 'Jogo Separa e Recicla',
      description: 'Alcance 500 pontos no mini-jogo',
      progress: 60,
      completed: false,
      type: 'game',
      pending: false
    },
    {
      id: 3,
      title: 'Projeto de Upcycling',
      description: 'Crie um objeto útil a partir de materiais recicláveis',
      progress: 100,
      completed: true,
      type: 'project',
      pending: true
    },
    {
      id: 4,
      title: 'Conscientização Ambiental',
      description: 'Ensine 3 pessoas sobre coleta seletiva',
      progress: 33,
      completed: false,
      type: 'education',
      pending: false
    }
  ]);

  const [pendingMissions, setPendingMissions] = useState([]);

  useEffect(() => {
    const pending = missions.filter(mission => mission.completed && mission.pending);
    setPendingMissions(pending);
  }, [missions]);

  const updateUserPoints = (newPoints) => {
    setCurrentUser(prev => ({
      ...prev,
      points: prev.points + newPoints,
      level: Math.floor((prev.points + newPoints) / 250) + 1
    }));
  };

  const completeMission = (missionId) => {
    setMissions(prev => 
      prev.map(mission => 
        mission.id === missionId 
          ? { ...mission, completed: true, progress: 100, pending: true }
          : mission
      )
    );
  };

  const approveMission = (missionId) => {
    setMissions(prev => 
      prev.map(mission => 
        mission.id === missionId 
          ? { ...mission, pending: false }
          : mission
      )
    );
    
    // Adicionar pontos e badges quando aprovado
    updateUserPoints(100);
    
    // Verificar se deve adicionar nova badge
    const completedMissions = missions.filter(m => m.completed && !m.pending).length + 1;
    if (completedMissions % 3 === 0) {
      setCurrentUser(prev => ({
        ...prev,
        badges: [...prev.badges, `Conquista ${completedMissions}`],
        missionsCompleted: completedMissions
      }));
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage 
            user={currentUser}
            missions={missions}
            onNavigate={setCurrentPage}
          />
        );
      case 'game':
        return (
          <GamePage 
            onUpdatePoints={updateUserPoints}
            onNavigate={setCurrentPage}
            onCompleteMission={completeMission}
          />
        );
      case 'missions':
        return (
          <MissionsPage 
            missions={missions}
            onNavigate={setCurrentPage}
          />
        );
      case 'teacher':
        return (
          <TeacherDashboard 
            pendingMissions={pendingMissions}
            onApproveMission={approveMission}
            onNavigate={setCurrentPage}
          />
        );
      default:
        return (
          <HomePage 
            user={currentUser}
            missions={missions}
            onNavigate={setCurrentPage}
          />
        );
    }
  };

  return (
    <div className="App min-h-screen bg-gradient-to-br from-green-100 to-blue-100">
      {renderCurrentPage()}
    </div>
  );
}

export default App;
