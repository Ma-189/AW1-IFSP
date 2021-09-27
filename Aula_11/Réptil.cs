using System;
using System.Collections.Generic;
using System.Text;

namespace Aula11
{
    public class Réptil : Animal
    {
        public Réptil()
        {
            this.Caracteristicas();
        }
        protected override void Caracteristicas()
        {
            base.Caracteristicas();
            Console.Write("Répteis\n");
            Console.WriteLine("São animais que se caracterizam pela sua pele grossa, impermeável e coberta por escamas ou placas ósseas ");
        }
    }
}
