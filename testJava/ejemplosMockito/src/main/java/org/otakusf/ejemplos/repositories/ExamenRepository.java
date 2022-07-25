package org.otakusf.ejemplos.repositories;

import org.otakusf.ejemplos.models.Examen;

import java.util.List;

public interface ExamenRepository {
    public List<Examen> findAll();
}
