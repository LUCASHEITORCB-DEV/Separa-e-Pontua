# 📱 Guia: Transformando EcoHeroes em APK

## 🚀 Método 1: Usando Capacitor (Ionic)

### Passo 1: Instalar Capacitor
```bash
npm install @capacitor/core @capacitor/cli
npm install @capacitor/android
```

### Passo 2: Inicializar Capacitor
```bash
npx cap init EcoHeroes com.exemplo.ecoheroes
```

### Passo 3: Fazer build da aplicação
```bash
npm run build
```

### Passo 4: Adicionar plataforma Android
```bash
npx cap add android
```

### Passo 5: Copiar arquivos para Android
```bash
npx cap copy android
```

### Passo 6: Abrir no Android Studio
```bash
npx cap open android
```

### Passo 7: Gerar APK no Android Studio
- No Android Studio: Build > Build Bundle(s) / APK(s) > Build APK(s)

---

## 🚀 Método 2: Usando Cordova

### Passo 1: Instalar Cordova globalmente
```bash
npm install -g cordova
```

### Passo 2: Criar projeto Cordova
```bash
cordova create ecoheroes-mobile com.exemplo.ecoheroes EcoHeroes
```

### Passo 3: Copiar arquivos da build
```bash
npm run build
cp -r build/* ecoheroes-mobile/www/
```

### Passo 4: Adicionar plataforma Android
```bash
cd ecoheroes-mobile
cordova platform add android
```

### Passo 5: Gerar APK
```bash
cordova build android --release
```

---

## 🚀 Método 3: PWA (Progressive Web App)

### Vantagens:
- Funciona como app nativo
- Pode ser instalado no celular
- Funciona offline
- Mais simples de implementar

### Implementação:
1. Adicionar Service Worker
2. Criar manifest.json
3. Configurar ícones
4. Usuário instala pelo navegador

---

## 📋 Pré-requisitos para APK:

### Para Capacitor/Cordova:
- ✅ Node.js (já instalado)
- ✅ Android Studio
- ✅ Java Development Kit (JDK)
- ✅ Android SDK

### Instalação do Android Studio:
1. Baixar de: https://developer.android.com/studio
2. Instalar JDK 8 ou superior
3. Configurar variáveis de ambiente ANDROID_HOME
4. Aceitar licenças do SDK

---

## 🎯 Recomendação:

Para o EcoHeroes, recomendo começar com **PWA**, pois:
- ✅ Mais simples de implementar
- ✅ Funciona em todos os dispositivos
- ✅ Pode ser instalado como app
- ✅ Funciona offline
- ✅ Atualizações automáticas

Depois, se precisar de funcionalidades nativas específicas, migrar para Capacitor.
