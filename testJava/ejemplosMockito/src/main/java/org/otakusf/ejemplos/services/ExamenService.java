package org.otakusf.ejemplos.services;

import org.otakusf.ejemplos.models.Examen;

import java.util.Optional;

public interface ExamenService {
    public Optional<Examen> buscarExamenPorNombre(String nombre);
    public Examen buscarExamnePorNombreConPreguntas(String nombre);
}
