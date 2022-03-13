package com.ds.geek.controller;

import com.ds.geek.model.dto.CharacterDto;
import com.ds.geek.service.CharacterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/characters")
public class CharacterController {

    @Autowired
    private CharacterService characterService;

    @GetMapping
    public Page<CharacterDto> findAll(Pageable pageable){
        return characterService.findAll(pageable);
    }

    @GetMapping(value = "/{id}")
    public CharacterDto findById(@PathVariable Long id){
        return characterService.findById(id);
    }


}
