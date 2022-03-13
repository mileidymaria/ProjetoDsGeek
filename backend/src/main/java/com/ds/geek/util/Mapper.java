package com.ds.geek.util;

import com.ds.geek.model.Character;
import com.ds.geek.model.dto.CharacterDto;

public class Mapper {

    public static CharacterDto toCharacterDto (Character character){
        return new CharacterDto(
                character.getId(),
                character.getName(),
                character.getDescription(),
                character.getImage(),
                character.getFirstQuestion(),
                character.getFirstQuestionRightAnswer(),
                character.getFirstQuestionWrongtAnswer(),
                character.getSecondQuestion(),
                character.getSecondQuestionRightAnswer(),
                character.getSecondQuestionWrongtAnswer(),
                character.getThirdQuestion(),
                character.getThirdQuestionRightAnswer(),
                character.getThirdQuestionWrongtAnswer()
        );
    }
}
