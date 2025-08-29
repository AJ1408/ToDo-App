package com.ashish.Todo.app.controller;

import com.ashish.Todo.app.model.Todo;
import com.ashish.Todo.app.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/todo")
@CrossOrigin(origins = "http://localhost:5173")
public class Controller {

    @Autowired
    private TodoService service ;

    //Get all todo
    @GetMapping
    public List<Todo> getAll(){
        System.out.println("in get all todo");
        return service.getAllTodo();
    }
    // get todo by id

    @GetMapping("/{id}")
    public Optional<Todo> getById(@PathVariable Integer id){
        return service.getById(id);
    }

    // post create new Customer

    @PostMapping()
    public Todo createTodo(@RequestBody Todo todo){
        return service.createTodo(todo);
    }

    @PutMapping("/{id}")
    public Todo updateTodo( @RequestBody Todo todo,@PathVariable Integer id ){
        return service.updateTodo(todo,id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id){
        service.DeleteTodo(id);
    }
}
