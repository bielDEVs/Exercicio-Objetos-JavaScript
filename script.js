// Classe base (superclasse)
class Animal {
    constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    }

    fazerSom() {
    console.log(`${this.nome} faz um som.`);
    }
}

  // Classe derivada (subclasse)
class Cachorro extends Animal {
    fazerSom() {
    console.log(`${this.nome} late.`);
    }
}
class Gato extends Animal {
    fazerSom() {
    console.log(`${this.nome} mia.`);
    }
}
const cachorro = new Cachorro('Rex', 5);
const gato = new Gato('Mingau', 3);
const outroCachorro = new Cachorro('Bolt', 2);

// Testando os métodos
cachorro.fazerSom(); // Rex late.
gato.fazerSom(); // Mingau mia.
outroCachorro.fazerSom(); // Bolt late.
