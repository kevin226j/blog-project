using Blog.Data.Abstract;
using Blog.Model;

namespace Blog.Data.Repositories {
    public class UserRepository: EntityBaseRepository<User>, IUserRepository {
        public UserRepository(BlogContext context) : base (context){ }

        public bool isEmailUnique (string email){
            var user = this.GetSingle(u => u.Email == email);
            return user == null;
        }

        public bool isUsernameUnique (string username){
            var user = this.GetSingle(u => u.Username == username);
            return user == null;
        }
    }
}