package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Order {

  private long orderId;
  private String orderBuyerName;
  private long orderGoodId;
  private String createTime;
  private String orderNote;

  @Id
  public long getOrderId() {
    return orderId;
  }

  public void setOrderId(long orderId) {
    this.orderId = orderId;
  }


  public String getOrderBuyerName() {
    return orderBuyerName;
  }

  public void setOrderBuyerName(String orderBuyerName) {
    this.orderBuyerName = orderBuyerName;
  }


  public long getOrderGoodId() {
    return orderGoodId;
  }

  public void setOrderGoodId(long orderGoodId) {
    this.orderGoodId = orderGoodId;
  }


  public String getCreateTime() {
    return createTime;
  }

  public void setCreateTime(String createTime) {
    this.createTime = createTime;
  }


  public String getOrderNote() {
    return orderNote;
  }

  public void setOrderNote(String orderNote) {
    this.orderNote = orderNote;
  }

}
