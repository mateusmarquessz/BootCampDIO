import java.util.ArrayList;
import java.util.List;

public class ListaTarefas {
   private List<Tarefa> tarefaList;

    public ListaTarefas() {
        this.tarefaList = new ArrayList<>();
    }

    public void adicionarTarefa(String descricao){
        tarefaList.add(new Tarefa(descricao));
    }

    public void removerTarefa(String descricao){
        List<Tarefa> tarefasParaRemover = new ArrayList<>();
        for (Tarefa t : tarefaList){
            if (t.getDescricao().equalsIgnoreCase(descricao)){
                tarefasParaRemover.add(t);
            }
        }
        tarefaList.removeAll(tarefasParaRemover);
    }

    public int obterNumeroTotalTarefas(){
        return tarefaList.size();
    }

    public void obterDescricoesTarefas(){
        System.out.println(tarefaList);
    }

    public static void main(String[] arg){
        ListaTarefas listaTarefas = new ListaTarefas();
        System.out.println("O numero total de elementos na lista e: " + listaTarefas.obterNumeroTotalTarefas());

        for (int i=0; i<10; i++){
            listaTarefas.adicionarTarefa("Tarefa: " + i);
        }
        System.out.println("O numero total de elementos na lista e: " + listaTarefas.obterNumeroTotalTarefas());

        listaTarefas.removerTarefa("Tarefa");

        System.out.println("O numero total de elementos na lista e: " + listaTarefas.obterNumeroTotalTarefas());

        listaTarefas.obterDescricoesTarefas();

    }
}
