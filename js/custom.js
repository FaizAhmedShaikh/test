function openCity(e, t) {
    var a, l, n;
    for (l = document.getElementsByClassName("tabcontent"), a = 0; a < l.length; a++) l[a].style.display = "none";
    for (n = document.getElementsByClassName("tablinks"), a = 0; a < n.length; a++) n[a].className = n[a].className.replace(" active", "");
    document.getElementById(t).style.display = "block", e.currentTarget.className += " active"
}