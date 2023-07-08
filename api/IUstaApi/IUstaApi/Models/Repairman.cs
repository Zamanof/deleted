namespace IUstaApi.Models;

public class Repairman : HumanBase
{
    public List<Order> Orders { get; set; }
    public string Category { get; set; }
    public DateTime JoinDate { get; set; }
    public float HourlyPrice { get; set; }
    public float MonthlyIncome { get; set; }
    public string? Description { get; set; }
}