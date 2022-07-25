package org.otakusf.ejemplos.services;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.otakusf.ejemplos.models.Examen;
import org.otakusf.ejemplos.repositories.ExamenRepository;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

class ExamenServiceImplTest {
    ExamenRepository repository;
    ExamenService service;
    PreguntasRepository preguntasRepository;

    @BeforeEach
    void setUp() {
        repository = Mockito.mock(ExamenRepository.class);
        preguntasRepository = Mockito.mock(PreguntasRepository.class);
        service = new ExamenServiceImpl(repository, preguntasRepository);
    }

    @Test
    void buscarExamenPorNombre() {
        List<Examen> datos = Arrays.asList(new Examen(7L, "historia"),
                new Examen(6L, "Lenjuage"),
                new Examen(5L, "Matematicas"));

        Mockito.when(repository.findAll()).thenReturn(datos);
        Optional<Examen> examen = service.buscarExamenPorNombre("Matematicas");
        assertTrue(examen.isPresent());
        assertEquals(5L, examen.orElseThrow().getId());
        assertEquals("Matematicas", examen.orElseThrow().getNombre());
    }

    @Test
    void buscarExamenPorNombreListavacia() {
        List<Examen> datos = Collections.emptyList();
        Mockito.when(repository.findAll()).thenReturn(datos);
        Optional<Examen> examen = service.buscarExamenPorNombre("Matematicas");
        assertFalse(examen.isPresent());
    }
}