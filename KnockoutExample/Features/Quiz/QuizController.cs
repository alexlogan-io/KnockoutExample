using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace KnockoutExample.Features.Quiz
{
    public class QuizController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult GetGoalsOptions()
        {
            return Json(new string[] { "Wayne Rooney", "Juan Mata", "Ruud Van Nistelrooy", "Michael Carrick", "Roy Keane", "Denis Law", });
        }

        public IActionResult GetGoalsAnswers()
        {
            return Json(new string[] { "Wayne Rooney", "Ruud Van Nistelrooy", "Denis Law" });
        }

        public IActionResult GetChampOptions()
        {
            return Json(new string[] { "Bobby Charlton", "Eric Cantona", "Steve Bruce", "Anderson", "Wes Brown", "Robin Van Persie"});
        }

        public IActionResult GetChampAnswers()
        {
            return Json(new string[] { "Bobby Charlton","Anderson","Wes Brown" });
        }

        public IActionResult GetSentOffOptions()
        {
            return Json(new string[] { "Ryan Giggs", "Edwin Van De Sar", "Juan Mata", "Chris Smalling", "Phil Jones", "Bryan Robson" });
        }

        public IActionResult GetSentOffAnswers()
        {
            return Json(new string[] { "Juan Mata", "Chris Smalling", "Bryan Robson" });
        }

        public IActionResult Submit(string columns)
        {
            return Json(columns);
        }
    }
}
