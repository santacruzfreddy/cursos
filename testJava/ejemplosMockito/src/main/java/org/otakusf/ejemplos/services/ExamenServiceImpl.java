package org.otakusf.ejemplos.services;

import org.otakusf.ejemplos.models.Examen;
import org.otakusf.ejemplos.repositories.ExamenRepository;

import java.util.List;
import java.util.Optional;

public class ExamenServiceImpl implements ExamenService {
    private ExamenRepository examenRepository;
    private PreguntasRepository preguntasRepository;

    public ExamenServiceImpl(ExamenRepository examenRepository, PreguntasRepository preguntasRepository) {

        this.examenRepository = examenRepository;
        this.preguntasRepository = preguntasRepository;
    }

    @Override
    public Optional<Examen> buscarExamenPorNombre(String nombre) {
        return examenRepository.findAll()
                .stream()
                .filter(eName -> eName.getNombre().equals(nombre))
                .findFirst();
    }

    @Override
    public Examen buscarExamnePorNombreConPreguntas(String nombre) {
        Optional<Examen> examen = buscarExamenPorNombre(nombre);
        Examen examenRespuesta = null;
        if (examen.isPresent()) {
            examenRespuesta = examen.get();
            List<String> preguntas = preguntasRepository.listarPreguntasPorExamenId(examen.orElseThrow().getId());
            if (!preguntas.isEmpty()) {
                examenRespuesta.setPreguntas(preguntas);
            }
        }
        return examenRespuesta;
    }
}
