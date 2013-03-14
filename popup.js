
function transcode() {
  this.lit = 
  ['\u0410',
   '\u0411',
   '\u0412',
   '\u0413',
   '\u0414',
   '\u0415',
   '\u0401',
   '\u0417',
   '\u0418',
   '\u0419',
   '\u041a',
   '\u041b',
   '\u041c',
   '\u041d',
   '\u041e',
   '\u041f',
   '\u0420',
   '\u0421',
   '\u0422',
   '\u0423',
   '\u0424',
   '\u0425',
   '\u042a',
   '\u042b',
   '\u042c',
   '\u042d',
   '\u0404',
   '\u0406'];
   this.lat = [
    'A',
    'B',
    'V',
    'G',
    'D',
    'E',
    'E',
    'Z',
    'I',
    'Y',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'R',
    'S',
    'T',
    '',
    'F',
    'H',
    '',
    'Y',
    '',
    'E',
    'E',
    'I'];
    this.latin = " qwertyuiop[]asdfghjkl;'zxcvbnm,./"
    this.kirilic = " \u0439\u0446\u0443\u043a\u0435\u043d\u0433\u0448\u0449\u0437\u0445\u044a\u0444\u044b\u0432\u0430\u043f\u0440\u043e\u043b\u0434\u0436\u044d\u044f\u0447\u0441\u043c\u0438\u0442\u044c\u0431\u044e."
    
   this.toru = function(message) {
    var newText = '';
    // alert('toru');
    message = message.toLowerCase();
    for (var i in message) {
      for (var j in this.latin) {
        if (message[i] === this.latin[j]) {
              newText += this.kirilic[j]
            }
          }
        };
      return newText;
    }

    this.toen = function(message) {
      message = message.toLowerCase();
      // alert('toen')
      var newText = '';
      for (var i in message) {
      for (var j in this.kirilic) {
        if (message[i] === this.kirilic[j]) {
              newText += this.latin[j]
            }
          }
        };
      return newText;
    }
}

function isen(text) {
  trans = new transcode();
  var count = 0
  for (var i in text){
    for (var j in trans.latin) {
      if (text[i]===trans.latin[j]) {
        count = 1;
      }; 
    };
  }
  if (count != 0) {
    // alert("To ru");
    return trans.toen(text);
  }
  else {
    // alert("to en")
    return trans.toen(text);
  }
}

// function getSelText(){
//   var txt = '';
//   if (window.getSelection){
//     txt = window.getSelection();
//   }else if (document.getSelection){
//     txt = document.getSelection();
//   }else if (document.selection){
//     txt = document.selection.createRange().text;
//   }
//   alert("Hello");
//   return txt;
// }
// getSelText();

trans = new transcode();
function pasteSelection() {
  chrome.tabs.getSelected(null, function(tab) {
    // alert(tab.text);
    chrome.tabs.sendRequest(tab.id, {method: "getSelection"}, function (response) {
      var text = document.getElementById('text'); 
      // alert(response.data);
      text.innerHTML = response.data;
      // alert('hi');
    });
  });
}
pasteSelection();
function test() {
  alert('test');
}

function translate2ru() {
  var text = document.getElementById('text'); 
  text.value = trans.toru(text.value);
  select(text);
  text.select();
  // alert(text);
}

function translate2en() {
  var text = document.getElementById('text'); 
  text.value = trans.toen(text.value);
  text.select();
  // alert(text);
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('button1').addEventListener('click', translate2ru);
})
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('button2').addEventListener('click', translate2en);
})
// pasteSelection();
// trans.toru('GHBDTN VBH')
// var text = prompt('Input text', 'nothing');
// alert(getSelText());
var myTabUrl;
var newUrl = 'http://google.com'
// chrome.tabs.query({'active': true}, function(tabs) {
//   chrome.tabs.onHighlighted.addListener(function (tab.id){alert('hello there');});
// });
// alert(window.width);
// chrome.tabs.getSelected(null, function(tab) { var myTabUrl = tab.url; var selection = tab.title; alert(selection) });
// alert(myTabUrl);
// var button1 = document.getElementById('button1');
// alert(button1);
// button1.onclick = function() {alert('hi there')};
// isen(text);
// alert(trans.lit[1]);
// alert(trans.lit.\u0410)ns.toir("\u041f\\\\\
