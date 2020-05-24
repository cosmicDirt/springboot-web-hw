package com.example.demo.dao;

import com.example.demo.entity.Good;
import com.example.demo.entity.TrolleyGood;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TrolleyGoodDAO extends JpaRepository<TrolleyGood,Integer>
{
    TrolleyGood save(TrolleyGood tg);
    List<TrolleyGood> findByTrolleyUser(String user);
}
