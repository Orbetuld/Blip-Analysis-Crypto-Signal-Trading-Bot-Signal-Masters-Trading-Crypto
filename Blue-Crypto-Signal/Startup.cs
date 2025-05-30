using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using RealTimeSQL.Data;
using RealTimeSQL.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RealTimeSQL
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddRazorPages().AddRazorRuntimeCompilation();
            services.AddControllersWithViews();
            string SQLCon = "Data Source=Localhost;Initial Catalog=DevDB;User Id=sa;Password=Abc@12345;Connection Lifetime=30;Pooling=True;Min Pool Size=5;Max Pool Size=100;Connection TimeOut=60;";
            services.AddDbContext<AppDBContext>(option => option.UseSqlServer(SQLCon));
            //string MySQLCon = "server=Localhost;database=Dev;user=root;password=Abc@12345;TreatTinyAsBoolean=true;";
            //var serverVersion = new MySqlServerVersion(new Version(8, 0, 21));

            //// Replace 'YourDbContext' with the name of your own DbContext derived class.
            //services.AddDbContext<AppDBContext>(
            //        dbContextOptions => dbContextOptions
            //            .UseMySql(MySQLCon, serverVersion)
            //            .EnableSensitiveDataLogging() // These two calls are optional but help
            //            .EnableDetailedErrors()      // with debugging (remove for production).
            //);
            services.AddSignalR();
            services.AddTransient<ISQLRepositiory, SQLRepositiory>();
            services.AddHostedService<BackgroudServices.CoinBackgroundService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
                endpoints.MapHub<Hubs.SQLHub>("/SQLHub");
            });
        }
    }
}
