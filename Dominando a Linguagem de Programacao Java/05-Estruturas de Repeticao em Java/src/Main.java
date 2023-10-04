public class Main {
    public static void main(String[] args) {
        for (int i = 1; i<=3; i ++){
            System.out.println(i);
        }

        String alunos [] = {"MATEUS", "JONAS" , "JULIA", "MARCOS"};

        for (int i=0; i<alunos.length; i++){
            System.out.println(alunos[i]);
        }

        for (int i = 1; i<=5; i++){
            if(i == 3)
                break;
            //continue
            System.out.println(i);
        }

            boolean condicao = false;

            while(condicao){
                System.out.println("executou ... ");
            }

        int numero = 1;

        for (int x=1; x<2; x++){
            numero = numero + x;
        }
        System.out.println("O valor de número é: " + numero);
        }
}