const answerToQuestion = "Sure.";
const answerToShoutingQuestion = "Calm down, I know what I'm doing!";
const anwerToShout = "Whoa, chill out!";
const answerToSilence = "Fine. Be that way!";
const defaultAnswer = "Whatever.";

export function hey(message: string): string {
  const cleanedMessage = message.trim();
  if (cleanedMessage === "") {
    return answerToSilence;
  }

  const isQuestion = cleanedMessage.endsWith("?");
  const isShouting = /^(?=[^a-z]*[A-Z])[^a-z]*$/.test(cleanedMessage);

  if (isShouting && isQuestion) {
    return answerToShoutingQuestion;
  }
  if (isShouting) {
    return anwerToShout;
  }
  if (isQuestion) {
    return answerToQuestion;
  }
  return defaultAnswer;
}