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

        public IActionResult GetQuestions()
        {
            var questionsList = new List<object>
            {
                new {Question = "Players Who Have Scored Over 100 Goals for Manchester United",
                    Options = new List<string>{"Wayne Rooney", "Juan Mata", "Ruud Van Nistelrooy", "Michael Carrick", "Roy Keane", "Denis Law" },
                    Answers = new List<string>{ "Wayne Rooney", "Ruud Van Nistelrooy", "Denis Law" }
                },
                new {Question = "Players Who Have Won the Champions League with Manchester United",
                    Options = new List<string>{ "Bobby Charlton", "Eric Cantona", "Steve Bruce", "Anderson", "Wes Brown", "Robin Van Persie"},
                    Answers = new List<string>{ "Bobby Charlton", "Anderson", "Wes Brown" }
                },
                new {Question = "Players Who Have Been Sent Off for Manchester United",
                    Options = new List<string>{ "Ryan Giggs", "Edwin Van De Sar", "Juan Mata", "Chris Smalling", "Phil Jones", "Bryan Robson" },
                    Answers = new List<string>{ "Juan Mata", "Chris Smalling", "Bryan Robson" }
                },
            };

            return Json(questionsList);
        }

        public IActionResult Submit(string columns)
        {
            return Json(columns);
        }
    }
}
