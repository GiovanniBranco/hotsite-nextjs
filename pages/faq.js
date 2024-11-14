import Link from "../src/components/Link";
import FaqService from "../src/services/faqService";

export async function getStaticProps() {
  const questions = await FaqService.getQuestions();

  return {
    props: {
      questions,
    },
  };
}

export default function FAQPage(props) {
  return (
    <div>
      <h1>Alura Cases - Páginas de Perguntas FAQ</h1>

      <ul>
        {props.questions.map((question, index) => (
          <li key={index}>
            <h2>{question.question}</h2>
            <p>{question.answer}</p>
          </li>
        ))}
      </ul>

      <Link href="/">Ir para a home</Link>
    </div>
  );
}
