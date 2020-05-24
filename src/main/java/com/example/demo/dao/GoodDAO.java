package com.example.demo.dao;

import com.example.demo.entity.Good;
import com.example.demo.entity.TrolleyGood;
import com.example.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GoodDAO extends JpaRepository<Good,Integer> {
    List<Good> findAll();
    List<Good> findByGoodId(long goodId);
    //@Query("select g from trolley_good tg inner join good g on tg.trolley_good=g.good_id where tg.trolley_user= ?1 ")
    //List<Good> getTrolley(String user);
}
