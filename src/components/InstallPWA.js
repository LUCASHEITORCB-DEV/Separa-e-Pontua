import React, { useState, useEffect } from 'react';

const InstallPWA = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      // Previne o prompt automático
      e.preventDefault();
      // Salva o evento para usar depois
      setDeferredPrompt(e);
      // Mostra o botão de instalação
      setShowInstallButton(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Mostra o prompt de instalação
    deferredPrompt.prompt();
    
    // Aguarda a escolha do usuário
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('Usuário aceitou instalar o PWA');
    } else {
      console.log('Usuário rejeitou instalar o PWA');
    }
    
    // Limpa o prompt
    setDeferredPrompt(null);
    setShowInstallButton(false);
  };

  if (!showInstallButton) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '1rem',
      right: '1rem',
      backgroundColor: '#10b981',
      color: 'white',
      padding: '1rem',
      borderRadius: '0.5rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      zIndex: 50
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div>
          <div style={{ fontSize: '0.875rem', fontWeight: '600' }}>📱 Instalar EcoHeroes</div>
          <div style={{ fontSize: '0.75rem' }}>Use como aplicativo no seu celular!</div>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={handleInstallClick}
            style={{
              backgroundColor: 'white',
              color: '#10b981',
              padding: '0.25rem 0.75rem',
              borderRadius: '0.25rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              border: 'none',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#f3f4f6'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
          >
            Instalar
          </button>
          <button
            onClick={() => setShowInstallButton(false)}
            style={{
              color: 'white',
              fontSize: '1.125rem',
              border: 'none',
              background: 'none',
              cursor: 'pointer'
            }}
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstallPWA;
