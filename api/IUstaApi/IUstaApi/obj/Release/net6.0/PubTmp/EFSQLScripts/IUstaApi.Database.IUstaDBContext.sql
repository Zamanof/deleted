IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230708192604_InitialMigrate')
BEGIN
    CREATE TABLE [Admins] (
        [Id] nvarchar(450) NOT NULL,
        [Email] nvarchar(max) NOT NULL,
        [Password] nvarchar(max) NOT NULL,
        CONSTRAINT [PK_Admins] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230708192604_InitialMigrate')
BEGIN
    CREATE TABLE [BankCards] (
        [Id] nvarchar(450) NOT NULL,
        [Digits] nvarchar(max) NOT NULL,
        [CVV] int NOT NULL,
        [ExpireDate] datetime2 NOT NULL,
        CONSTRAINT [PK_BankCards] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230708192604_InitialMigrate')
BEGIN
    CREATE TABLE [Categories] (
        [Id] int NOT NULL IDENTITY,
        [Name] nvarchar(max) NOT NULL,
        CONSTRAINT [PK_Categories] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230708192604_InitialMigrate')
BEGIN
    CREATE TABLE [Companies] (
        [Id] int NOT NULL IDENTITY,
        [Name] nvarchar(max) NOT NULL,
        [Description] nvarchar(max) NOT NULL,
        [Niche] nvarchar(max) NULL,
        [Location] nvarchar(max) NOT NULL,
        [Website] nvarchar(max) NULL,
        [Email] nvarchar(max) NOT NULL,
        [Phone] nvarchar(max) NOT NULL,
        [CreatedDate] datetime2 NOT NULL,
        CONSTRAINT [PK_Companies] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230708192604_InitialMigrate')
BEGIN
    CREATE TABLE [Orders] (
        [Id] nvarchar(450) NOT NULL,
        [Title] nvarchar(max) NOT NULL,
        [Service] nvarchar(max) NOT NULL,
        [CustomerId] nvarchar(max) NOT NULL,
        [Category] nvarchar(max) NOT NULL,
        [OrderStatus] int NOT NULL,
        [TotalAmount] real NOT NULL,
        [isDoneByRepairman] bit NOT NULL,
        [isDoneByCustomer] bit NOT NULL,
        [CreatedDate] datetime2 NOT NULL,
        CONSTRAINT [PK_Orders] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230708192604_InitialMigrate')
BEGIN
    CREATE TABLE [Repairmen] (
        [Id] nvarchar(450) NOT NULL,
        [Category] nvarchar(max) NOT NULL,
        [JoinDate] datetime2 NOT NULL,
        [HourlyPrice] real NOT NULL,
        [MonthlyIncome] real NOT NULL,
        [Description] nvarchar(max) NULL,
        [Name] nvarchar(max) NOT NULL,
        [Surname] nvarchar(max) NOT NULL,
        [Photo] nvarchar(max) NOT NULL,
        [Location] nvarchar(max) NOT NULL,
        [BirthDate] datetime2 NOT NULL,
        [Gender] nvarchar(max) NOT NULL,
        [Email] nvarchar(max) NOT NULL,
        [Password] nvarchar(max) NOT NULL,
        [PhoneNumber] nvarchar(max) NOT NULL,
        [CardId] nvarchar(450) NOT NULL,
        [Rating] real NOT NULL,
        [TotalWorkDone] int NOT NULL,
        [CreatedDate] datetime2 NOT NULL,
        [UpdatedTime] datetime2 NULL,
        CONSTRAINT [PK_Repairmen] PRIMARY KEY ([Id]),
        CONSTRAINT [FK_Repairmen_BankCards_CardId] FOREIGN KEY ([CardId]) REFERENCES [BankCards] ([Id]) ON DELETE CASCADE
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230708192604_InitialMigrate')
BEGIN
    CREATE TABLE [Customers] (
        [Id] nvarchar(450) NOT NULL,
        [CompanyId] int NULL,
        [MonthlySpending] real NOT NULL,
        [Name] nvarchar(max) NOT NULL,
        [Surname] nvarchar(max) NOT NULL,
        [Photo] nvarchar(max) NOT NULL,
        [Location] nvarchar(max) NOT NULL,
        [BirthDate] datetime2 NOT NULL,
        [Gender] nvarchar(max) NOT NULL,
        [Email] nvarchar(max) NOT NULL,
        [Password] nvarchar(max) NOT NULL,
        [PhoneNumber] nvarchar(max) NOT NULL,
        [CardId] nvarchar(450) NOT NULL,
        [Rating] real NOT NULL,
        [TotalWorkDone] int NOT NULL,
        [CreatedDate] datetime2 NOT NULL,
        [UpdatedTime] datetime2 NULL,
        CONSTRAINT [PK_Customers] PRIMARY KEY ([Id]),
        CONSTRAINT [FK_Customers_BankCards_CardId] FOREIGN KEY ([CardId]) REFERENCES [BankCards] ([Id]) ON DELETE CASCADE,
        CONSTRAINT [FK_Customers_Companies_CompanyId] FOREIGN KEY ([CompanyId]) REFERENCES [Companies] ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230708192604_InitialMigrate')
BEGIN
    CREATE TABLE [OrderRepairman] (
        [OrdersId] nvarchar(450) NOT NULL,
        [RepairmenId] nvarchar(450) NOT NULL,
        CONSTRAINT [PK_OrderRepairman] PRIMARY KEY ([OrdersId], [RepairmenId]),
        CONSTRAINT [FK_OrderRepairman_Orders_OrdersId] FOREIGN KEY ([OrdersId]) REFERENCES [Orders] ([Id]) ON DELETE CASCADE,
        CONSTRAINT [FK_OrderRepairman_Repairmen_RepairmenId] FOREIGN KEY ([RepairmenId]) REFERENCES [Repairmen] ([Id]) ON DELETE CASCADE
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230708192604_InitialMigrate')
BEGIN
    CREATE INDEX [IX_Customers_CardId] ON [Customers] ([CardId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230708192604_InitialMigrate')
BEGIN
    CREATE INDEX [IX_Customers_CompanyId] ON [Customers] ([CompanyId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230708192604_InitialMigrate')
BEGIN
    CREATE INDEX [IX_OrderRepairman_RepairmenId] ON [OrderRepairman] ([RepairmenId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230708192604_InitialMigrate')
BEGIN
    CREATE INDEX [IX_Repairmen_CardId] ON [Repairmen] ([CardId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230708192604_InitialMigrate')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20230708192604_InitialMigrate', N'7.0.8');
END;
GO

COMMIT;
GO

