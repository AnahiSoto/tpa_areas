

function Calc() {

    let base = document.getElementById('base').value;
    let height = document.getElementById('height').value;
    let result; 
    
    if (document.getElementById('rdbSquare').checked == true) {
        function areaSquare (base) {
             result = base*base;
            return alert('El resultado es: ' + result);            
         }
         areaSquare(base);
        }    
     
    if (document.getElementById('rdbRectangle').checked == true) {
        function areaRectangle (base, altura) {
             result =base*height;
             return alert('El resultado es: ' + result);
        }         
        areaRectangle(base, height);
    }
    
    if (document.getElementById('rdbTriangle').checked == true) {
      function areaTriangle(base, altura) {
        result = (base*height) / 2;
        return alert('El resultado es: ' + result);    
    }
    areaTriangle(base, height); 
}

function clearForm() {
    document.getElementById("polygon-form").reset();
  }
  clearForm();
}