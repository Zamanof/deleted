using IUstaApi.Models;
using Microsoft.EntityFrameworkCore;

namespace IUstaApi.Database;

public class IUstaDBContext : DbContext
{
	public IUstaDBContext(DbContextOptions<IUstaDBContext> options) : base(options)
	{ }

	public DbSet<Admin> Admins { get; set; }
    public DbSet<BankCard> BankCards { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<Company> Companies { get; set; }
    public DbSet<Customer> Customers { get; set; }
    public DbSet<Order> Orders { get; set; }
    public DbSet<Repairman> Repairmen { get; set; }
}