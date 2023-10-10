public class Main {
    public static void main(String[] args) {
        Carro jeep = new Carro();
        jeep.ligar();
        jeep.setChassi("9832983");

        Moto z500 = new Moto();
            z500.setChassi("3123213");
        z500.ligar();
    }
}