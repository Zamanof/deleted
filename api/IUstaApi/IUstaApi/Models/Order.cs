namespace IUstaApi.Models;

public class Order
{
    public string Id { get; set; }
    public string Title { get; set; }
    public string Service { get; set; }
    public string CustomerId { get; set; }
    public List<Repairman> Repairman { get; set; }
    public string Category { get; set; }
    public int OrderStatus { get; set; }
    public float TotalAmount { get; set; }
    public bool isDoneByRepairman { get; set; } = false;
    public bool isDoneByCustomer { get; set; } = false;
    public DateTime CreatedDate { get; set; }
}