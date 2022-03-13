package com.ds.geek.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "tb_character")
public class Character implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String image;
    @Lob
    private String description;
    private String firstQuestion;
    private String firstQuestionRightAnswer;
    private String firstQuestionWrongtAnswer;
    private String secondQuestion;
    private String secondQuestionRightAnswer;
    private String secondQuestionWrongtAnswer;
    private String thirdQuestion;
    private String thirdQuestionRightAnswer;
    private String thirdQuestionWrongtAnswer;

    public Character(
            Long id,
            String name,
            String image,
            String description,
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
        this.image = image;
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

    public Character() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getFirstQuestion() {
        return firstQuestion;
    }

    public void setFirstQuestion(String firstQuestion) {
        this.firstQuestion = firstQuestion;
    }

    public String getFirstQuestionRightAnswer() {
        return firstQuestionRightAnswer;
    }

    public void setFirstQuestionRightAnswer(String firstQuestionRightAnswer) {
        this.firstQuestionRightAnswer = firstQuestionRightAnswer;
    }

    public String getFirstQuestionWrongtAnswer() {
        return firstQuestionWrongtAnswer;
    }

    public void setFirstQuestionWrongtAnswer(String firstQuestionWrongtAnswer) {
        this.firstQuestionWrongtAnswer = firstQuestionWrongtAnswer;
    }

    public String getSecondQuestion() {
        return secondQuestion;
    }

    public void setSecondQuestion(String secondQuestion) {
        this.secondQuestion = secondQuestion;
    }

    public String getSecondQuestionRightAnswer() {
        return secondQuestionRightAnswer;
    }

    public void setSecondQuestionRightAnswer(String secondQuestionRightAnswer) {
        this.secondQuestionRightAnswer = secondQuestionRightAnswer;
    }

    public String getSecondQuestionWrongtAnswer() {
        return secondQuestionWrongtAnswer;
    }

    public void setSecondQuestionWrongtAnswer(String secondQuestionWrongtAnswer) {
        this.secondQuestionWrongtAnswer = secondQuestionWrongtAnswer;
    }

    public String getThirdQuestion() {
        return thirdQuestion;
    }

    public void setThirdQuestion(String thirdQuestion) {
        this.thirdQuestion = thirdQuestion;
    }

    public String getThirdQuestionRightAnswer() {
        return thirdQuestionRightAnswer;
    }

    public void setThirdQuestionRightAnswer(String thirdQuestionRightAnswer) {
        this.thirdQuestionRightAnswer = thirdQuestionRightAnswer;
    }

    public String getThirdQuestionWrongtAnswer() {
        return thirdQuestionWrongtAnswer;
    }

    public void setThirdQuestionWrongtAnswer(String thirdQuestionWrongtAnswer) {
        this.thirdQuestionWrongtAnswer = thirdQuestionWrongtAnswer;
    }
}
