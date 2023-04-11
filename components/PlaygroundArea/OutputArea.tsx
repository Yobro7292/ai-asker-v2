import Typewriter from "typewriter-effect";
import Loader from "../common/Loader/Index";

interface OutputProps {
  output: string;
  thinking: boolean;
}
export default function OutputArea({ output, thinking }: OutputProps) {
  const longStr =
    "As an AI language model, I can't make things physically. But I can provide you the steps on how to make a paper plane.\n\n1. Start with a rectangular piece of paper.\n2. Fold the paper in half lengthwise, crease it, and then unfold it.\n3. Fold down the top corners to meet at the center crease, forming a triangle shape.\n4. Fold the top edges down to the center crease again, creating a smaller triangle shape.\n5. Fold the top triangle down to meet the bottom edge of the paper.\n6. Fold the wings down along the center crease, then fold them up slightly towards the top.\n7. Finally, fold the wings down again to create a flat bottom surface for your plane to rest on.\n\nYour paper plane is now ready to fly. Adjust the angles of the wings and tail to optimize the flight. Happy flying!As an AI language model, I can't make things physically. But I can provide you the steps on how to make a paper plane.\n\n1. Start with a rectangular piece of paper.\n2. Fold the paper in half lengthwise, crease it, and then unfold it.\n3. Fold down the top corners to meet at the center crease, forming a triangle shape.\n4. Fold the top edges down to the center crease again, creating a smaller triangle shape.\n5. Fold the top triangle down to meet the bottom edge of the paper.\n6. Fold the wings down along the center crease, then fold them up slightly towards the top.\n7. Finally, fold the wings down again to create a flat bottom surface for your plane to rest on.\n\nYour paper plane is now ready to fly. Adjust the angles of the wings and tail to optimize the flight. Happy flying!";
  return (
    <div className={`relative w-full h-full bg-black-high overflow-auto`}>
      {thinking ? (
        <Loader />
      ) : (
        <div className="w-full h-full bg-black-high rounded-lg mb-1 py-4 px-4 text-lg text-gray-100 focus:outline-none text-justify whitespace-pre-line overflow-auto">
          {/* <Typewriter
            options={{
              delay: 2,
            }}
            onInit={(typewriter) => {
              typewriter.typeString(longStr).start();
            }}
          /> */}
          {longStr}
        </div>
      )}
    </div>
  );
}
