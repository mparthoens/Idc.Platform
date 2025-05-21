using System.Reflection;
using Microsoft.Extensions.DependencyInjection;
using MediatR;
using AutoMapper;

namespace Idc.Platform.Application
{
    /// <summary>
    /// Extension methods for configuring application layer services
    /// </summary>
    public static class DependencyInjection
    {
        /// <summary>
        /// Adds application layer services to the service collection
        /// </summary>
        /// <param name="services">The service collection to add services to</param>
        /// <returns>The service collection for chaining</returns>
        public static IServiceCollection AddApplication(this IServiceCollection services)
        {
            // Register MediatR handlers, preprocessors, and postprocessors
            // This scans the assembly for implementations of IRequestHandler, INotificationHandler, etc.
            services.AddMediatR(Assembly.GetExecutingAssembly());

            // Configure AutoMapper manually
            var mapperConfig = new MapperConfiguration(cfg =>
            {
                // Add all mapping profiles from the current assembly
                cfg.AddMaps(Assembly.GetExecutingAssembly());
            });

            // Create the mapper instance
            IMapper mapper = mapperConfig.CreateMapper();

            // Register the mapper as a singleton
            services.AddSingleton(mapper);

            return services;
        }
    }
}
