package com.ds.geek.service;

import com.ds.geek.model.dto.CharacterDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CharacterService {
    Page<CharacterDto> findAll(Pageable pageable);

    CharacterDto findById(Long id);
}
