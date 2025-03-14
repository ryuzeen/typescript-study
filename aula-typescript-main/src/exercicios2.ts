//Interface

// ex 1
interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string; 
  }
  
  
  const meuCarro: Carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2020,
    motor: '1.8' 
  };
  
  
  console.log(meuCarro);

//ex 2
interface Multiplicacao {
    (num1: number, num2: number): number; 
  }
  const multiplicar: Multiplicacao = (num1, num2) => {
    return num1 * num2;
  };
  
  
console.log(multiplicar(2, 3)); 
console.log(multiplicar(5, 10)); 
console.log(multiplicar(-4, 6)); 
console.log(multiplicar(0, 100)); 

//Generics
//ex 3

function inverterArray<T>(arr: T[]): T[] {
    return arr.reverse(); 
  }
  
  
  const numeros = [1, 2, 3, 4, 5];
  const numerosInvertidos = inverterArray(numeros);
  console.log(numerosInvertidos); 
  
  
  const strings = ['a', 'b', 'c', 'd'];
  const stringsInvertidas = inverterArray(strings);
  console.log(stringsInvertidas); 


//ex 4
interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
  }
  
  
  interface Usuario {
    nome: string;
    email: string;
  }
  
  
  class RepositorioUsuario implements Repositorio<Usuario> {
    private usuarios: Usuario[] = []; 
  
    
    salvar(dado: Usuario): void {
      this.usuarios.push(dado);
    }
  
    
    obterTodos(): Usuario[] {
      return this.usuarios;
    }
  }
  
 
  const repositorio = new RepositorioUsuario();
  
  
  repositorio.salvar({ nome: 'Alice', email: 'alice@example.com' });
  repositorio.salvar({ nome: 'Bob', email: 'bob@example.com' });
  
  
  console.log(repositorio.obterTodos());


// Manipulação Avançada de Tipos
//ex 5

type RespostaServidor = string | boolean;


function processarResposta(resposta: RespostaServidor): void {
  if (typeof resposta === 'string') {
    console.log(`Resposta do servidor (string): ${resposta}`);
  } else if (typeof resposta === 'boolean') {
    console.log(`Resposta do servidor (boolean): ${resposta ? 'Sucesso' : 'Falha'}`);
  }
}

processarResposta('Dados recebidos com sucesso!'); 
processarResposta(true); 
processarResposta(false); 


//ex 6

interface Estudante {
    nome: string;
    curso: string;
  }
  
 
  interface Trabalhador {
    empresa: string;
    cargo: string;
  }
  
  
  type EstudanteTrabalhador = Estudante & Trabalhador;
  
  
  const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: 'João Silva',
    curso: 'Engenharia de Software',
    empresa: 'Tech Solutions',
    cargo: 'Desenvolvedor Júnior'
  };
  
 
  console.log(estudanteTrabalhador);
  
  
  
  