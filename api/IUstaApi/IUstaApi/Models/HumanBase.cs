namespace IUstaApi.Models;

public class HumanBase
{
    public string Id { get; set; }
    public string Name { get; set; }
    public string Surname { get; set; }
    public string Photo { get; set; }
    public string Location { get; set; }
    public DateTime BirthDate { get; set; }
    public string Gender { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string PhoneNumber { get; set; }
    public BankCard Card { get; set; }
    public float Rating { get; set; }
    public int TotalWorkDone { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime? UpdatedTime { get; set; }
}