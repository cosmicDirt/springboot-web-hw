package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class TrolleyGood {

  private long trolleyGoodId;
  private String trolleyUser;
  private long trolleyGood;

  @Id
  public long getTrolleyGoodId() {
    return trolleyGoodId;
  }

  public void setTrolleyGoodId(long trolleyGoodId) {
    this.trolleyGoodId = trolleyGoodId;
  }


  public String getTrolleyUser() {
    return trolleyUser;
  }

  public void setTrolleyUser(String trolleyUser) {
    this.trolleyUser = trolleyUser;
  }


  public long getTrolleyGood() {
    return trolleyGood;
  }

  public void setTrolleyGood(long trolleyGood) {
    this.trolleyGood = trolleyGood;
  }

}
