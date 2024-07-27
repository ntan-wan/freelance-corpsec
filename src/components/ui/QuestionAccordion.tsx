import { CustomAccordion } from "@/components/ui/CustomAccordion";

interface IAnswer {
  content: string;
  label?: string;
  points?: string[];
}

interface IProps {
  question: string;
  ans: IAnswer;
}

export function QuestionAccordion({ question, ans }: IProps) {
  const renderView = (ans: IAnswer) => {
    if (ans.points?.length) {
      return (
        <>
          <p className="c-text-gray">{ans.label}</p>
          <ul className="mt-2 c-text-gray list-disc pl-4">
            {ans.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </>
      );
    } else {
      return <p className="c-text-gray">{ans.content}</p>;
    }
  };

  return <CustomAccordion title={question}>{renderView(ans)}</CustomAccordion>;
}
