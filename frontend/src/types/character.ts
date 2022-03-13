export type Character = {
    id: number,
    image: string,
    name: string,
    description: string,
    first_question: string,
    first_question_right_answer: string,
    first_question_wrong_answer: string,
    second_question: string,
    second_question_right_answer: string,
    second_question_wrong_answer: string,
    third_question: string,
    third_question_right_answer: string,
    third_question_wrong_answer: string
}

export type CharacterPage = {
    content: Character[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}