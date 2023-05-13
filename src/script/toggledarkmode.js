function toggleDarkMode() {
    const body = document.body;
    const logo = document.getElementById('imagem-botao');
    
    if (body.id === 'modo-claro') {
      body.id = 'modo-escuro';
      logo.src = './src/imagens/modo-escuroOP.png'
    } else {
      body.id = 'modo-claro';
      logo.src = './src/imagens/modo-claroOP.png'
    }
  }