export  class Pokemon {
  constructor(
    idPokemon,
    nombreIngles,
    nombreJapones,
    tipoPokemonPrincipal,
    tipoPokemonSecundaria,
    visualIMG
  ) {
    this.idPokemon = idPokemon;
    this.nombreIngles = nombreIngles;
    this.nombreJapones = nombreJapones;
    this.tipoPokemonPrincipal = tipoPokemonPrincipal;
    this.tipoPokemonSecundaria = tipoPokemonSecundaria;
    this.visualIMG = visualIMG;
  }

  mostrarDetalles() {
    console.log(`ID: ${this.idPokemon}`);
    console.log(`Nombre en inglés: ${this.nombreIngles}`);
    console.log(`Nombre en japonés: ${this.nombreJapones}`);
    console.log(`Tipo principal: ${this.tipoPokemonPrincipal}`);
    console.log(`Tipo secundario: ${this.tipoPokemonSecundaria}`);
    console.log(`Imagen: ${this.visualIMG}`);
  }
}
