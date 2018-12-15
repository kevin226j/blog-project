using System.Collections.Generic;

namespace Blog.API.Models
{
    public class UpdateStoryViewModel
    {
        public string Title { get; set; }
        public string Content { get; set; }
        public List<string> Tags { get; set; }
    }
}