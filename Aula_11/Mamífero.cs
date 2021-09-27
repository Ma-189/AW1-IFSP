using System;
using System.Collections.Generic;
using System.Text;

namespace Aula11
{
    public class Mamífero : Animal
    {
        public Mamífero()
        {
            this.Caracteristicas();
        }
        protected override void Caracteristicas()
        {
            base.Caracteristicas();
            Console.Write("Mamíferos\n");
            Console.WriteLine("São animais que se caracterizam pela presença pelos e glândulas mamárias");
        }
    }
}
