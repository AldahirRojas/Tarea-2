const miInformacion = {
    nombre: "Aldahir Rojas Lancheros",
    edad: 25,
    esDesarrollador: true,
    fechaNacimiento: new Date("1997-08-07"),
    libroFavorito: {
      titulo: "El código Da Vinci",
      autor: "Dan Brown",
      fecha: new Date("2003-03-18"),
      url: "https://www.example.com/libro-davinci",
    },
  };
  

console.log(miInformacion.libroFavorito.titulo);

  // Exportar el objeto para poder utilizarlo en otros archivos
  export default miInformacion;
  