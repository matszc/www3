$(document).ready(function(){

function scroll(link) {

    let target  = $(this).attr('href');

    link.preventDefault();
    $('.navbar').removeClass('sticky-top');
    $('html, body').animate({
        scrollTop: ($(target).offset().top)
    }, 800);

    $('.navbar').addClass('sticky-top');
}

$('.nav-link').click(scroll);

})
//Game
var passwords = new Array(5);
passwords[0] = "Polak nie kaktus";
passwords[1] = "Kobyła ma mały bok";
passwords[2] = "Wyjątek potwierdza regułę";
passwords[3] = "Dziadek do orzechów";
passwords[4] = "Bileciki do kontroli";

function draw()
{
let draw_number = Math.round(Math.random() * passwords.length);
return passwords[draw_number];
}

var password = draw();
password = password.toUpperCase();

var fails = 0;

var pass_lenght = password.length;
var password1= "";

for (i=0 ;i<pass_lenght;i++)
{
    if (password.charAt(i)== " ")
    {
        password1=password1+" "
        continue;
    }
    password1=password1 + "_";
}


function write_password(){
    document.getElementById("fild").innerHTML = password1;
}
window.onload = start;

var letters = new Array(35);

letters[0] = "A";
letters[1] = "Ą";
letters[2] = "B";
letters[3] = "C";
letters[4] = "Ć";
letters[5] = "D";
letters[6] = "E";
letters[7] = "Ę";
letters[8] = "F";
letters[9] = "G";
letters[10] = "H";
letters[11] = "I";
letters[12] = "J";
letters[13] = "K";
letters[14] = "L";
letters[15] = "Ł";
letters[16] = "M";
letters[17] = "N";
letters[18] = "Ń";
letters[19] = "O";
letters[20] = "Ó";
letters[21] = "P";
letters[22] = "Q";
letters[23] = "R";
letters[24] = "S";
letters[25] = "Ś";
letters[26] = "T";
letters[27] = "U";
letters[28] = "V";
letters[29] = "W";
letters[30] = "X";
letters[31] = "Y";
letters[32] = "Z";
letters[33] = "Ż";
letters[34] = "Ź";





function start(){

    let alphabet_content = "";
    
    for(i=0;i<35;i++){
        let element = "l"+i;
        alphabet_content = alphabet_content + '<div id="'+element+'" onclick="check('+i+')" class="letter"> '+letters[i]+ ' </div>';
        if((i+1)%7 == 0)
        alphabet_content = alphabet_content + '<div style="clear:both"></div>'
    }
    

    document.getElementById("alphabet").innerHTML=alphabet_content;
    

    write_password();
}

String.prototype.changeChar = function(place, mark){
    if(place > this.length - 1){
        return this.toString();
    }
    return this.substr(0, place) + mark + this.substr(place + 1);
}


function check (number){

    let hit = false;

    for (i=0; i<pass_lenght ; i++){
        if(password.charAt(i) == letters[number])
        {
        password1 = password1.changeChar(i,letters[number]);
        hit = true;
        }
    }

    if(hit){
        let element= "l" + number;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = "3px solid #00C000";
		document.getElementById(element).style.cursor = "default";	

        write_password();
    }
    else{
        let element= "l" + number;
        document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.border = "3px solid #C00000";
		document.getElementById(element).style.cursor = "default";	
        document.getElementById(element).setAttribute("onclick",";");
        
        fails++;
        let image = "img/s" + fails + ".jpg";
        document.getElementById("gallows").innerHTML='<img src="'+image+'" alt="" />';

    }

    if(password == password1){
        document.getElementById("alphabet").innerHTML  = "Wygrałeś"+haslo+'<br /><br /><span class="reset" onclick="location.reload()">Zagraj jeszcze raz</span>';
    }
    if (fails>=9)
	document.getElementById("alphabet").innerHTML  = "Przegrana! Prawidłowe hasło: "+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';

}