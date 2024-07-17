import create from 'zustand';

interface Question {
    id: number;
    text: string;
    isFavorite: boolean;
}

interface QuestionState {
    questions: Question[];
    addToFav: (id: number) => void;
}

const useQuestion = create<QuestionState>((set) => ({
    questions: [
        { id: 1, text: 'Question 1', isFavorite: false },
        { id: 2, text: 'Question 2', isFavorite: false },
        { id: 3, text: 'Question 3', isFavorite: false },
    ],

    addToFav: (id) => {
        console.log("added")

    },
}));

export default useQuestion;
