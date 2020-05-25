package com.example.demo.dao;

import com.example.demo.entity.Good;
import com.example.demo.entity.TrolleyGood;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Repository
public interface TrolleyGoodDAO extends JpaRepository<TrolleyGood,Integer>
{
    TrolleyGood save(TrolleyGood tg);
    List<TrolleyGood> findByTrolleyUser(String user);
    List<TrolleyGood> deleteByTrolleyUserAndTrolleyGood(String user,long id);
}
