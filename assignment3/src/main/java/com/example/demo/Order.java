package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "Orders")
public class Order {
    @Id
    @GeneratedValue
    private Integer id;
    private String Film;
    private Integer Amount;
    private String FirstName;
    private String LastName;
    private Integer PhoneNum;
    private String Email;

    public Order(Integer id, String Film, Integer Amount, String FirstName, String LastName, Integer PhoneNum, String Email){
        this.id = id;
        this.Film = Film;
        this.Amount = Amount;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.PhoneNum = PhoneNum;
        this.Email = Email;
    }
    public void setId(Integer id){
        this.id = id;
    }
    public Integer getId(){
        return this.id;
    }
    public void setFilm(String Film){
        this.Film = Film;
    }
    public String getFilm(){
        return this.Film;
    }
    public void setAmount(Integer Amount){
        this.Amount = Amount;
    }
    public Integer getAmount(){
        return this.Amount;
    }
    public void setFirstName(String FirstName){
        this.FirstName = FirstName;
    }
    public String getFirstName(){
        return this.FirstName;
    }
    public void setLastName(String LastName){
        this.LastName = LastName;
    }
    public String getLastName(){
        return this.LastName;
    }
    public void setPhoneNum(Integer PhoneNum){
        this.PhoneNum = PhoneNum;
    }
    public Integer getPhoneNum(){
        return this.PhoneNum;
    }
    public void setEmail(String Email){
        this.Email = Email;
    }
    public String getEmail(){
        return this.Email;
    }
    @Override
    public String toString(){
        return "Order{"+
                " Film='"+Film+'\''+
                ", Amount='"+Amount+'\''+
                ", FirstName='"+FirstName+'\''+
                ", LastName='"+LastName+'\''+
                ", PhoneNum='"+PhoneNum+'\''+
                ", Email='"+Email+'\''+
                '}';
    }
}
