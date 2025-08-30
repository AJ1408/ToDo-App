package com.ashish.Todo.app.service;

import com.ashish.Todo.app.model.Todo;
import com.ashish.Todo.app.repo.ToDoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TodoService {
    @Autowired
    private ToDoRepo repo ;

    public List<Todo> getAllTodo(){
        return repo.findAll();
    }

    public Optional<Todo> getById(int id){
        return repo.findById(id);
    }

    public Todo createTodo(Todo todo){
        return repo.save(todo);
    }

    public void DeleteTodo(int id){
        if(repo.existsById(id)){
            repo.deleteById(id);
        }
    }
    public Todo updateTodo(Todo todo ,int id){
        List<Todo> allTodos =repo.findAll();
        for(Todo todo1 : allTodos){
            if(todo1.getId() == id){
                todo1.setTodo((todo.getTodo()));
                todo1.setCompleted(todo.getCompleted());
                return repo.save(todo1);
            }
        }
        return  null;
    }
}
