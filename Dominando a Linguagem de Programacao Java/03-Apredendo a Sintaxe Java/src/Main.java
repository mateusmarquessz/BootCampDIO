public class Main {
    public static void main(String[] args) {

        SmartTv smartTv = new SmartTv();


        System.out.println("TV ligada? " + smartTv.ligada);
        System.out.println("Canal ATUAL? " + smartTv.canal);
        System.out.println("Volume atual? " + smartTv.volume);

       smartTv.ligar();
        System.out.println("Tv lIGAR" + smartTv.ligada);
    }
}