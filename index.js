class Cliente {
    // as variaveis passam a serem chamadas de campos, ou atributos;
    nome;
    cpf;
}
class ContaCorrente {
    agencia;

    // protejendo o atributo da classe
    #saldo = 0;

    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor;
        } // permitido sacar apenas se o valor da conta estiver maior que o valor do saque.
        else {
            console.log('Transação não autorizada')
        }
    };
    // metodo(parametro)
    depositar(valor) {
        if(valor > 0) {
            this.#saldo += valor; //permitindo apenas que deposite valores positivos.
        };
        console.log(this.#saldo) //quando o atributo é privado, só consigo vizualizar ele dentro da classe
    };
}

const cliente1 = new Cliente(); // instanciando ou criando uma instancia do meu obj
cliente1.nome = "Kevin";
cliente1.cpf = 40575854863;

const cliente2 = new Cliente();
cliente2.nome = "Giovanna"
cliente2.cpf = 49723611821;

const contaCorrenteKevin = new ContaCorrente();
contaCorrenteKevin.agencia = 1001;

contaCorrenteKevin.depositar(100)
contaCorrenteKevin.depositar(100)
contaCorrenteKevin.depositar(100)
contaCorrenteKevin.sacar(198)

console.log(contaCorrenteKevin)









