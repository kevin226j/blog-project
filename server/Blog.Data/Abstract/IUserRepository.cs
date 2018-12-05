using Blog.Model;

namespace Blog.Data.Abstract
{
    public interface IUserRepository : IEntityBaseRepository<User>
    {
        bool isUsernameUnique(string username);
        bool isEmailUnique(string email);
    }
}