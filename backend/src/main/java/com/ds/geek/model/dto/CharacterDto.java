package com.ds.geek.model.dto;

public class CharacterDto {
    private Long id;
    private String name;
    private String description;
    private String image;
    private String firstQuestion;
    private String firstQuestionRightAnswer;
    private String firstQuestionWrongtAnswer;
    private String secondQuestion;
    private String secondQuestionRightAnswer;
    private String secondQuestionWrongtAnswer;
    private String thirdQuestion;
    private String thirdQuestionRightAnswer;
    private String thirdQuestionWrongtAnswer;

    public CharacterDto(
            Long id,
            String name,
            String description,
            String image,
            String firstQuestion,
            String firstQuestionRightAnswer,
            String firstQuestionWrongtAnswer,
            String secondQuestion,
            String secondQuestionRightAnswer,
            String secondQuestionWrongtAnswer,
            String thirdQuestion,
            String thirdQuestionRightAnswer,
            String thirdQuestionWrongtAnswer) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.firstQuestion = firstQuestion;
        this.firstQuestionRightAnswer = firstQuestionRightAnswer;
        this.firstQuestionWrongtAnswer = firstQuestionWrongtAnswer;
        this.secondQuestion = secondQuestion;
        this.secondQuestionRightAnswer = secondQuestionRightAnswer;
        this.secondQuestionWrongtAnswer = secondQuestionWrongtAnswer;
        this.thirdQuestion = thirdQuestion;
        this.thirdQuestionRightAnswer = thirdQuestionRightAnswer;
        this.thirdQuestionWrongtAnswer = thirdQuestionWrongtAnswer;
    }

    public CharacterDto() {
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getImage() {
        return image;
    }

    public String getFirstQuestion() {
        return firstQuestion;
    }

    public String getFirstQuestionRightAnswer() {
        return firstQuestionRightAnswer;
    }

    public String getFirstQuestionWrongtAnswer() {
        return firstQuestionWrongtAnswer;
    }

    public String getSecondQuestion() {
        return secondQuestion;
    }

    public String getSecondQuestionRightAnswer() {
        return secondQuestionRightAnswer;
    }

    public String getSecondQuestionWrongtAnswer() {
        return secondQuestionWrongtAnswer;
    }

    public String getThirdQuestion() {
        return thirdQuestion;
    }

    public String getThirdQuestionRightAnswer() {
        return thirdQuestionRightAnswer;
    }

    public String getThirdQuestionWrongtAnswer() {
        return thirdQuestionWrongtAnswer;
    }
}
