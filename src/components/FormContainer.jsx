import Input from "./Input";
import Textarea from "./Textarea";

export default function FormContainer(props) {
  return (
    <form
      onSubmit={props.submit}
      action="/"
      className="flex flex-col space-y-4 justify-center items-center text-white w-full"
    >
      <Input
        type="text"
        name="title"
        placeholder="Título"
        value={props.inputValue}
        onChange={props.change}
      />
      <Textarea
        name="description"
        placeholder="Descrição"
        value={props.textareaValue}
        onChange={props.change}
      />
      <button
        type="submit"
        className="w-full p-2.5 rounded-md bg-emerald-600 hover:bg-emerald-500"
      >
        {props.btn}
      </button>
    </form>
  );
}
