package org.otakusf.ejemplos.repositories;

import org.otakusf.ejemplos.models.Examen;

import java.util.Arrays;
import java.util.List;

public class ExamenRepositoryImpl implements ExamenRepository{
    @Override
    public List<Examen> findAll() {
        return Arrays.asList(new Examen(7L,"historia"),
                new Examen(6L,"Lenjuage"),
                new Examen(5L,"Matematicas"));
    }
}
