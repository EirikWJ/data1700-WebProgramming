package webprog.oblig2.filmtickets;

public class Order {
    private String Film;
    private Integer Amount;
    private String FirstName;
    private String LastName;
    private Integer PhoneNum;
    private String Email;
    private Integer ID;
    public Order() {}//extra constructor. DO NOT USE
    public Order(String Film, Integer Amount, String FirstName, String LastName, Integer PhoneNum, String Email, Integer ID){
        this.Film = Film;
        this.Amount = Amount;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.PhoneNum = PhoneNum;
        this.Email = Email;
        this.ID = ID;
    }
    public void setID(Integer ID){
        this.ID = ID;
    }
    public Integer getID(){
        return this.ID;
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
                ", ID='"+ID+
                '}';
    }
}
