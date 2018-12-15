using Blog.Model;

namespace Blog.Data.Abstract
{
    public interface IStoryRepository : IEntityBaseRepository<Story>
    {
        bool isOwner(string storyId, string userId);
    }
}