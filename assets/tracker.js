
function hxtrack_base64_encode(decStr) {
  var base64s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  var bits;
  var dual;
  var i = 0;
  var encOut = '';

  while(decStr.length >= i + 3) {
    bits = (decStr.charCodeAt(i++) & 0xff) <<16 |
           (decStr.charCodeAt(i++) & 0xff) <<8 |
            decStr.charCodeAt(i++) & 0xff;

    encOut += base64s.charAt((bits & 0x00fc0000) >>18) +
              base64s.charAt((bits & 0x0003f000) >>12) +
              base64s.charAt((bits & 0x00000fc0) >> 6) +
              base64s.charAt((bits & 0x0000003f));
  }

  if(decStr.length -i > 0 && decStr.length -i < 3) {
    dual = Boolean(decStr.length -i -1);

    bits = ((decStr.charCodeAt(i++) & 0xff) <<16) |
           (dual ? (decStr.charCodeAt(i) & 0xff) <<8 : 0);

    encOut += base64s.charAt((bits & 0x00fc0000) >>18) +
              base64s.charAt((bits & 0x0003f000) >>12) +
              (dual ? base64s.charAt((bits & 0x00000fc0) >>6) : '%3D') +
              '%3D';
  }

  return(encOut);
}
function hxtrack_get_size() {
  try {
    if (screen) return ("&sze=" + screen.width + "x" + screen.height);
  }
  catch (err) { }
  return '';
}
function hxtrack_get_ref() {
  try {
    if (document.referrer) return document.referrer;
    if (!window.opener) return '';
    if (!window.opener.location) return '';
    if (window.opener.location.href) return window.opener.location.href;
    return '';
  }
  catch (err) { }
  return '';
}

(function(){
  if (navigator.cookieEnabled == undefined || navigator.cookieEnabled) {
    var i = new Image();
    
    i.src = 'https://www.hxtrack.com/image.gif?' +  'prm=YWdlbnQ9QVczMDEmcGFnZUNsYXNzPVAmcHJvZHVjdENsYXNzPUdFTiZjcmVhdGl2ZT0yMTEwNzMyNjYwNTcmcGx1Z2luPXllcyZjaGFubmVsPUQmcGFnZT0mYWRjb2RlPVFJVUstRy1MR1AtUEFSSy1BTEwtQUlSUE9SVFBBUktJTkctSEVBRCZwcGNtc2c9QWlycG9ydCtQYXJraW5nJiUzRnBhcmFtMT0mdGFyZ2V0aWQ9YXVkLTM5OTU4MDk3ODkzMSUzQWt3ZC0yNTk3MzU0MCZ0X3BhcmFtMT0mdF9wYXJhbTI9JnRfbmFtZT1wcGNfcGFya19hbGxfd3BfcGVyc29uYWxpc2F0aW9uJnRfc3BsaXQ9c2hvd19vcmlnaW5hbCZ1dG1fc291cmNlPUdvb2dsZSZ1dG1fbWVkaXVtPXBhaWRfc2VhcmNoJnV0bV9jYW1wYWlnbj1RSVVLLUctTEdQLVBBUkstQUxMLUFJUlBPUlRQQVJLSU5HLUhFQUQmbWF0Y2h0eXBlPWUmbmV0d29yaz1nJmRldmljZT1jJmRldmljZW1vZGVsPSZtb2JpbGU9bm90bW9iaWxlJnNvdXJjZT1zZWFyY2gma2V5d29yZD1haXJwb3J0K3BhcmtpbmcmcGxhY2VtZW50PSZ0YXJnZXQ9JnBhcmFtMj0mcmFuZG9tPTE3MTM3MzgzOTA1NTk1NDc0NjYzJmFjZWlkPSZhZHBvc2l0aW9uPTF0MSZhZHdvcmRzX3Byb2R1Y3R0YXJnZXRpZD0mYWR0eXBlPSZta3dpZD1zTjRUUDNEQ2hfZGMmcGNyaWQ9MjExMDczMjY2MDU3JnBrdz1haXJwb3J0K3BhcmtpbmcmcG10PWUmc2xpZD0mcGdyaWQ9MjU2NDIwNTY1MTcmcHRhaWQ9YXVkLTM5OTU4MDk3ODkzMSUzQWt3ZC0yNTk3MzU0MCZfX2h4dF9yZWRpcmVjdGVkPXRydWUmZ2NsaWQ9Q2p3S0NBaUE4Ym5VQlJBLUVpd0FjMGhaazhNckFaS2pIMUROUC1CTmVKSVlZMkY1Qm03dElRSHE2dU94Y29qX2pxUlRoREswTERTWjJob0NfR3NRQXZEX0J3RQ%3D%3D&' +  'ref=' + hxtrack_base64_encode(hxtrack_get_ref()) + hxtrack_get_size();
    
    hxtrack_get_pixel = function() {
      return i;
    }
  }
})();
