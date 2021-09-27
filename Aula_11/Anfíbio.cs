using System;
using System.Collections.Generic;
using System.Text;

namespace Aula11
{
    public class Anfíbio : Animal
    {
        public Anfíbio()
        {
            this.Caracteristicas();
        }
        protected override void Caracteristicas()
        {
            base.Caracteristicas();
            Console.Write("Anfíbios\n");
            Console.WriteLine("São animais que se caracterizam por sua pele úmida, lisa glanduífera e apta para a respiração cutânea");
        }
    }
}
