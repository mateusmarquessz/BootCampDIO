public class Main {
    public static void main(String[] args) {

        //condicional simples
                double saldo =25.0;
                double valorSolicitado = 17.0;

                if(valorSolicitado<saldo) {
                    saldo = saldo - valorSolicitado;
                    System.out.println(saldo);
                }

                //Condicional Composta

        int nota = 6;

                if (nota >= 7){
                    System.out.println("Aprovado");
                } else{
                    System.out.println("Reprovado");
                }

                //Condicional encadeada

        int notas = 6;

        if (notas >= 7){
            System.out.println("Aprovado");
        } else if (nota >= 5  && nota <=7) {
            System.out.println("Recuperacao");
        } else{
            System.out.println("Reprovado");
        }

        //Condicao ternaria

        int notaas = 6;

       String resultado = notaas >= 7 ? "Aprovado" : "Reprovado";

        System.out.println("resultado");
    }
}