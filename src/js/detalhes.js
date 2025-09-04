  // Script para alternar entre miniaturas dos detalhes de produtos
  document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.product-thumbnail');
    const mainImage = document.querySelector('.product-image');
    
    thumbnails.forEach(thumb => {
      thumb.addEventListener('click', function() {
        // Remove a classe active de todas as miniaturas
        thumbnails.forEach(t => t.classList.remove('active'));
        
        // Adiciona a classe active à miniatura clicada
        this.classList.add('active');
        
        // Atualiza a imagem principal (em um caso real, trocaria o src)
        // mainImage.src = this.src;
        
        // Feedback visual
        mainImage.style.opacity = '0.7';
        setTimeout(() => {
          mainImage.style.opacity = '1';
        }, 200);
      });
    });
  });