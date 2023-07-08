namespace IUstaApi.Models;

public class Customer : HumanBase
{
    public Company? Company { get; set; }
    public float MonthlySpending { get; set; }
}