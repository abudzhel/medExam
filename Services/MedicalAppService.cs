using MedicalApp.Classes;
using Microsoft.VisualBasic.FileIO;
using Newtonsoft.Json;
using System.Text.Json;

namespace MedicalApp.Services
{
    public class MedicalAppService
    {
        readonly string pathToReports = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments) + "/scores/Scores_csv";
        private List<Question> questions = new List<Question>();
        private Dictionary<string, List<Question>> Questions_per_File = new Dictionary<string, List<Question>>();
        private Dictionary<string, List<Question>> Questions_per_File_Json = new Dictionary<string, List<Question>>();

        public Dictionary<string, List<Question>> getQuestionsTable()
        {
            return Questions_per_File;
        }
        public MedicalAppService() 
        {
            string[] files = Directory.GetFiles(pathToReports);

            foreach (string file in files)
            {
                ParseCSV(file);
            }
        }
        private string RemoveExtension(string fileName)
        {
            int fileExtPos = fileName.LastIndexOf(".");
            if (fileExtPos >= 0)
                fileName = fileName.Substring(0, fileExtPos);
            return fileName;
        }
        void ParseCSV(string score_file)
        {
            TextFieldParser parser = new TextFieldParser(Path.Combine(pathToReports, score_file));

            parser.TextFieldType = FieldType.Delimited;
            parser.SetDelimiters(";");
            string ScoreName = RemoveExtension(score_file);
            while (!parser.EndOfData)
            {
                //Process row
                string[] fields = parser.ReadFields();
                if (fields == null)
                {
                    continue;
                }
                Question q = new Question();
                bool ret = q.InitByParams(fields);
                if (ret)
                {
                    Questions_per_File[ScoreName].Add(q);
                }
            }
            using (StreamWriter outputFile1 = new StreamWriter(Path.Combine(pathToReports, ScoreName + ".json")))
            {
                outputFile1.Write(JsonConvert.SerializeObject(questions, Formatting.Indented));
            }
        }
        void ReadQuestionsFromJson(string Score)
        {
            string[] files = Directory.GetFiles(pathToReports);

            foreach (string file in files)
            {
                string jsonString = File.ReadAllText(file);
                Questions_per_File_Json[file] = JsonConvert.DeserializeObject<List<Question>>(jsonString)!;
            }
        }
    }
}
