import FaqService from "../src/services/faqService";
import FaqScreen from "../src/screens/Faq";

export async function getStaticProps() {
  const questions = await FaqService.getQuestions();

  return {
    props: {
      questions,
    },
  };
}

export default FaqScreen;
