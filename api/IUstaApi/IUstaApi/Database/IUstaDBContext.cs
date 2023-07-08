using IUstaApi.Models;
using Microsoft.EntityFrameworkCore;

namespace IUstaApi.Database;

public class IUstaDBContext : DbContext
{
	public IUstaDBContext(DbContextOptions<IUstaDBContext> options) : base(options)
	{ }

	public DbSet<Admin> admins { get; set; }
    public DbSet<BankCard> bankCards { get; set; }
    public DbSet<Category> categories { get; set; }
    public DbSet<Company> companyies { get; set; }
    public DbSet<Customer> customers { get; set; }
    public DbSet<Order> orders { get; set; }
    public DbSet<Repairman> repairmans { get; set; }
}