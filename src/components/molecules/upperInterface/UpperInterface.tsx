import { Button } from "../../ui/button.tsx";

const UpperInterface = () => {
  return (
    <>
      <article className="flex flex-col items-center justify-center gap-4">
        <div>
          <h3>Choose your most visited sites</h3>
        </div>

        <div>
          <div className="bg-[#1a1f26] p-4 rounded-full">
            <p>Icon</p>
          </div>
          <div className="bg-[#1a1f26] px-4 py-1 rounded-lg mt-2"></div>
        </div>

        <div className="flex gap-4">
          <Button>Skip for now</Button>
          <Button>Add shortcuts</Button>
        </div>
      </article>
    </>
  );
};

export default UpperInterface;
