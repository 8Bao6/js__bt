document.getElementById("btnKetqua").onclick = function () {
  var nb1 = document.getElementById("nb1").value*1;
  var nb2 = document.getElementById("nb2").value*1;
  var nb3 = document.getElementById("nb3").value*1;
  if (nb1 > nb2 && nb1 > nb3) {
    if (nb2>nb3) {
      kq= nb3 +" "+nb2+" "+nb1;
    }else
    kq = nb2 + "Mid "+nb3+"Max "+nb1;
  }
  if (nb2 > nb1 && nb2>nb3) {
    if (nb1>nb3) {
      kq = nb3+" "+nb1+" "+nb2;
    }else
    kq = nb1+" "+nb3+" "+nb2;
  }
  if (nb3 > nb1 && nb3>nb2) {
    if (nb1 > nb2) {
      kq = nb2+" "+nb1+" "+nb3;
    }else
    kq = nb1+" "+nb2+" "+nb3;
  }
  document.getElementById("infoNumbers").innerHTML=kq;
}
