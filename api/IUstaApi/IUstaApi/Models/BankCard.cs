namespace IUstaApi.Models;

public class BankCard
{
    public string Id { get; set; }
    public string Digits { get; set; }
    public int CVV { get; set; }
    public DateTime ExpireDate { get; set; }
}