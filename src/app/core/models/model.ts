export interface Question {
  id: number;
  question: string;
  choices: string[];
  answer: string;
}
export interface DetailsResult {
  question: Question;
  userAnswer: string;
  rightAnswer: string;
}
