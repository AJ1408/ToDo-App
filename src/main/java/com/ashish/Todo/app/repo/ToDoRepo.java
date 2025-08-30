package com.ashish.Todo.app.repo;

//import com.ashish.Todo.app.model.Model;
import com.ashish.Todo.app.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ToDoRepo extends JpaRepository<Todo,Integer> {

}
