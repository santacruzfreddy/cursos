package org.otakusf.ejemplos.services;

import java.util.List;

public interface PreguntasRepository {
    List<String> listarPreguntasPorExamenId(Long Id);
}
