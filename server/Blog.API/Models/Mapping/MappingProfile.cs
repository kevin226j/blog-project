using AutoMapper;
using Blog.Model;

namespace Blog.API.Models.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Story, StoryDetailViewModel>()
                .ForMember(s => s.OwnerUsername, map => map.MapFrom(s => s.Owner.Username));
            CreateMap<Story, DraftViewModel>();
            CreateMap<Story, StoryViewModel>();
        }
    }
}