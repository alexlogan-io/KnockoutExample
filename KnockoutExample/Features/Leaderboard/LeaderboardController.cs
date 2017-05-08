using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace KnockoutExample.Features.Leaderboard
{
    public class LeaderboardController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult GetScores()
        {
            var scores = new List<Object>
            {
                new {Name="Alex Logan", Date=DateTime.Now.AddDays(-3), Score = 9},
                new {Name="Jake Gittes", Date=DateTime.Now.AddDays(-6), Score = 8}
            };

            return Json(scores);
        }
    }
}
