package com.leonardo.primeiro;

import java.util.List;
import org.springframework.data.repository.Repository;

public interface ClienteRepositorio extends Repository<Cliente,Integer>{
    List<Cliente>findAll();
    Cliente findOne(int id);
    Cliente save(Cliente p);
    void delete(Cliente p);
}
