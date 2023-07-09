namespace IUstaApi.Models;

public class Company
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string? Niche { get; set; }
    public string Location { get; set; }
    public string? Website { get; set; }
    public string Email { get; set; }
    public string Phone { get; set; }
    public DateTime CreatedDate { get; set; }
}