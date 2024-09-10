let myFirstDiv = document.createElement('div');
let myFirstDivLeft = document.createElement('div');
let myFirstDivLeft2 = document.createElement('div');
let myFirstDiv2 = document.createElement('div');

let myFirstDiv3 = document.createElement('div');
let myFirstDivLeft3 = document.createElement('div');


myFirstDiv.setAttribute('style','width: 500px; height: 300px; border-radius: 50px; margin-left: 70px; border: 3px solid #444; background-color: blueviolet; font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;text-align: center; padding-top: 30px;');
myFirstDivLeft.setAttribute('style','width: 200px; height: 200px;overflow: hidden; border-radius: 100%;  background-color: #111; font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;text-align: center; margin-left: 600px;margin-top: -250px; ');
myFirstDivLeft2.setAttribute('style','width: 200px; height: 200px;overflow: hidden; border-radius: 100%;  background-color: #111; font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;text-align: center; margin-left: 600px;margin-top: 200px; ');
myFirstDiv2.setAttribute('style','width: 500px; height: 300px; border-radius: 50px; margin-left: 800px; margin-top: -250px; border: 3px solid #444; background-color: chocolate; font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;text-align: center; padding-top: 30px;');
myFirstDiv3.setAttribute('style','width: 500px; height: 300px; border-radius: 50px; margin-left: 70px; border: 3px solid #444; background-color: #000; font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;text-align: center; padding-top: 30px;');
myFirstDivLeft3.setAttribute('style','width: 200px; height: 200px;overflow: hidden; border-radius: 100%;  background-color: #111; font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;text-align: center; margin-left: 600px;margin-top: -250px; ');

myFirstDiv.innerHTML = '<b style="color: white; font-size: 20px;">Linda Dowson</b> <p style="color: white; font-size: 20px;">While we were not the first home cleaning company in the UK, we take pride in being market.</p> <button  class="hoverDiv" style="width: 150px; height: 50px;border-radius: 50px;border: 0;margin-top: 50px; font-weight: 700; color: white; padding-top: -40px;" >READ MORE</button>';
myFirstDivLeft.innerHTML = '<img style="margin-left: -10px;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrNUmVMxXcWK7Ti2YukTrHE-Cp9VSglqzhfQ&s" alt="">';
myFirstDivLeft2.innerHTML = '<img style="margin-left: -10px;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrNUmVMxXcWK7Ti2YukTrHE-Cp9VSglqzhfQ&s" alt="">';
myFirstDiv2.innerHTML = '<b style="color: white; font-size: 20px;">Pitter Jhonson</b> <p style="color: white; font-size: 20px;">While we were not the first home cleaning company in the UK, we take pride in being market.</p> <button  class="hoverDiv" style="width: 150px; height: 50px;border-radius: 50px;border: 0;margin-top: 50px; font-weight: 700; color: white; padding-top: -40px;" >READ MORE</button>';

myFirstDiv3.innerHTML = '<b style="color: white; font-size: 20px;">Mary Larson</b> <p style="color: white; font-size: 20px;">While we were not the first home cleaning company in the UK, we take pride in being market. </p> <button  id="hoverDiv" style="width: 150px; height: 50px;border-radius: 50px;border: 0;margin-top: 50px; font-weight: 700; color: white; padding-top: -40px;" >READ MORE</button>';
myFirstDivLeft3.innerHTML = '<img style="margin-left: -10px;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrNUmVMxXcWK7Ti2YukTrHE-Cp9VSglqzhfQ&s" alt="">';




document.body.appendChild(myFirstDiv);
document.body.appendChild(myFirstDivLeft);
document.body.appendChild(myFirstDivLeft2);
document.body.appendChild(myFirstDiv2);
document.body.appendChild(myFirstDiv3);
document.body.appendChild(myFirstDivLeft3);
let hoverDiv = document.getElementsByClassName('hoverDiv');

        // Elementning boshlang'ich stilini o'rnatamiz
        hoverDiv.style.backgroundColor = 'chocolate';
        hoverDiv.style.color = '#fff'; // Hover qilinganida fon rangi o'zgaradi
        hoverDiv.style.padding = '20px';
        hoverDiv.style.width = '200px';
        hoverDiv.style.textAlign = 'center'; // Sekin-asta o'zgarish effekti

        // "mouseenter" hodisasi uchun stil o'zgarishi
        hoverDiv.addEventListener('mouseenter', () => {
            hoverDiv.style.backgroundColor = 'rgb(151, 149, 149)'; // Hover qilinganida fon rangi o'zgaradi
            hoverDiv.style.color = '#222'; // Hover qilinganida fon rangi o'zgaradi
        });

        // "mouseleave" hodisasi uchun stil o'zgarishi
        hoverDiv.addEventListener('mouseleave', () => {
            hoverDiv.style.backgroundColor = 'chocolate'; // Hoverdan chiqqanda fon rangi tiklanadi
            hoverDiv.style.color = '#fff'; // Hover qilinganida fon rangi o'zgaradi
        });