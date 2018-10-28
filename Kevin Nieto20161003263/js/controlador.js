var loguardado =[];
var canales =[
    {canal: "Seleccione un canal",descripcion:"Lo que el usuario vera de primero"},
    {canal: "Fuera JOH",descripcion:"Canal de videos de marchas"},
    {canal: "Anime Cool",descripcion:"Canal de videos de animes cooool"},
    {canal: "UnSun",descripcion:"Canal de videos Unsun"},
    {canal: "Epica",descripcion:"Canal de videos la banda Epica"},
    {canal: "Queen",descripcion:"Canal de videos la Banda Queen"}
];

(function(){
    for (var i = 0; i < canales.length; i++) {
        document.getElementById("lista-de-canales").innerHTML += 
            `<option value="${canales[i].canal}">${canales[i].canal}</option>`;
    }    
})();

/*Querido Ingeniero si mira algunas cosas  similares 
a los codigos de su repositorio es por que las tome prestadas
 espero no me baje puntos por esto, mire el lado bueno 
 le entendi a sus codigos :)*/
function guardacion(){
    var informacion = {
        titulo:document.getElementById("name").value,
        urlCaratula:document.getElementById("crtl").value,
        canal:document.getElementById("lista-de-canales").value,
        duracion:document.getElementById("dura").value,
        subido:document.getElementById("sbdo").value
    };
    loguardado.push(informacion); //Agregando un nuevo objeto usuario
    console.log(loguardado);

}
