package com.leonardo.primeiro;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClienteServiceImp  implements ClienteService{
    @Autowired
    private ClienteRepositorio repositorio;

    @Override
    public List<Cliente> listar() {
        return repositorio.findAll();
    }

    @Override
    public Cliente listarId(int id) {
        return null;
    }

    @Override
    public Cliente add(Cliente p) {

        return repositorio.save(p);
    }

    @Override
    public Cliente edit(Cliente p) {
        return null;
    }

    @Override
    public Cliente delete(int id) {
        return null;
    }
}
