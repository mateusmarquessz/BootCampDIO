public class MSMMessenger {
    public void enviarMensagem(){
        validarConectadoInternet();
        System.out.println("Enviando mensagem");
        salvarHistoricoMensagem();
    }
    public void receberMensagem(){
        System.out.println("Recebendo mensagem");
    }

    private void validarConectadoInternet(){
        System.out.println("Validando se esta conectado");
    }

    private void salvarHistoricoMensagem(){
        System.out.println("Salvando o Historio da mensagem");
    }
}
