package com.leonardo.primeiro;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/clientes"})
public class Controlador {
    @Autowired
    ClienteService service;

    //listando o banco
    @GetMapping
    public List<Cliente>listar(){
        return service.listar();
    }

    //adicionando ao banco
    @PostMapping
    public Cliente agregar(@RequestBody Cliente p){
        return service.add(p);
    }
}
