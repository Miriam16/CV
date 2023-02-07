function verdatos(){
 document.getElementById('div_datospersonales').style.display = 'flex'; 
}
function noverdatos(){
    document.getElementById('div_datospersonales').style.display = 'none';  
}

function vereducacion(){
    document.getElementById('div_educacion').style.display = 'flex'; 
   }
function novereducacion(){
    document.getElementById('div_educacion').style.display = 'none';  
}

function verexperiencia(){
    document.getElementById('div_experiencia').style.display = 'flex'; 
   }
function noverexperiencia(){
    document.getElementById('div_experiencia').style.display = 'none';  
}
window.onload = function () {
   
      document.getElementById('datospersonales').addEventListener('mouseover', verdatos)
      document.getElementById('datospersonales').addEventListener('mouseout', noverdatos)

      document.getElementById('educacion').addEventListener('mouseover', vereducacion)
      document.getElementById('educacion').addEventListener('mouseout', novereducacion)

      document.getElementById('experiencia').addEventListener('mouseover', verexperiencia)
      document.getElementById('experiencia').addEventListener('mouseout', noverexperiencia)
}