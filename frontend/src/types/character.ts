export type Character = {
    id: number,
    image: string,
    name: string,
    description: string,
    firstQuestion: string,
    firstQuestionRightAnswer: string,
    firstQuestionWrongtAnswer: string,
    secondQuestion: string,
    secondQuestionRightAnswer: string,
    secondQuestionWrongtAnswer: string,
    thirdQuestion: string,
    thirdQuestionRightAnswer: string,
    thirdQuestionWrongtAnswer: string
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