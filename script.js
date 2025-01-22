const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let testoMostrato = false; 

function mostraTesto() {
    if (!testoMostrato) {  
        const testo = document.createElement("h3");
        testo.textContent = "PEPPEREPEE";
        testo.style.color = "#FFA500"; 
        testo.style.textAlign = "center";
        
        const testoContainer = document.getElementById("testoContainer"); 
        testoContainer.appendChild(testo);
        
        testoMostrato = true;  
    }
}

function mostraAlert() {
    window.alert("TADAAAA!");
}

function disegnaCanvas() {
  
    ctx.fillStyle = "#32CD32";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#FFA500";
    ctx.fillRect(40, 50, 40, 40); 
    ctx.fillRect(120, 50, 40, 40); 

    ctx.fillStyle = "purple";
    ctx.fillRect(50, 130, 100, 20);
}



 <script>
        function mostraSorpresa() {
            var sorpresa = document.getElementById('sorpresa');  
            sorpresa.style.display = 'block'; 
        }
    </script>
