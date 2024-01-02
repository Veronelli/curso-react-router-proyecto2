import { useTodos } from "../../hooks/useTodos";
import TodoFormUI from "../../ui/TodoFormUI";

function CreatePage(){
    const {stateUpdaters:{addTodo}} = useTodos();

    return <TodoFormUI buttonLabel="Create" onSubmitButton={addTodo}/>
}

export default CreatePage;