
        const stars = document.querySelectorAll('.star');
        let currentRating = 0; 
    
        function updateStars(rating) {
            stars.forEach(star => {
                if (parseInt(star.getAttribute('data-value')) <= rating) {
                    star.classList.add('filled');
                } else {
                    star.classList.remove('filled');
                }
            });
        }
    
        stars.forEach(star => {
            star.addEventListener('click', function() {
                currentRating = parseInt(this.getAttribute('data-value'));
                updateStars(currentRating);
            });
    
            
            star.addEventListener('mouseover', function() {
                const rating = parseInt(this.getAttribute('data-value'));
                updateStars(rating);
            });
    
        
            star.addEventListener('mouseout', function() {
                updateStars(currentRating);
            });
        });
    
        
        function saveData() {
            const pages = document.getElementById('pages').value;
            const startDate = document.getElementById('start-date').value;
            const endDate = document.getElementById('end-date').value;
            const shelf = document.getElementById('shelf').value;
            const tags = document.getElementById('tags').value;
    
            console.log('Páginas Lidas:', pages);
            console.log('Começou a ler em:', startDate);
            console.log('Terminou de ler em:', endDate);
            console.log('Prateleira:', shelf);
            console.log('Etiquetas:', tags);
            console.log('Avaliação:', currentRating);
    
            alert('Informações salvas com sucesso!');
        }
    
        function openCity(evt, cityName) {
        
            var i, tabcontent, tablinks;
        
        
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
            }
        
        
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
        
            
            document.getElementById(cityName).style.display = "block";
            evt.currentTarget.className += " active";
        }