namespace MedicalApp.Classes
{
    public class Question
    {
        public string? Question_name;
        public string? Theme;
        public string? QuestionText;
        public int NumberOfAnswers;
        public List<string> answers = new List<string>();
        public Question() {

        }
        public bool InitByParams(string[] values)
        {
            Question_name = values[0];
            Theme = values[1];
            QuestionText = values[2];
            try
            {
                NumberOfAnswers = Convert.ToInt32(values[3]);

                for (int i = 0; i < NumberOfAnswers; i++)
                {
                    answers.Add(values[4 + i]);
                }
            }
            catch (Exception e)
            {
                return false;
            }
            return true;
        }
    }
}
