/**
* Alterando Validação para funcionar com o $.prompt do JQuery
* Carlos Eduardo | carlosoliveira.df@diariosassociados.com.br
* S/A Correio Braziliense
* Release 21/10/2009
*/

var corObjErro = '#EBEBEB';
var corObjNormal = '#FFFFFF';
var detect = navigator.userAgent.toLowerCase();
var OS,browser,version,thestring, place;

if (checkIt('konqueror'))
{
	browser = "Konqueror";
	OS = "Linux";
}
else if (checkIt('safari')) browser = "Safari"
else if (checkIt('omniweb')) browser = "OmniWeb"
else if (checkIt('opera')) browser = "Opera"
else if (checkIt('webtv')) browser = "WebTV";
else if (checkIt('icab')) browser = "iCab"
else if (checkIt('msie')) browser = "IE"
else if (!checkIt('compatible'))
{
	browser = "Mozilla"
	version = detect.charAt(8);
}
else browser = "An unknown browser";

if (!version) version = detect.charAt(place + thestring.length);

if (!OS)
{
	if (checkIt('linux')) OS = "Linux";
	else if (checkIt('x11')) OS = "Unix";
	else if (checkIt('mac')) OS = "Mac"
	else if (checkIt('win')) OS = "Windows"
	else OS = "an unknown operating system";
}

function checkIt(string)
{
	place = detect.indexOf(string) + 1;
	thestring = string;
	return place;
}

function validar(formulario)
{
	for(var i =0; i < formulario.children; i++){
		
	}
}	      