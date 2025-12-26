import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

type Props = {};

const AddExpenses = (props: Props) => {
  return (
    <div>
      {" "}
      <Button
        className="
      relative
      bg-teal-700 hover:bg-teal-800
      rounded-full
      h-14 w-14 group-hover:w-44
      shadow-xl
      transition-all duration-300 ease-out
      overflow-hidden
    "
      >
        <Plus
          size={36}
          strokeWidth={2.5}
          className="
             size-6!
        absolute top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        h-10 w-10
        transition-all duration-300
        group-hover:left-6
        group-hover:translate-x-0
        group-hover:rotate-90
      "
        />

        <span
          className="
        absolute left-14 top-1/2 -translate-y-1/2
        whitespace-nowrap
        opacity-0 translate-x-3
        group-hover:opacity-100 group-hover:translate-x-0
        transition-all duration-300
      "
        >
          Add expense
        </span>
      </Button>
    </div>
  );
};

export default AddExpenses;
