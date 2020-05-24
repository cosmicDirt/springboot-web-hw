package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Good {

  private long goodId;
  private String goodName;
  private double goodPrice;
  private String goodDescription;
  private long goodSaleVolume;
  private long goodStock;
  private String goodImgLink;

  @Id
  public long getGoodId() {
    return goodId;
  }

  public void setGoodId(long goodId) {
    this.goodId = goodId;
  }


  public String getGoodName() {
    return goodName;
  }

  public void setGoodName(String goodName) {
    this.goodName = goodName;
  }


  public double getGoodPrice() {
    return goodPrice;
  }

  public void setGoodPrice(double goodPrice) {
    this.goodPrice = goodPrice;
  }


  public String getGoodDescription() {
    return goodDescription;
  }

  public void setGoodDescription(String goodDescription) {
    this.goodDescription = goodDescription;
  }


  public long getGoodSaleVolume() {
    return goodSaleVolume;
  }

  public void setGoodSaleVolume(long goodSaleVolume) {
    this.goodSaleVolume = goodSaleVolume;
  }


  public long getGoodStock() {
    return goodStock;
  }

  public void setGoodStock(long goodStock) {
    this.goodStock = goodStock;
  }


  public String getGoodImgLink() {
    return goodImgLink;
  }

  public void setGoodImgLink(String goodImgLink) {
    this.goodImgLink = goodImgLink;
  }

}
