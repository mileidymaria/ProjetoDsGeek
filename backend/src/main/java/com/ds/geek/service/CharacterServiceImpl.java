package com.ds.geek.service;

import com.ds.geek.model.Character;
import com.ds.geek.model.dto.CharacterDto;
import com.ds.geek.repository.CharacterRepository;
import com.ds.geek.util.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CharacterServiceImpl implements CharacterService{

    @Autowired
    private CharacterRepository characterRepository;

    @Override
    public Page<CharacterDto> findAll(Pageable pageable){
        return Mapper.toCharacterDtoList(characterRepository.findAll(pageable));
    }

    @Override
    public CharacterDto findById(Long id){
        Optional<Character> result = characterRepository.findById(id);
        if (result.isPresent()){
            return Mapper.toCharacterDto(result.get());
        }
        return null;
    }
}
