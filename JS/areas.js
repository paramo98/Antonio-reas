function rectangulo(){
    let rectanguloBase=document.getElementById('rectangulo-base').value;
    let rectanguloAltura=document.getElementById('rectangulo-altura').value;
    document.getElementById('resultado-rectangulo').innerHTML = (rectanguloBase*rectanguloAltura);
  }

function triangulo(){
    let trianguloBase=document.getElementById('triangulo-base').value;
    let trianguloAltura=document.getElementById('triangulo-altura').value;
    document.getElementById('resultado-triangulo').innerHTML = ((trianguloBase*trianguloAltura)/2);
  }

function rombo(){
    let romboDiagonalmayor=document.getElementById('rombo-diagonalmayor').value;
    let romboDiagonalmenor=document.getElementById('rombo-diagonalmenor').value;
    document.getElementById('resultado-rombo').innerHTML = ((romboDiagonalmayor*romboDiagonalmenor)/2);
  }

function cuadrado(){
    let cuadradoDiagonal=document.getElementById('cuadrado-diagonal').value;
    document.getElementById('resultado-cuadrado').innerHTML = (cuadradoDiagonal ** 2/2);
  }

function paralelogramo(){
    let paralelogramoBase=document.getElementById('paralelogramo-base').value;
    let paralelogramoAltura=document.getElementById('paralelogramo-altura').value;
    document.getElementById('resultado-paralelogramo').innerHTML = (paralelogramoBase*paralelogramoAltura);
  }

function trapecio(){
    let trapecioBasemayor=document.getElementById('trapecio-basemayor').value;
    let trapecioBasemenor=document.getElementById('trapecio-basemenor').value;
    let trapecioAltura=document.getElementById('trapecio-altura').value;
    document.getElementById('resultado-trapecio').innerHTML = ((trapecioBasemayor*trapecioBasemenor)/2)*trapecioAltura;
  }

function romboide(){
    let romboideDiagonalmayor=document.getElementById('romboide-diagonalmayor').value;
    let romboideDiagonalmenor=document.getElementById('romboide-diagonalmenor').value;
    document.getElementById('resultado-romboide').innerHTML = ((romboideDiagonalmenor*romboideDiagonalmayor)/2);
  }

function poligono(){
    let poligonoPerimetro=document.getElementById('poligono-perimetro').value;
    let poligonoApotema=document.getElementById('poligono-apotema').value;
    document.getElementById('resultado-poligono').innerHTML = ((poligonoPerimetro*poligonoApotema)/2);
  }

function circulo(){
    let circuloRadio=document.getElementById('circulo-radio').value;
    const numeroPi=document.getElementById('pi').value;
    document.getElementById('resultado-circulo').innerHTML = (circuloRadio*numeroPi);
  }