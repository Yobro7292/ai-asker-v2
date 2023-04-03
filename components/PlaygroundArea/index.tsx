import InputArea from "./InputArea";
import OutputArea from "./OutputArea";

export default function PlaygroundArea() {
  return (
    <div className="col-start-1 col-end-5 lg:col-start-2 lg:col-end-5 flex flex-col justify-between items-center w-full bg-black-low rounded-md p-2">
      <OutputArea />
      <InputArea />
    </div>
  );
}
