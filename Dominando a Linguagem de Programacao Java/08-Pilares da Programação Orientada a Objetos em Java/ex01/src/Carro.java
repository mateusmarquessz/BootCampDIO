public class Carro extends Veiculo {

    public void ligar(){
        confereCombustivel();
        System.out.println("Carro ligado");
    }

    void confereCombustivel(){
        System.out.println("Conferindo Combustivel");
    }
}
